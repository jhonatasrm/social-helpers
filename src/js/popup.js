var locale = navigator.language;
const btnMoreOptionsGuidelines = document.getElementById("btnMoreOptionsGuidelines");
const optionsGuidelines = document.getElementById("optionsGuidelines");
const imageGuidelines = document.getElementById("image_submenu_guidelines");
const imageRoles = document.getElementById("image_submenu_roles");
const mainPanel = document.getElementById("mainPanel");
const btnMoreOptionsRoles = document.getElementById('btnMoreOptionsRoles');
const optionRoles = document.getElementById('optionsRoles');

function onUpdated(tab) {
  console.log(`Tab updated: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// dropdown guidelines
btnMoreOptionsGuidelines.addEventListener('click', function(event) {
    if (optionsGuidelines.style.display === 'none'){
      optionsGuidelines.style.display = 'inline';
      imageGuidelines.src = '../../res/icons/arrowhead-up.png';
      mainPanel.style.display = 'none';
    }else{
      optionsGuidelines.style.display = 'none'
      imageGuidelines.src = '../../res/icons/arrowhead-down.png';
    }
}, true);
// dropdown Roles
btnMoreOptionsRoles.addEventListener('click', function(event){
  if (optionRoles.style.display === 'none'){
    optionRoles.style.display = 'inline';
    imageRoles.src = '../../res/icons/arrowhead-up.png';
    mainPanel.style.display = 'none';
  }else{
    optionRoles.style.display = 'none';
    imageRoles.src = '../../res/icons/arrowhead-down.png';
  }
});

document.addEventListener('click', function(event) {
  // Common Replies
  if (event.target.id == 'menuCommonReplies') {
    let pageReplies = browser.tabs.update({url: `https://support.mozilla.org/${locale}/kb/army-of-awesome-common-replies`});
    pageReplies.then(onUpdated, onError);
  }
  // menu more options inside Social Support Guidelines
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
  // telegram channel
  else if (event.target.id == 'menuTelegram') {
    var pageMenuTelegram = browser.tabs.update({url: `http://t.me/respond`});
    pageMenuTelegram.then(onUpdated, onError);
  }
  event.preventDefault();
});
