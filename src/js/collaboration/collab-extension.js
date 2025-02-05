import { yProvider } from '../yjs-setup.js';
import { RubberBandSelection } from './RubberBandSelection';
import { html, render } from 'lit-html';
import { collabTemplate, uiCoords } from './templates.js';
import { multiSelectTemplate } from '../templates/multiSelect';
import {
  singleSelectTemplate,
  userAwarenessTemplate,
} from '../templates/userAwareness';
import { userListTemplate } from '../templates/userList.js';
import {
  highlightLayerTemplate,
  highlightTemplate,
} from '../templates/highlights.js';
import { setState, state } from '../state/comments.js';
import { layoutService } from '../state/layoutStateMachine.js';
import { featureIsEnabled } from '../boostrap.js';
import { global_cursor } from '../vhv-scripts/global-variables.js';
import { get } from 'lib0/indexeddb';

let DEBUG = false;
function log(text) {
  if (DEBUG) {
    console.log(`[${new Date().toLocaleTimeString()}] ${text}`);
  }
}

export function formatUserElem(elem) {
  const [, qOn, qOff, pitchName, accidental, octave] = elem.classList;
  const formattedElem = {};
  // prettier-ignore
  formattedElem.attrs = formatAttributes({ qOn, qOff, pitchName, accidental, octave });
  // formattedElem.clientIds = Array.from(elem.clientIds);

  return JSON.stringify(formattedElem, null, 2);
}

function formatAttributes(attrs) {
  let qOn = parseQuarterTime(attrs.qOn);
  let qOff = parseQuarterTime(attrs.qOff);

  let duration = qOff - qOn;

  switch (duration) {
    case 0.25:
      duration = '1/4';
      break;
    case 0.5:
      duration = '1/2';
      break;
    case 1:
    case 2:
    case 4:
      duration = duration.toString();
      break;
    default:
      log('Uknown time duration value', duration);
      break;
  }

  let accidental = attrs.accidental.split('-')[1];
  switch (accidental) {
    case 'n':
      accidental = 'natural';
      break;
    case 's':
      accidental = 'sharp';
      break;
    case 'f':
      accidental = 'flat';
      break;
    case 'ff':
      accidental = 'double flat';
      break;
    case 'ss':
      accidental = 'double sharp';
      break;
    default:
      log('Uknown accidental value', accidental);
      break;
  }

  return {
    duration,
    pitch: attrs.pitchName.split('-')[1],
    accidental,
    octave: attrs.octave.split('-')[1],
  };
}

function parseQuarterTime(quarterTime) {
  let [qTimeValue, divisor] = quarterTime.split(/\D/).filter(Boolean);
  qTimeValue = parseInt(qTimeValue, 10);
  return quarterTime.includes('_') ? qTimeValue / divisor : qTimeValue;
}

function defaultClients() {
  return {
    added: [],
    updated: [],
    removed: [],
  };
}

export function updateHandler(clients = defaultClients()) {
  const awStates = Array.from(yProvider.awareness.getStates().entries());
  // console.log(yProvider.awareness.getStates());
  const f = () => {
    let collabContainer = document.querySelector('#output #collab');
    if (!collabContainer) {
      console.log(
        'Element div#collab is not found. Cannot render collaboration elements.'
      );
      collabContainer = document.createElement('div');
      collabContainer.id = 'collab';
      document.querySelector('#output')?.prepend(collabContainer);
    }

    let multiSelects = html`${awStates
      .filter(
        ([_, state]) => state.multiSelect != null && state?.user?.color != null
      )
      .map(([clientId, state]) =>
        multiSelectTemplate(
          clientId,
          clientId === yProvider.awareness.clientID,
          state.multiSelect,
          state.user.color
        )
      )}`;

    let singleSelects = html`${awStates
      .filter(
        ([_, state]) =>
          state?.singleSelect?.elemId != null && state?.user?.color != null
      )
      .map(([clientId, state]) =>
        singleSelectTemplate(
          clientId,
          state.singleSelect.elemId,
          state.user.color
        )
      )}`;

    let userAwareness = html`${awStates
      .filter(
        ([_, state]) =>
          state?.singleSelect?.elemId != null && state?.user?.name != null
      )
      .map(([clientId, state]) =>
        userAwarenessTemplate(
          clientId,
          state.singleSelect.elemId,
          state.user.name
        )
      )}`;

    let commentsVisible = layoutService.state
      .toStrings()
      .some((name) => name.toLowerCase().includes('comment'));

    let highlights = html`${commentsVisible ? 
      html`${state.comments
            ?.filter((c) => c?.highlight != null)
            .map((c) => highlightTemplate(c.id, c.highlight))}`
      : null
    }`

    render(
      html`
        ${collabLayer(multiSelects, singleSelects, userAwareness)}
        ${renderHighlightLayer(highlights)}
      `,
      collabContainer
    );

    // Display connection status (online/offline) for the users sharing the current document
    let onlineElem = document.querySelector('#online-users');
    if (onlineElem) {
      let connectedIds = [...yProvider.awareness.getStates().values()].map(
        (s) => s.user.id
      );
      let copy = [...state.users];
      setState({
        users: copy
          .map((u) => ({ ...u, online: connectedIds.includes(u.id) }))
          .sort((a, b) => b.online - a.online),
      });
      render(html`${userListTemplate(state.users)}`, onlineElem);
      // Initialize bootstrap tooltips
      $('[data-toggle="tooltip"]').tooltip();
    } else {
      console.log(
        'Element div#online-users is not found. Cannot display online user info.'
      );
    }
  };

  clients?.added?.forEach(f);
  clients?.updated?.forEach(f);
  clients?.removed?.forEach(f);
}

// window.addEventListener('DOMContentLoaded', () => {
//   if (featureIsEnabled('collaboration')) {
//     // Use a MutationObserver to find out when the score output SVG
//     // is added to the DOM and attach mouse event listeners to it.
//     // Then, disconnect the observer.
//     const mutationObserver = new MutationObserver((mutationsList, observer) => {
//       for (const mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//           if (mutation.target.id === 'output') {
//             if (
//               !mutation.target.onmousedown &&
//               !mutation.target.onmousemove &&
//               !mutation.target.onmouseup
//             ) {
//               addListenersToOutput(mutation.target);
//               observer.disconnect();
//             }
//           }
//         }
//       }
//     });
//     mutationObserver.observe(document.body, { childList: true, subtree: true });
//   }
// });

function collabLayer(...children) {
  let output = document.querySelector('#output');
  let renderBefore = document.querySelector('#output > svg');
  uiCoords.svgHeight = renderBefore?.height.baseVal.value ?? window.innerHeight;

  return collabTemplate(uiCoords.svgHeight, ...children);
}

export function renderHighlightLayer(...children) {
  let output = document.querySelector('#output');
  let svg = document.querySelector('#output > svg');

  let collab = output.querySelector('#collab-container');
  let svgHeight = svg?.height.baseVal.value ?? window.innerHeight;

  return highlightLayerTemplate(svgHeight, ...children);
}

export function addListenersToOutput(outputTarget) {
  let startTime, endTime;
  let shouldMultiSelect = false;
  const rbSelection = new RubberBandSelection();

  console.log('>>>Adding listeners to output')

  document.addEventListener('mousedown', (event) => {
    // Start selecting only when there isn't a note element on the cursor
    if (event.target.nodeName != 'svg') return;

    startTime = performance.now();

    rbSelection.isSelecting = true;
    rbSelection.setUpperCoords(event);
    const selectedAreas = document.querySelectorAll('.multi-select-area');

    const selectToRemove = [...selectedAreas].find(
      (elem) => elem.dataset.clientId == yProvider.awareness.clientID
    );
    if (selectToRemove) {
      yProvider.awareness.setLocalStateField('multiSelect', null);
    }
  });

  // TODO: Use requestAnimationFrame
  document.addEventListener('mousemove', (event) => {
    if (rbSelection.isSelecting) {
      endTime = performance.now();
      let timePassed = endTime - startTime;

      if (timePassed >= 300) {
        rbSelection.setLowerCoords(event);

        rbSelection.show();

        shouldMultiSelect = true;
      }
    }
  });

  document.addEventListener('mouseup', handleMouseUp(yProvider.awareness));

  function handleMouseUp(awareness) {
    return () => {
      rbSelection.reCalculateCoords();
      rbSelection.isSelecting = false;

      if (shouldMultiSelect) {
        // TODO: extremely inefficient, selecting every single note element
        const notes = Array.from(document.querySelectorAll('.note, .beam'));
        const selectedElements = rbSelection.selectNoteElements(notes);

        setNoteBounds(selectedElements);

        const multiSelectedNotes = selectedElements
          .map((note) => note.id)
          .filter((id) => /^note/g.test(id));

        if (multiSelectedNotes.length > 0) {
          awareness?.setLocalStateField('multiSelect', multiSelectedNotes);
        }

        shouldMultiSelect = false;
      }

      rbSelection.resetCoords();
      // rbSelection.selectAreaElem.hidden = true;
      rbSelection.hide();
      startTime = endTime = undefined;
    };
  }
}

function createNoteBounds() {
  /** @type {HTMLElement | null} */ let leftMost = null;
  /** @type {HTMLElement | null} */ let rightMost = null;

  return {
    /**
     * 
     * @param {HTMLElement | null} left 
     * @param {HTMLElement | null} right 
     */
    setBounds(left, right) {
      if (left) {
        leftMost = left;
      }

      if (right) {
        rightMost = right;
      }
    },
    /**
     * 
     * @returns {{ leftMost: HTMLElement | null, rightMost: HTMLElement | null}}
     */
    getBounds() { return { leftMost, rightMost }}
  }
}

export let noteBounds = createNoteBounds();
/**
 * 
 * @param {HTMLElement[]} selectedElements 
 */
function setNoteBounds(selectedElements) {
  if (selectedElements.length > 0) {
    let selectedNotes = [...selectedElements].map(elem => {
      return elem.classList.contains('beam') ? elem.querySelector('.note') : elem
    });

    let { leftMost, rightMost } = findLeftMostAndRightMost(selectedNotes);
    if (leftMost && rightMost) {
      noteBounds.setBounds(leftMost, rightMost);
    }

    console.log({ leftMost, rightMost });
    if (leftMost) {
      global_cursor.CursorNote = leftMost;
    }
  }
}

function findLeftMostAndRightMost(selectedNotes) {
  let leftMost = selectedNotes[0];
  let rightMost = selectedNotes[0];
  for (let note of selectedNotes.slice(1)) {
    let noteBox = note.getBoundingClientRect();
    if (noteBox.left < leftMost?.getBoundingClientRect().left) {
      leftMost = note;
    }

    if (noteBox.left > rightMost?.getBoundingClientRect().left) {
      rightMost = note;
    }
  }
  return { leftMost, rightMost };
}
