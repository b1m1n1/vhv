
/* Click listeners for navbar menu items generated by src/generate-menu-DOM.js */
import { getMenu } from './menu.js';
import { ClassWatcher } from './collaboration/ClassWatcher.js';

const menu = getMenu();

document.querySelector('#load-from-repository__submenu-item').addEventListener('click', () => menu.loadFromRepository());
document.querySelector('#open__submenu-item').addEventListener('click', () => menu.openScoreFileFromDisk());
document.querySelector('#save-editor-contents__submenu-item').addEventListener('click', () => menu.saveTextEditorContents());
document.querySelector('#save-as-midi__submenu-item').addEventListener('click', () => menu.saveAsMIDI());
document.querySelector('#save-as-pdf__submenu-item').addEventListener('click', () => menu.createPdf());
document.querySelector('#save-view-as-pdf__submenu-item').addEventListener('click', () => menu.createPdfPage());
document.querySelector('#save-view-as-svg__submenu-item').addEventListener('click', () => menu.saveSvgData());
document.querySelector('#save-as-musicxml__submenu-item').addEventListener('click', () => menu.convertToMusicXmlAndSave());
document.querySelector('#display-mei-data__submenu-item').addEventListener('click', () => menu.displayMeiData());
document.querySelector('#display-humdrum-data__submenu-item').addEventListener('click', () => menu.displayHumdrumData());
document.querySelector('#save-to-buffer-1__submenu-item').addEventListener('click', () => menu.saveToBuffer(1));
document.querySelector('#save-to-buffer-2__submenu-item').addEventListener('click', () => menu.saveToBuffer(2));
document.querySelector('#save-to-buffer-3__submenu-item').addEventListener('click', () => menu.saveToBuffer(3));
document.querySelector('#save-to-buffer-4__submenu-item').addEventListener('click', () => menu.saveToBuffer(4));
document.querySelector('#save-to-buffer-5__submenu-item').addEventListener('click', () => menu.saveToBuffer(5));
document.querySelector('#save-to-buffer-6__submenu-item').addEventListener('click', () => menu.saveToBuffer(6));
document.querySelector('#save-to-buffer-7__submenu-item').addEventListener('click', () => menu.saveToBuffer(7));
document.querySelector('#save-to-buffer-8__submenu-item').addEventListener('click', () => menu.saveToBuffer(8));
document.querySelector('#save-to-buffer-9__submenu-item').addEventListener('click', () => menu.saveToBuffer(9));
document.querySelector('#load-from-buffer-1__submenu-item').addEventListener('click', () => menu.loadFromBuffer(1));
document.querySelector('#load-from-buffer-2__submenu-item').addEventListener('click', () => menu.loadFromBuffer(2));
document.querySelector('#load-from-buffer-3__submenu-item').addEventListener('click', () => menu.loadFromBuffer(3));
document.querySelector('#load-from-buffer-4__submenu-item').addEventListener('click', () => menu.loadFromBuffer(4));
document.querySelector('#load-from-buffer-5__submenu-item').addEventListener('click', () => menu.loadFromBuffer(5));
document.querySelector('#load-from-buffer-6__submenu-item').addEventListener('click', () => menu.loadFromBuffer(6));
document.querySelector('#load-from-buffer-7__submenu-item').addEventListener('click', () => menu.loadFromBuffer(7));
document.querySelector('#load-from-buffer-8__submenu-item').addEventListener('click', () => menu.loadFromBuffer(8));
document.querySelector('#load-from-buffer-9__submenu-item').addEventListener('click', () => menu.loadFromBuffer(9));
document.querySelector('#load-from-autosave-buffer__submenu-item').addEventListener('click', () => menu.loadFromBuffer(0));
document.querySelector('#reload-data-from-source__submenu-item').addEventListener('click', () => menu.reloadFromSource());
document.querySelector('#convert-to-humdrum__submenu-item').addEventListener('click', () => menu.convertToHumdrum());
document.querySelector('#toggle-csv-tsv__submenu-item').addEventListener('click', () => menu.toggleCsvTsv());
document.querySelector('#play-pause-midi-performance__submenu-item').addEventListener('click', () => menu.toggleMidiPlayback());
document.querySelector('#make-notation-larger__submenu-item').addEventListener('click', () => menu.adjustNotationScale(event, 1.05));
document.querySelector('#make-notation-smaller__submenu-item').addEventListener('click', () => menu.adjustNotationScale(event, 0.95));
document.querySelector('#increase-horizontal-notation-spacing__submenu-item').addEventListener('click', () => menu.increaseNotationSpacing());
document.querySelector('#decrease-horizontal-notation-spacing__submenu-item').addEventListener('click', () => menu.decreaseNotationSpacing());
document.querySelector('#increase-vertical-staff-spacing__submenu-item').addEventListener('click', () => menu.increaseStaffSpacing());
document.querySelector('#decrease-vertical-staff-spacing__submenu-item').addEventListener('click', () => menu.decreaseStaffSpacing());
document.querySelector('#increase-vertical-system-spacing__submenu-item').addEventListener('click', () => menu.increaseSystemSpacing());
document.querySelector('#decrease-vertical-system-spacing__submenu-item').addEventListener('click', () => menu.decreaseSystemSpacing());
document.querySelector('#ignore-encoded-line-breaks__submenu-item').addEventListener('click', () => menu.lineBreaksOff());
document.querySelector('#display-with-encoded-line-breaks__submenu-item').addEventListener('click', () => menu.lineBreaksOn());
document.querySelector('#increase-text-size__submenu-item').addEventListener('click', () => menu.increaseLyricSize());
document.querySelector('#decrease-text-size__submenu-item').addEventListener('click', () => menu.decreaseLyricSize());
document.querySelector('#auto-tab-width__submenu-item').addEventListener('click', () => menu.fitTabSizeToData());
document.querySelector('#increase-tab-width__submenu-item').addEventListener('click', () => menu.increaseTabSize());
document.querySelector('#decrease-tab-width__submenu-item').addEventListener('click', () => menu.decreaseTabSize());
document.querySelector('#start-splitting--32-measure-splits-__submenu-item').addEventListener('click', () => menu.startSplit(32));
document.querySelector('#next-split__submenu-item').addEventListener('click', () => menu.nextSplit(32));
document.querySelector('#previous-split__submenu-item').addEventListener('click', () => menu.previousSplit(32));
document.querySelector('#remove-splits__submenu-item').addEventListener('click', () => menu.removeSplits());
document.querySelector('#bravura__submenu-item').addEventListener('click', () => menu.useBravuraFont());
document.querySelector('#gootville__submenu-item').addEventListener('click', () => menu.useGootvilleFont());
document.querySelector('#leipzig__submenu-item').addEventListener('click', () => menu.useLeipzigFont());
document.querySelector('#leland__submenu-item').addEventListener('click', () => menu.useLelandFont());
document.querySelector('#petaluma__submenu-item').addEventListener('click', () => menu.usePetalumaFont());
document.querySelector('#toggle-text-display__submenu-item').addEventListener('click', () => menu.toggleDataDisplay());
document.querySelector('#increase-font-size__submenu-item').addEventListener('click', () => menu.increaseTextFontSize());
document.querySelector('#decrease-font-size__submenu-item').addEventListener('click', () => menu.decreaseTextFontSize());
document.querySelector('#toggle-csv-tsv-humdrum-display__submenu-item').addEventListener('click', () => menu.toggleCsvTsv());
document.querySelector('#toggle-layer-highlighting__submenu-item').addEventListener('click', () => menu.toggleLayerHighlighting());
document.querySelector('#freeze-unfreeze-notation-rendering__submenu-item').addEventListener('click', () => menu.toggleNotationFreezing());
document.querySelector('#toggle-original-clefs__submenu-item').addEventListener('click', () => menu.toggleOriginalClefs());
document.querySelector('#clear-text-editor__submenu-item').addEventListener('click', () => menu.clearEditorContents());
document.querySelector('#undo-last-change__submenu-item').addEventListener('click', () => menu.undo());
document.querySelector('#compile-embedded-filters__submenu-item').addEventListener('click', () => menu.compileEmbeddedFilters());
document.querySelector('#remove-trailing-tabs__submenu-item').addEventListener('click', () => menu.trimTabsInEditor());
document.querySelector('#beam-by-meter__submenu-item').addEventListener('click', () => menu.applyFilter('autobeam'));
document.querySelector('#split-beams-by-lyrics__submenu-item').addEventListener('click', () => menu.applyFilter('autobeam -l'));
document.querySelector('#remove-beams__submenu-item').addEventListener('click', () => menu.applyFilter('autobeam -r'));
document.querySelector('#sort-chords-highest-note-first__submenu-item').addEventListener('click', () => menu.applyFilter('chord -d'));
document.querySelector('#sort-chords-lowest-note-first__submenu-item').addEventListener('click', () => menu.applyFilter('chord -u'));
document.querySelector('#extract-first-note-in-chord__submenu-item').addEventListener('click', () => menu.applyFilter('chord -f'));
document.querySelector('#extract-last-note-in-chord__submenu-item').addEventListener('click', () => menu.applyFilter('chord -l'));
document.querySelector('#highest-note-in-chord__submenu-item').addEventListener('click', () => menu.applyFilter('chord -d | chord -f'));
document.querySelector('#lowest-note-in-chord__submenu-item').addEventListener('click', () => menu.applyFilter('chord -u | chord -f'));
document.querySelector('#compress-chords__submenu-item').addEventListener('click', () => menu.applyFilter('chord -m'));
document.querySelector('#expand-chords__submenu-item').addEventListener('click', () => menu.applyFilter('chord -M'));
document.querySelector('#bass-melody-chord-notes--for-grand-staff-scores-__submenu-item').addEventListener('click', () => menu.applyFilter('chord -u | chord -fs1 | chord -ls2'));
document.querySelector('#insert-local-comment-line--above-cursor-__submenu-item').addEventListener('click', () => menu.insertLocalCommentLine());
document.querySelector('#insert-interpretation-line--above-cursor-__submenu-item').addEventListener('click', () => menu.insertInterpretationCommentLine());
document.querySelector('#insert-null-data-line--above-cursor-__submenu-item').addEventListener('click', () => menu.insertNullDataLine());
document.querySelector('#insert-barline--above-cursor-__submenu-item').addEventListener('click', () => menu.insertBarline());
document.querySelector('#remove-null-lines__submenu-item').addEventListener('click', () => menu.applyFilter('rid -glid'));
document.querySelector('#remove-null-data-lines__submenu-item').addEventListener('click', () => menu.applyFilter('rid -d'));
document.querySelector('#remove-null-interpretation-lines__submenu-item').addEventListener('click', () => menu.applyFilter('rid -i'));
document.querySelector('#remove-null-local-comment-lines__submenu-item').addEventListener('click', () => menu.applyFilter('rid -l'));
document.querySelector('#remove-accidentals-from-trills-and-ornaments__submenu-item').addEventListener('click', () => menu.applyFilter('trillspell'));
document.querySelector('#remove-non-kern-spines__submenu-item').addEventListener('click', () => menu.applyFilter('extract -i kern'));
document.querySelector('#add-staff-above-system__submenu-item').addEventListener('click', () => menu.applyFilter('extract -s 1-$,0 | restfill -i blank'));
document.querySelector('#add-staff-above-system-with-hidden-rests__submenu-item').addEventListener('click', () => menu.applyFilter('extract -s 1-$,0 | restfill -yi blank'));
document.querySelector('#add-staff-below-system__submenu-item').addEventListener('click', () => menu.applyFilter('extract -s 0,1-$ | restfill -i blank'));
document.querySelector('#add-staff-below-system-with-hidden-rests__submenu-item').addEventListener('click', () => menu.applyFilter('extract -s 0,1-$ | restfill -yi blank'));
document.querySelector('#add-note-stem-directions__submenu-item').addEventListener('click', () => menu.applyFilter('autostem'));
document.querySelector('#remove-note-stem-directions__submenu-item').addEventListener('click', () => menu.applyFilter('autostem -r'));
document.querySelector('#add-lyric-verse-to-top-staff__submenu-item').addEventListener('click', () => menu.applyFilter('extract -s 1-$,0 -n text'));
document.querySelector('#remove-lyric-text__submenu-item').addEventListener('click', () => menu.applyFilter('extract -I text'));
document.querySelector('#split-beams-by-lyrics__submenu-item').addEventListener('click', () => menu.applyFilter('autobeam -l'));
document.querySelector('#tonic-to-c__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k c'));
document.querySelector('#tonic-to-c-sharp-__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k c#'));
document.querySelector('#tonic-to-d-flat-__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k d-'));
document.querySelector('#tonic-to-d__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k d'));
document.querySelector('#tonic-to-e-flat-__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k e-'));
document.querySelector('#tonic-to-e__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k e'));
document.querySelector('#tonic-to-f__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k f'));
document.querySelector('#tonic-to-f-sharp-__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k f#'));
document.querySelector('#tonic-to-g__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k g'));
document.querySelector('#tonic-to-a-flat-__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k a-'));
document.querySelector('#tonic-to-a__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k a'));
document.querySelector('#tonic-to-b-flat-__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k b-'));
document.querySelector('#tonic-to-b__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -k b'));
document.querySelector('#up-a-minor-second__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t m2'));
document.querySelector('#up-a-major-second__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t M2'));
document.querySelector('#up-a-minor-third__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t m3'));
document.querySelector('#up-a-major-third__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t M3'));
document.querySelector('#up-a-perfect-fourth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t P4'));
document.querySelector('#up-an-augmented-fourth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t A4'));
document.querySelector('#up-a-diminished-fifth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t d5'));
document.querySelector('#up-a-perfect-fifth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t P5'));
document.querySelector('#up-a-minor-sixth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t m6'));
document.querySelector('#up-a-major-sixth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t M6'));
document.querySelector('#up-a-minor-seventh__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t m7'));
document.querySelector('#up-a-major-seventh__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t M7'));
document.querySelector('#up-a-perfect-octave__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t P8'));
document.querySelector('#down-a-minor-second__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -m2'));
document.querySelector('#down-a-major-second__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -M2'));
document.querySelector('#down-a-minor-third__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -m3'));
document.querySelector('#down-a-major-third__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -M3'));
document.querySelector('#down-a-perfect-fourth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -P4'));
document.querySelector('#down-an-augmented-fourth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -A4'));
document.querySelector('#down-an-diminished-fifth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -d5'));
document.querySelector('#down-a-perfect-fifth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -P5'));
document.querySelector('#down-a-minor-sixth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -m6'));
document.querySelector('#down-a-major-sixth__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -M6'));
document.querySelector('#down-a-minor-seventh__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -m7'));
document.querySelector('#down-a-major-seventh__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -M7'));
document.querySelector('#down-a-perfect-octave__submenu-item').addEventListener('click', () => menu.applyFilter('transpose -t -P8'));
document.querySelector('#tassoize__submenu-item').addEventListener('click', () => menu.applyFilter('tassoize'));
document.querySelector('#unfocus-beam__submenu-item').addEventListener('click', () => menu.unfocusElement());
document.querySelector('#force-beam-above__submenu-item').addEventListener('click', () => menu.forceBeamAbove());
document.querySelector('#force-beam-below__submenu-item').addEventListener('click', () => menu.forceBeamBelow());
document.querySelector('#clear-beam-direction__submenu-item').addEventListener('click', () => menu.removeBeamOrientation());
document.querySelector('#unfocus-note__submenu-item').addEventListener('click', () => menu.unfocusElement());
document.querySelector('#next-melodic-note__submenu-item').addEventListener('click', () => menu.nextMelodicNote());
document.querySelector('#previous-melodic-note__submenu-item').addEventListener('click', () => menu.previousMelodicNote());
document.querySelector('#next-harmonic-note__submenu-item').addEventListener('click', () => menu.nextHarmonicNote());
document.querySelector('#previous-harmonic-note__submenu-item').addEventListener('click', () => menu.previousHarmonicNote());
document.querySelector('#up-a-step__submenu-item').addEventListener('click', () => menu.pitchUpStep(1));
document.querySelector('#down-a-step__submenu-item').addEventListener('click', () => menu.pitchDownStep(1));
document.querySelector('#up-an-octave__submenu-item').addEventListener('click', () => menu.pitchUpOctave(1));
document.querySelector('#down-an-octave__submenu-item').addEventListener('click', () => menu.pitchDownOctave(1));
document.querySelector('#up-a-fifth__submenu-item').addEventListener('click', () => menu.pitchUpStep(5));
document.querySelector('#down-a-third__submenu-item').addEventListener('click', () => menu.pitchDownStep(3));
document.querySelector('#force-stem-above__submenu-item').addEventListener('click', () => menu.forceNoteStemUp());
document.querySelector('#force-stem-below__submenu-item').addEventListener('click', () => menu.forceNoteStemUp());
document.querySelector('#clear-stem-direction__submenu-item').addEventListener('click', () => menu.removeStemDirection());
document.querySelector('#toggle-natural-accidental__submenu-item').addEventListener('click', () => menu.toggleNaturalAccidental());
document.querySelector('#toggle-sharp-accidental__submenu-item').addEventListener('click', () => menu.toggleSharpAccidental());
document.querySelector('#toggle-flat-accidental__submenu-item').addEventListener('click', () => menu.toggleFlatAccidental());
document.querySelector('#toggle-forced-display-of-accidental__submenu-item').addEventListener('click', () => menu.toggleForcedDisplay());
document.querySelector('#toggle-editorial-accidental__submenu-item').addEventListener('click', () => menu.toggleEditorialAccidental());
document.querySelector('#toggle-staccato__submenu-item').addEventListener('click', () => menu.toggleStaccato());
document.querySelector('#toggle-staccatissimo__submenu-item').addEventListener('click', () => menu.toggleStaccatissimo());
document.querySelector('#toggle-tenuto__submenu-item').addEventListener('click', () => menu.toggleTenuto());
document.querySelector('#toggle-accent__submenu-item').addEventListener('click', () => menu.toggleAccent());
document.querySelector('#toggle-marcato__submenu-item').addEventListener('click', () => menu.toggleMarcato());
document.querySelector('#toggle-fermata__submenu-item').addEventListener('click', () => menu.toggleFermata());
document.querySelector('#toggle-arpeggio__submenu-item').addEventListener('click', () => menu.toggleArpeggio());
document.querySelector('#toggle-minor-trill__submenu-item').addEventListener('click', () => menu.toggleMinorTrill());
document.querySelector('#toggle-major-trill__submenu-item').addEventListener('click', () => menu.toggleMajorTrill());
document.querySelector('#toggle-minor-lower-mordent__submenu-item').addEventListener('click', () => menu.toggleMinorLowerMordent());
document.querySelector('#toggle-major-lower-mordent__submenu-item').addEventListener('click', () => menu.toggleMajorLowerMordent());
document.querySelector('#toggle-minor-upper-mordent__submenu-item').addEventListener('click', () => menu.toggleMinorUpperMordent());
document.querySelector('#toggle-major-upper-mordent__submenu-item').addEventListener('click', () => menu.toggleMajorUpperMordent());
document.querySelector('#add-slur-to-next-note__submenu-item').addEventListener('click', () => menu.addSlur(1));
document.querySelector('#break-beam-before-note__submenu-item').addEventListener('click', () => menu.breakBeamBeforeNote());
document.querySelector('#break-beam-after-note__submenu-item').addEventListener('click', () => menu.breakBeamAfterNote());
document.querySelector('#toggle-pedal-down-before-note__submenu-item').addEventListener('click', () => menu.togglePedalDown());
document.querySelector('#toggle-pedal-up-after-note__submenu-item').addEventListener('click', () => menu.togglePedalUp());
document.querySelector('#toggle-gracenote-style__submenu-item').addEventListener('click', () => menu.toggleGraceNoteStyle());
document.querySelector('#toggle---mark__submenu-item').addEventListener('click', () => menu.toggleAtMark());
document.querySelector('#unfocus-rest__submenu-item').addEventListener('click', () => menu.unfocusElement());
document.querySelector('#next-melodic-note__submenu-item').addEventListener('click', () => menu.nextMelodicNote());
document.querySelector('#previous-melodic-note__submenu-item').addEventListener('click', () => menu.previousMelodicNote());
document.querySelector('#next-harmonic-note__submenu-item').addEventListener('click', () => menu.nextHarmonicNote());
document.querySelector('#previous-harmonic-note__submenu-item').addEventListener('click', () => menu.previousHarmonicNote());
document.querySelector('#make-rest-invisible__submenu-item').addEventListener('click', () => menu.makeRestInvisible());
document.querySelector('#unfocus-slur__submenu-item').addEventListener('click', () => menu.unfocusElement());
document.querySelector('#force-slur-above__submenu-item').addEventListener('click', () => menu.forceSlurAbove());
document.querySelector('#force-slur-below__submenu-item').addEventListener('click', () => menu.forceSlurBelow());
document.querySelector('#clear-slur-direction__submenu-item').addEventListener('click', () => menu.removeSlurOrientation());
document.querySelector('#delete-slur__submenu-item').addEventListener('click', () => menu.deleteSlur());
document.querySelector('#move-slur-start-left__submenu-item').addEventListener('click', () => menu.moveSlurStart(-1));
document.querySelector('#move-slur-start-right__submenu-item').addEventListener('click', () => menu.moveSlurStart(1));
document.querySelector('#move-slur-end-left__submenu-item').addEventListener('click', () => menu.moveSlurEnd(-1));
document.querySelector('#move-slur-end-right__submenu-item').addEventListener('click', () => menu.moveSlurEnd(1));
document.querySelector('#move-slur-end-3-notes-right__submenu-item').addEventListener('click', () => menu.moveSlurEnd(3));
document.querySelector('#unfocus-slur__submenu-item').addEventListener('click', () => menu.unfocusElement());
document.querySelector('#force-tie-above__submenu-item').addEventListener('click', () => menu.forceTieAbove());
document.querySelector('#force-tie-below__submenu-item').addEventListener('click', () => menu.forceTieBelow());
document.querySelector('#clear-tie-direction__submenu-item').addEventListener('click', () => menu.removeTieOrientation());
document.querySelector('#bach-370-chorales__submenu-item').addEventListener('click', () => menu.loadRepertory('chorales'));
document.querySelector('#bach-wtc-fugues__submenu-item').addEventListener('click', () => menu.loadRepertory('bach-wtc-fugues'));
document.querySelector('#beethoven-piano-sonatas__submenu-item').addEventListener('click', () => menu.loadRepertory('beethoven/sonatas'));
document.querySelector('#beethoven-string-quartets__submenu-item').addEventListener('click', () => menu.loadRepertory('beethoven/quartets'));
document.querySelector('#chopin-first-editions__submenu-item').addEventListener('click', () => menu.loadRepertory('chopin-first-editions'));
document.querySelector('#chopin-mazurkas__submenu-item').addEventListener('click', () => menu.loadRepertory('chopin/mazurkas'));
document.querySelector('#haydn-keyboard-sonatas__submenu-item').addEventListener('click', () => menu.loadRepertory('haydn/sonatas'));
document.querySelector('#hummel-preludes--op--67__submenu-item').addEventListener('click', () => menu.loadRepertory('hummel/preludes'));
document.querySelector('#joplin__submenu-item').addEventListener('click', () => menu.loadRepertory('joplin'));
document.querySelector('#mozart-piano-sonatas__submenu-item').addEventListener('click', () => menu.loadRepertory('mozart/sonatas'));
document.querySelector('#mozart--100-contradances--k-sup-6--sup--anh--c30-01__submenu-item').addEventListener('click', () => menu.loadRepertory('mozart/sonatas'));
document.querySelector('#scarlatti-sonatas__submenu-item').addEventListener('click', () => menu.loadRepertory('scarlatti/sonatas'));
document.querySelector('#barbershop-quartets__submenu-item').addEventListener('click', () => menu.loadRepertory('osu/barbershop'));
document.querySelector('#barbershop-quartets--grand-staff-__submenu-item').addEventListener('click', () => menu.loadRepertory('osu/barbershop', satb2gs));
document.querySelector('#deutscher-liderschatz__submenu-item').addEventListener('click', () => menu.loadRepertory('liederschatz1'));
document.querySelector('#polyrhythm-project__submenu-item').addEventListener('click', () => menu.loadRepertory('poly'));
document.querySelector('#show-comments__submenu-item').addEventListener('click', () => menu.showComments());
document.querySelector('#hide-comments__submenu-item').addEventListener('click', () => menu.hideComments());

document.querySelectorAll('li.dropdown').forEach(
  (item) =>
    new ClassWatcher(
      item,
      'show',
      () => {
        document.documentElement.style.setProperty('--collab-layer-zIndex', 1);
      },
      () => {
        document.documentElement.style.setProperty(
          '--collab-layer-zIndex',
          '1000'
        );
      }
    )
);
