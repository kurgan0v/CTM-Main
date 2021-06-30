


$(document).ready(function(){
    $("#card1").flip({
        trigger: 'manual'
    });
    $(".toToggle").click(function(){
        $("#card1").flip('toggle');
    });


    particlesJS.load('particles-js', 'JS/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js-2', 'JS/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
    });
    particlesJS.load('particles-js-3', 'JS/particlesjs.json', function() {
      console.log('callback - particles.js config loaded');
    });

      var tabs = {

        class: {
          bar: 'tabs',
          tab: 'tabs--tab',
          line: 'tabs--line',
          active: '-active'
        },

        colorAttribute: 'data-tab-color',

        select: function(_tab) {
          var parent = _tab.parentElement;
          var selected = parent.querySelector('.' + tabs.class.active);
          var line = parent.querySelector('.' + tabs.class.line);
          var tabColor = _tab.getAttribute(tabs.colorAttribute);

          if (tabColor) {
            line.style.backgroundColor = tabColor;
          } else {
            line.style.backgroundColor = null;
          }

          if (selected) {
            selected.classList.remove(tabs.class.active);
          }

          line.style.left = _tab.offsetLeft + 'px';
          line.style.width = _tab.offsetWidth + 'px';
          _tab.classList.add(tabs.class.active);
        },
        setUp: function(_tabBar) {
          var allTabs = _tabBar.querySelectorAll('.' + tabs.class.tab);

          for (var i = 0, ii = allTabs.length; i < ii; i++) {
            allTabs[i].addEventListener('click', function() {
              tabs.select(this);
            }, false);
          }

          tabs.select(allTabs[0]);
        },

        init: function() {
          var tabBars = document.querySelectorAll('.' + tabs.class.bar);

          for (var i = 0, ii = tabBars.length; i < ii; i++) {
            tabs.setUp(tabBars[i]);
          }
        }
      };


      tabs.init();

  document.querySelector('#second_a_in_tabs').addEventListener('click', () =>{
    document.querySelector('#user-reg').classList ='reg-hide'
    document.querySelector('#doctor-reg').classList='reg-show'
  })

  document.querySelector('#first_a_in_tabs').addEventListener('click', () =>{
    document.querySelector('#doctor-reg').classList ='reg-hide'
    document.querySelector('#user-reg').classList='reg-show'
  })



});
