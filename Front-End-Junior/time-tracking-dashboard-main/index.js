var jsonData;
var mainSection = document.getElementById('main');

for (var i = 0; i < 6; i++) {
  //parent
  var pDiv = document.createElement('div');
  pDiv.classList.add('bg-part');

  //child
  var cDiv = document.createElement('div');
  cDiv.classList.add('front-part');

  //grand child
  var head6 = document.createElement('h6');
  var head1 = document.createElement('h1');
  var para = document.createElement('p');
  var img = document.createElement('img');
  img.classList.add('three-dot');
  img.src = 'images/icon-ellipsis.svg';

  //append
  mainSection.appendChild(pDiv);
  pDiv.appendChild(cDiv);
  cDiv.appendChild(head6);
  cDiv.appendChild(img);
  cDiv.appendChild(head1);
  cDiv.appendChild(para);
}

fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    jsonData = data;
    $('#daily').addClass('active');
    appendDataDaily(data);

    // console.log(data[0].timeframes.daily.current);
  });

$('#daily').on('click', function () {
  for (var i = 0; i < 3; i++) {
    var element = document.querySelector('#main > div > div> p:nth-child(' + (i + 1) + ')');
    element.classList.remove('active');
  }
  $('#daily').addClass('active');

  appendDataDaily(jsonData);
});

$('#week').on('click', function () {
  for (var i = 0; i < 3; i++) {
    var element = document.querySelector('#main > div > div> p:nth-child(' + (i + 1) + ')');
    element.classList.remove('active');
  }
  $('#week').addClass('active');
  appendDataWeekly(jsonData);
});

$('#month').on('click', function () {
  for (var i = 0; i < 3; i++) {
    var element = document.querySelector('#main > div > div> p:nth-child(' + (i + 1) + ')');
    element.classList.remove('active');
  }
  $('#month').addClass('active');
  appendDataMonthly(jsonData);
});

function appendDataDaily(data) {
  for (var i = 0; i < data.length; i++) {
    var head6 = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > h6');
    var head1 = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > h1');
    var para = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > p');

    head6.innerHTML = data[i].title;
    head1.innerHTML = data[i].timeframes.daily.current + 'hrs';
    para.innerHTML = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
  }
}

function appendDataWeekly(data) {
  for (var i = 0; i < data.length; i++) {
    var head6 = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > h6');
    var head1 = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > h1');
    var para = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > p');

    head6.innerHTML = data[i].title;
    head1.innerHTML = data[i].timeframes.weekly.current + 'hrs';
    para.innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
  }
}
function appendDataMonthly(data) {
  for (var i = 0; i < data.length; i++) {
    var head6 = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > h6');
    var head1 = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > h1');
    var para = document.querySelector('#main > div:nth-child(' + (i + 2) + ') > div > p');

    head6.innerHTML = data[i].title;
    head1.innerHTML = data[i].timeframes.monthly.current + 'hrs';
    para.innerHTML = 'Last Week - ' + data[i].timeframes.monthly.previous + 'hrs';
  }
}
