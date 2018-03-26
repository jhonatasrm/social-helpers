var locale = navigator.language;
var strWindowFeatures = "menubar=no,location=yes,resizable=no,scrollbars=yes,status=yes";
// main panel
const mainPanel = document.getElementById('mainPanel');
// images dropdown buttons
const imageGuidelines = document.getElementById('image_submenu_guidelines');
const imageRoles = document.getElementById('image_submenu_roles');
const imageVideos = document.getElementById('image_submenu_videos');
// images folders
const imageFolderGuidelines = document.getElementById('folderGuidelines');
const imageFolderRoles = document.getElementById('folderRoles');
const imageFolderVideos = document.getElementById('folderVideos');
// options
const optionsGuidelines = document.getElementById('optionsGuidelines');
const optionRoles = document.getElementById('optionsRoles');
const optionsVideos = document.getElementById('optionsVideos')

function onUpdated(tab) {
  console.log(`Tab updated: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// dropdown click text
document.getElementById('btnMoreOptionsGuidelines').addEventListener('click', function() {
    if (optionsGuidelines.style.display === 'none'){
      imageFolderGuidelines.src = '../res/icons/folder_opened-32.png';
      optionsGuidelines.style.display = 'inline';
      imageGuidelines.src = '../res/icons/arrowhead-up.png';
      mainPanel.style.display = 'none';
    }else{
      optionsGuidelines.style.display = 'none'
      imageGuidelines.src = '../res/icons/arrowhead-down.png';
      imageFolderGuidelines.src = '../res/icons/folder_closed-32.png';
    }
}, false);
document.getElementById('btnMoreOptionsRoles').addEventListener('click', function(){
  if (optionRoles.style.display === 'none'){
    imageFolderRoles.src = '../res/icons/folder_opened-32.png';
    optionRoles.style.display = 'inline';
    imageRoles.src = '../res/icons/arrowhead-up.png';
    mainPanel.style.display = 'none';
  }else{
    optionRoles.style.display = 'none';
    imageRoles.src = '../res/icons/arrowhead-down.png';
    imageFolderRoles.src = '../res/icons/folder_closed-32.png';
  }
}, false);
document.getElementById('btnMoreOptionsVideos').addEventListener('click', function(){
  if (optionsVideos.style.display === 'none'){
    imageFolderVideos.src = '../res/icons/folder_video_opened-32.png';
    optionsVideos.style.display = 'inline';
    imageVideos.src = '../res/icons/arrowhead-up.png';
    mainPanel.style.display = 'none';
  }else{
    optionsVideos.style.display = 'none';
    imageVideos.src = '../res/icons/arrowhead-down.png';
    imageFolderVideos.src = '../res/icons/folder_video_closed-32.png';
  }
}, false);

// dropdown click arrows
document.getElementById('image_submenu_guidelines').addEventListener('click', function() {
    if (optionsGuidelines.style.display === 'none'){
      imageFolderGuidelines.src = '../res/icons/folder_opened-32.png';
      optionsGuidelines.style.display = 'inline';
      imageGuidelines.src = '../res/icons/arrowhead-up.png';
      mainPanel.style.display = 'none';
    }else{
      optionsGuidelines.style.display = 'none'
      imageGuidelines.src = '../res/icons/arrowhead-down.png';
      imageFolderGuidelines.src = '../res/icons/folder_closed-32.png';
    }
}, false);
document.getElementById('image_submenu_roles').addEventListener('click', function(){
  if (optionRoles.style.display === 'none'){
    imageFolderRoles.src = '../res/icons/folder_opened-32.png';
    optionRoles.style.display = 'inline';
    imageRoles.src = '../res/icons/arrowhead-up.png';
    mainPanel.style.display = 'none';
  }else{
    optionRoles.style.display = 'none';
    imageRoles.src = '../res/icons/arrowhead-down.png';
    imageFolderRoles.src = '../res/icons/folder_closed-32.png';
  }
}, false);
document.getElementById('image_submenu_videos').addEventListener('click', function(){
  if (optionsVideos.style.display === 'none'){
    imageFolderVideos.src = '../res/icons/folder_video_opened-32.png';
    optionsVideos.style.display = 'inline';
    imageVideos.src = '../res/icons/arrowhead-up.png';
    mainPanel.style.display = 'none';
  }else{
    optionsVideos.style.display = 'none';
    imageVideos.src = '../res/icons/arrowhead-down.png';
    imageFolderVideos.src = '../res/icons/folder_video_closed-32.png';
  }
}, false);

document.addEventListener('click', function(event) {
  // common replies
  if (event.target.id == 'menuCommonReplies') {
    let pageReplies = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/army-of-awesome-common-replies`});
    pageReplies.then(onUpdated, onError);
  }
  // menu options Social Support Guidelines
  else if (event.target.id == 'menuTipsFromCommunity') {
    if (locale == 'pt-BR'){
      let pageTipsCommunity = browser.tabs.update({url: `https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_algumas-dicas-da-comunidade`});
      pageTipsCommunity.then(onUpdated, onError);
    }else{
      pageTipsCommunity = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_some-tips-from-the-community`});
      pageTipsCommunity.then(onUpdated, onError);
    }
  }
  else if (event.target.id == 'menuHowDoIgetHelp') {
    if (locale == 'pt-BR'){
      let pageHowgetHelp = browser.tabs.update({url: `https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_como-pedir-ajuda`});
      pageHowgetHelp.then(onUpdated, onError);
    }else{
      pageHowgetHelp = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_how-do-i-get-help`});
      pageHowgetHelp.then(onUpdated, onError);
    }
  }
  else if (event.target.id == 'menuEscalate') {
    if (locale == 'pt-BR'){
      let pageMenuEscalate = browser.tabs.update({url: `https://support.mozilla.org/pt-BR/kb/diretrizes-do-suporte-social#w_como-escalar-ou-encontrar-mais-ajuda`});
      pageMenuEscalate.then(onUpdated, onError);
    }else{
      pageMenuEscalate = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/social-support-guidelines#w_where-and-when-to-escalate-or-find-more-help`});
      pageMenuEscalate.then(onUpdated, onError);
    }
  }
  // menu Roles Social Support Program
  else if (event.target.id == 'menuTheCasualSocialHelper'){
    let pageCasualSocialHelper = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-casual-social-helper-tweetdeck`});
    pageCasualSocialHelper.then(onUpdated, onError);
  }
  else if (event.target.id == 'menuTheOfficialSocialHelper'){
    let pageOfficialSocialHelper = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-official-social-helper-reply-by-buffer`});
    pageOfficialSocialHelper.then(onUpdated, onError);
  }
  else if (event.target.id == 'menuTheTriager'){
    let pageMenuTriager = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-triager`});
    pageMenuTriager.then(onUpdated, onError);
  }
  else if (event.target.id == 'menuTheSocialProgramModerator'){
    let pageSocialProgramModerator = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/roles-social-support-program#w_the-social-program-moderator`});
    pageSocialProgramModerator.then(onUpdated, onError);
  }
  // configuring TweetDeck
  else if (event.target.id == 'menuConfiguringTweetDeck'){
    let pageMenuConfiguringTweetDeck = browser.tabs.update({url: `https://docs.google.com/document/d/13iGyBVSDOaeqP46oMU6hqedhn0oXFTHLUTW5RVr6tUQ/edit`});
    pageMenuConfiguringTweetDeck.then(onUpdated, onError);
  }
  // videos configuring TweetDeck
  else if (event.target.id == 'menuVideoConfiguringTweetDeck') {
    var pageMenuVideoConfiguringTweetDeck = browser.tabs.update({url: `https://www.screencast.com/t/rcWKKdEH`});
    pageMenuVideoConfiguringTweetDeck.then(onUpdated, onError);
  }
  else if (event.target.id == 'menuVideoHowIgnoreUser') {
    var pageMenuVideoHowIgnoreUser = browser.tabs.update({url: `https://www.screencast.com/t/cxlEe1Cp2xn`});
    pageMenuVideoHowIgnoreUser.then(onUpdated, onError);
  }
  else if (event.target.id == 'menuVideoGetOldAnswersFromAoA') {
    var pageMenuVideoGetOldAnswersFromAoA = browser.tabs.update({url: `https://www.screencast.com/t/q9aIKq9nQv`});
    pageMenuVideoGetOldAnswersFromAoA.then(onUpdated, onError);
  }
  // survey
  else if (event.target.id == 'menuItemSurvey') {
    window.open("https://goo.gl/forms/88APypWlZlRBaliG3", "survey", strWindowFeatures);
  }
  // telegram channel
  else if (event.target.id == 'menuTelegram') {
    var pageMenuTelegram = browser.tabs.update({url: `http://t.me/respond`});
    pageMenuTelegram.then(onUpdated, onError);
  }
  event.preventDefault();
});
