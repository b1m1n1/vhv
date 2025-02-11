URL = window.URL || window.webkitURL;

var gumStream; //stream from getUserMedia()
var rec; //Recorder.js object
var input; //MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb.
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext; //audio context to help us record

var recordButton = document.getElementById('recordButton');
var stopButton = document.getElementById('stopButton');
var pauseButton = document.getElementById('pauseButton');

var download; // the name of the downloaded file
var fileUrl; // url to the produced audio file

//add events to those 3 buttons
recordButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);
pauseButton.addEventListener('click', pauseRecording);
document
    .getElementById('Download') ///////////////////////////////////////////////////////////////////////////////
    .addEventListener('click', handleFileDownload(), false);

function startRecording() {
  console.log('recordButton clicked');
  let rec_waveform = document.getElementById('rec_wave');
  rec_waveform.removeAttribute('hidden');
  let play_waveform = document.getElementById('play_wave');
  play_waveform.setAttribute('hidden', true);


  /*
            Simple constraints object, for more advanced audio features see
            https://addpipe.com/blog/audio-constraints-getusermedia/
        */

  var constraints = { audio: true, video: false };

  /*
            Disable the record button until we get a success or fail from getUserMedia() 
        */
  console.log('enable stopButton');
  recordButton.disabled = true;
  stopButton.disabled = false;
  pauseButton.disabled = false;
  PlayPause.disabled = true;
  Stop.disabled = true;
  toggleMute.disabled = true;
  Synchronize.disabled = true;
  Analyze.disabled = true;
  GotoSelectionButton.disabled = true;
  /*
            We're using the standard promise based getUserMedia() 
            https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        */

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {

      console.log(
        'getUserMedia() success, stream created, initializing Recorder.js ...'
      );

      /*
                create an audio context after getUserMedia is called
                sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
                the sampleRate defaults to the one set in your OS for your playback device
    
            */
      audioContext = new AudioContext();

      //update the format
      document.getElementById('formats').innerHTML =
        'Format: 1 channel pcm @ ' + audioContext.sampleRate / 1000 + 'kHz';

      /*  assign to gumStream for later use  */
      gumStream = stream;

      /* use the stream */
      input = audioContext.createMediaStreamSource(stream);

      if (!window.wavesurfer) {
        window.setupWaveSurfer();
      }

      if (!window.wavesurfer3) {
        window.setupMicWaveSurfer(audioContext);
      }

      /* 
                Create the Recorder object and configure to record mono sound (1 channel)
                Recording 2 channels  will double the file size
            */
      rec = new Recorder(input, { numChannels: 1 });

      //start the recording process
      rec.record();

      window.wavesurfer3.microphone.togglePlay();

      console.log('Recording started');
    })
    .catch(function (err) {
      //enable the record button if getUserMedia() fails
      recordButton.disabled = false;
      stopButton.disabled = true;
      pauseButton.disabled = true;
    });
}

function pauseRecording() {
  console.log('pauseButton clicked rec.recording=', rec.recording);
  if (rec.recording) {
    //pause
    rec.stop();
    pauseButton.title = 'Resume Recording';
  } else {
    //resume
    rec.record();
    pauseButton.title = 'Pause Recording';
  }
}

function stopRecording() {
  console.log('stopButton clicked');
  let rec_waveform = document.getElementById('rec_wave');
  rec_waveform.setAttribute('hidden', true);
  let play_waveform = document.getElementById('play_wave');
  play_waveform.removeAttribute('hidden');

  //disable the stop button, enable the record to allow for new recordings
  stopButton.disabled = true;
  recordButton.disabled = false;
  pauseButton.disabled = true;
  PlayPause.disabled = false;
  Stop.disabled = false;
  toggleMute.disabled = false;
  Synchronize.disabled = false;
  Analyze.disabled = false;
  Download.disabled = false;
  GotoSelectionButton.disabled = false;

  //reset button just in case the recording is stopped while paused
  pauseButton.title = 'Pause Recording';
  window.wavesurfer3.microphone.stop();

  //tell the recorder to stop the recording
  rec.stop();

  //stop microphone access
  gumStream.getAudioTracks()[0].stop();

  //create the wav blob and pass it on to createDownloadLink
  rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {
  var url = URL.createObjectURL(blob);
  var au = document.createElement('audio');
  var li = document.createElement('li');
  var link = document.createElement('a');

  //name of .wav file to use during upload and download (without extendion)
  var filename = new Date().toISOString();

  //add controls to the <audio> element
  au.controls = true;
  au.src = url;

  window.wavesurfer.load(au); // LOAD RECORDING TO WAVESURFER ###############################################################

  //save to disk link
  link.href = url;
  link.download = filename + '.wav'; //download forces the browser to donwload the file using the filename
  link.innerHTML = 'Save to disk';

  // update information for the .wav file (needed for downloading)
  download = link.download;
  fileUrl = url; 

  //add the new audio element to li
  li.appendChild(au);

  //add the filename to the li
  li.appendChild(document.createTextNode(filename + '.wav '));

  //add the save to disk link to li
  li.appendChild(link);

  //upload link
  var upload = document.createElement('a');
  upload.href = '#';
  upload.innerHTML = 'Upload';

  upload.addEventListener('click', function (event) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      if (this.readyState === 4) {
        console.log('Server returned: ', e.target.responseText);
      }
    };
    var fd = new FormData();
    fd.append('audio_data', blob, filename);
    xhr.open('POST', 'upload.php', true);
    xhr.send(fd);
  });
  //li.appendChild(document.createTextNode (" "))//add a space in between
  //li.appendChild(upload)//add the upload link to li

  //add the li element to the ol
  //recordingsList.appendChild(li);
}
function download_file(name, audio) {
  var antikeimeno2 = document.createElement('a');
  antikeimeno2.setAttribute('href', audio);
  antikeimeno2.setAttribute('download', name);
  document.body.appendChild(antikeimeno2);
  antikeimeno2.click();

  document.body.removeChild(antikeimeno2);
  URL.revokeObjectURL(fileUrl);
}

function handleFileDownload() {
  return function(event) {
    console.log('Download click handler', { download, fileUrl });
    download_file(download, fileUrl);
  }
}
