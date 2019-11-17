var locale = navigator.language;
var strWindowFeatures = "menubar=no,location=yes,resizable=no,scrollbars=yes,status=yes";
var iconLocal = '../res/icons/social_helpers-32.png';
var iconLocalOff = '../res/icons/social_helpers_off-32.png';

browser.tabs.onUpdated.addListener(verifyPage);

// main panel
const mainPanel = document.getElementById('mainPanel');

// options
const optionsGuidelines = document.getElementById('optionsGuidelines');
const optionRoles = document.getElementById('optionsRoles');
const optionsVideos = document.getElementById('optionsVideos');
const separatorLine = document.getElementById('separatorLine');
const separatorAbout = document.getElementById('separatorLineAbout');
//
const configuringTweetDeck = document.getElementById('menuConfiguringTweetDeck');
const commonReplies = document.getElementById('menuCommonReplies');
const itemSurvey = document.getElementById('menuItemSurvey');
const menuTelegram = document.getElementById('menuTelegram');
const menuAbout = document.getElementById('menuAbout');
//btn
const btnMoreOptionsRoles = document.getElementById('btnMoreOptionsRoles');
const btnMoreOptionsVideos = document.getElementById('btnMoreOptionsVideos');
const btnMoreOptionsGuidelines = document.getElementById('btnMoreOptionsGuidelines');
// icons right
const icon_btnMoreOptionsRoles = document.getElementById('icon_btnMoreOptionsRoles');
const icon_btnMoreOptionsGuidelines = document.getElementById('icon_btnMoreOptionsGuidelines');
const icon_btnMoreOptionsVideos = document.getElementById('icon_btnMoreOptionsVideos');

// icons left
const leftGuidelines = document.getElementById('leftGuidelines');
const leftRoles = document.getElementById('leftRoles');
const leftVideo = document.getElementById('leftVideo');
const menuInfo = document.getElementById('menuInfo');
const iconMenuTelegram = document.getElementById('iconMenuTelegram');
const iconMenuSocialHelper = document.getElementById('iconMenuSocialHelper');

const image_submenu_guidelines = document.getElementById('image_submenu_guidelines');


function onUpdated(tab) {
  console.log(`Tab updated: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// dropdown click text
btnMoreOptionsGuidelines.addEventListener('click', function() {
    optionsGuidelines.style.display = 'inline';
      image_submenu_guidelines.style.display = 'none';
      btnMoreOptionsGuidelines.style.display = 'none';
      optionsRoles.style.display = 'none';
      optionsVideos.style.display = 'none';
      configuringTweetDeck.style.display = 'none';
      commonReplies.style.display = 'none';
      itemSurvey.style.display = 'none';
      btnMoreOptionsVideos.style.display = 'none';
      btnMoreOptionsRoles.style.display = 'none';
      menuTelegram.style.display = 'none';
      menuAbout.style.display = 'none';
      separatorLine.style.display = 'none';
      menuInfo.style.display = 'none';
      separatorLineAbout.style.display = 'none';
      icon_btnMoreOptionsGuidelines.style.display = 'none';
      icon_btnMoreOptionsRoles.style.display = 'none';
      icon_btnMoreOptionsVideos.style.display = 'none';
      iconMenuTelegram.style.display = 'none';
      iconMenuSocialHelper.style.display = 'none';
}, false);

leftGuidelines.addEventListener('click', function(){
      optionsGuidelines.style.display = 'none';
      image_submenu_guidelines.style.display = 'block';
      btnMoreOptionsGuidelines.style.display = 'inline';
      optionsRoles.style.display = 'none';
      optionsVideos.style.display = 'none';
      configuringTweetDeck.style.display = 'inline';
      commonReplies.style.display = 'inline';
      itemSurvey.style.display = 'inline';
      btnMoreOptionsVideos.style.display = 'inline';
      btnMoreOptionsRoles.style.display = 'inline';
      menuTelegram.style.display = 'inline';
      menuAbout.style.display = 'inline';
      separatorLine.style.display = 'block';
      separatorLineAbout.style.display = 'block';
      menuInfo.style.display = 'inline';
      icon_btnMoreOptionsGuidelines.style.display = 'inline';
      icon_btnMoreOptionsRoles.style.display = 'inline';
      icon_btnMoreOptionsVideos.style.display = 'inline';
      iconMenuTelegram.style.display = 'inline';
      iconMenuSocialHelper.style.display = 'inline';
      location.reload();
}, false);

btnMoreOptionsRoles.addEventListener('click', function(){
      optionRoles.style.display = 'inline';
      image_submenu_roles.style.display = 'none';
      image_submenu_guidelines.style.display = 'none';
      btnMoreOptionsGuidelines.style.display = 'none';
      optionsGuidelines.style.display = 'none';
      optionsVideos.style.display = 'none';
      configuringTweetDeck.style.display = 'none';
      commonReplies.style.display = 'none';
      itemSurvey.style.display = 'none';
      menuInfo.style.display = 'none';
      btnMoreOptionsVideos.style.display = 'none';
      btnMoreOptionsRoles.style.display = 'inline';
      menuTelegram.style.display = 'none';
      menuAbout.style.display = 'none';
      separatorLine.style.display = 'none';
      separatorLineAbout.style.display = 'none';
      icon_btnMoreOptionsGuidelines.style.display = 'none';
      icon_btnMoreOptionsRoles.style.display = 'none';
      icon_btnMoreOptionsVideos.style.display = 'none';
      iconMenuTelegram.style.display = 'none';
      iconMenuSocialHelper.style.display = 'none';
}, false);

leftRoles.addEventListener('click', function(){
      optionsGuidelines.style.display = 'none';
      image_submenu_guidelines.style.display = 'block';
      image_submenu_videos.style.display = 'block';
      image_submenu_roles.style.display = 'block';
      btnMoreOptionsGuidelines.style.display = 'inline';
      optionsRoles.style.display = 'none';
      optionsVideos.style.display = 'none';
      configuringTweetDeck.style.display = 'inline';
      commonReplies.style.display = 'inline';
      itemSurvey.style.display = 'inline';
      btnMoreOptionsVideos.style.display = 'inline';
      btnMoreOptionsRoles.style.display = 'inline';
      menuTelegram.style.display = 'inline';
      menuAbout.style.display = 'inline';
      separatorLine.style.display = 'block';
      menuInfo.style.display = 'inline';
      separatorLineAbout.style.display = 'block';
      icon_btnMoreOptionsGuidelines.style.display = 'inline';
      icon_btnMoreOptionsRoles.style.display = 'inline';
      icon_btnMoreOptionsVideos.style.display = 'inline';
      iconMenuTelegram.style.display = 'inline';
      iconMenuSocialHelper.style.display = 'inline';
      location.reload();
}, false);

btnMoreOptionsVideos.addEventListener('click', function(){
      optionsVideos.style.display = 'inline';
      image_submenu_videos.style.display = 'none';
      image_submenu_roles.style.display = 'none';
      image_submenu_guidelines.style.display = 'none';
      btnMoreOptionsGuidelines.style.display = 'none';
      optionsGuidelines.style.display = 'none';
      optionsRoles.style.display = 'none';
      configuringTweetDeck.style.display = 'none';
      commonReplies.style.display = 'none';
      itemSurvey.style.display = 'none';
      btnMoreOptionsVideos.style.display = 'inline';
      btnMoreOptionsRoles.style.display = 'none';
      menuTelegram.style.display = 'none';
      menuAbout.style.display = 'none';
      menuInfo.style.display = 'none';
      separatorLine.style.display = 'none';
      separatorLineAbout.style.display = 'none';
      icon_btnMoreOptionsGuidelines.style.display = 'none';
      icon_btnMoreOptionsRoles.style.display = 'none';
      icon_btnMoreOptionsVideos.style.display = 'none';
      iconMenuTelegram.style.display = 'none';
      iconMenuSocialHelper.style.display = 'none';
}, false);

leftVideo.addEventListener('click', function(){
      optionsGuidelines.style.display = 'none';
      image_submenu_guidelines.style.display = 'block';
      btnMoreOptionsGuidelines.style.display = 'inline';
      optionsRoles.style.display = 'none';
      optionsVideos.style.display = 'none';
      image_submenu_roles.style.display = 'block';
      image_submenu_videos.style.display = 'block';
      configuringTweetDeck.style.display = 'inline';
      commonReplies.style.display = 'inline';
      itemSurvey.style.display = 'inline';
      btnMoreOptionsVideos.style.display = 'inline';
      btnMoreOptionsRoles.style.display = 'inline';
      menuTelegram.style.display = 'inline';
      menuAbout.style.display = 'inline';
      separatorLine.style.display = 'block';
      separatorLineAbout.style.display = 'block';
      menuInfo.style.display = 'inline';
      icon_btnMoreOptionsGuidelines.style.display = 'inline';
      icon_btnMoreOptionsRoles.style.display = 'inline';
      icon_btnMoreOptionsVideos.style.display = 'inline';
      iconMenuTelegram.style.display = 'inline';
      iconMenuSocialHelper.style.display = 'inline';
      location.reload();
}, false);

document.addEventListener('click', function(event) {
  // common replies
  if (event.target.id == 'menuCommonReplies') {
    if (locale == 'pt-BR'){
        var pageReplies = `https://support.mozilla.org/pt-BR/kb/army-of-awesome-common-replies`;
        window.open(pageReplies);
    }else {
        var pageReplies = `https://support.mozilla.org/${locale}/kb/army-of-awesome-common-replies`;
        window.open(pageReplies);
    }
  }
  // menu options Social Support Guidelines
  else if (event.target.id == 'menuTipsFromCommunity') {
    if (locale == 'pt-BR'){
      var pageTipsCommunity = "https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_algumas-dicas-da-comunidade";
      window.open(pageTipsCommunity);
    }else{
      var pageTipsCommunity = `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_some-tips-from-the-community`;
      window.open(pageTipsCommunity);
    }
  }
  else if (event.target.id == 'menuHowDoIgetHelp') {
    if (locale == 'pt-BR'){
      var pageHowgetHelp = "https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_como-pedir-ajuda";
      window.open(pageHowgetHelp);
    }else{
      var pageHowgetHelp = `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_how-do-i-get-help`;
      window.open(pageHowgetHelp);
    }
  }
  else if (event.target.id == 'menuEscalate') {
    if (locale == 'pt-BR'){
      var pageMenuEscalate = "https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_como-escalar-ou-encontrar-mais-ajuda";
      window.open(pageMenuEscalate);
    }else{
      var pageMenuEscalate = `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_where-and-when-to-escalate-or-find-more-help`;
      window.open(pageMenuEscalate);
    }
  }
  // menu Roles Social Support Program
  else if (event.target.id == 'menuTheCasualSocialHelper'){
    let pageCasualSocialHelper = `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-casual-social-helper-tweetdeck`;
    window.open(pageCasualSocialHelper);
  }
  else if (event.target.id == 'menuTheOfficialSocialHelper'){
    let pageOfficialSocialHelper = `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-official-social-helper-reply-by-buffer`;
    window.open(pageOfficialSocialHelper);
  }
  else if (event.target.id == 'menuTheTriager'){
    let pageMenuTriager = `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-triager`;
    window.open(pageMenuTriager);
  }
  else if (event.target.id == 'menuTheSocialProgramModerator'){
    let pageSocialProgramModerator = `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-social-program-moderator`;
    window.open(pageSocialProgramModerator);
  }
  // configuring TweetDeck
  else if (event.target.id == 'menuConfiguringTweetDeck'){
    let pageMenuConfiguringTweetDeck = `https://support.mozilla.org/${locale}/kb/social-support-tools-and-workspace`;
    window.open(pageMenuConfiguringTweetDeck);
  }
  // videos configuring TweetDeck
  else if (event.target.id == 'menuVideoConfiguringTweetDeck') {
    let pageMenuVideoConfiguringTweetDeck = "https://www.screencast.com/t/rcWKKdEH";
    window.open(pageMenuVideoConfiguringTweetDeck);
  }
  else if (event.target.id == 'menuVideoHowIgnoreUser') {
    let pageMenuVideoHowIgnoreUser = "https://www.screencast.com/t/cxlEe1Cp2xn";
    window.open(pageMenuVideoHowIgnoreUser);
  }
  else if (event.target.id == 'menuVideoGetOldAnswersFromAoA') {
    let pageMenuVideoGetOldAnswersFromAoA = "https://www.screencast.com/t/q9aIKq9nQv";
    window.open(pageMenuVideoGetOldAnswersFromAoA);
  }
  else if (event.target.id == 'menuItemSurvey') {
    let becomeASocialHelper = "https://support.mozilla.org/en-US/kb/social-support-guidelines";
    window.open(becomeASocialHelper);
  }
  // telegram channel
  else if (event.target.id == 'menuTelegram') {
    var pageMenuTelegram = "https://t.me/joinchat/CJxxoEBuwEp8NA2tbynaKg";
    window.open(pageMenuTelegram);
  }
  else if (event.target.id == 'menuAbout') {
    let aboutMenu = window.open('about.html', '_blank');
    window.open(aboutMenu);
  }
  event.preventDefault();
});

function verifyPage(){
    browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
      .then(tabs => browser.tabs.get(tabs[0].id))
      .then(tab => {
        if(tab.url == "about:preferences") {
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:config"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:addons"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:debugging"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:support"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:newtab"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:buildconfig"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:cache"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:checkerboard"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:crashes"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:credits"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:devtools"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:downloads"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:home"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:memory"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:mozilla"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:sessionrestore"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else if (tab.url == "about:plugins"){
            browser.browserAction.setIcon({path: iconLocalOff});
        }else{
            browser.browserAction.setIcon({path: iconLocal});
        }
    });
}