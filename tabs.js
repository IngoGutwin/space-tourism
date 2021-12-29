
const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
let tabFocus = 0;

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab)=> {
    tab.addEventListener('click', changeTabPanel);
});

function changeTabFocus (keyEvent) {
        const keydownleft = 37;
        const keydownright = 39;

        // change the tabindex of the current tab to -1
            if(keyEvent.keyCode === keydownleft || keyEvent.keyCode === keydownright) {
                tabs[tabFocus].setAttribute("tabindex", -1);

                // if the right key is pushed, move to the next tab on the right
                if(keyEvent.keyCode === keydownright) {
                    tabFocus++;
                    if(tabFocus >= tabs.length) {
                        tabFocus = tabs.length - tabs.length;
                    }
                } else {
                    tabFocus--;
                    if(tabFocus < tabs.length - tabs.length) {
                        tabFocus = tabs.length - 1;
                    }
                }
            }
        // change the attributes
            tabs[tabFocus].setAttribute("tabindex", 0);
            tabs[tabFocus].focus(); 
}

function changeTabPanel (event) {

            const targetTab = event.target;
            const targetPanel = targetTab.getAttribute("aria-controls");
            const targetImage = targetTab.getAttribute("data-image");

            const tabContainer = targetTab.parentNode;
            const mainContainer = document.getElementById("main");

            inactiveLine(tabContainer, '[aria-selected="true"]', 'aria-selected', false);
            activeLine(targetTab, 'aria-selected', true);

            hideContent(mainContainer, '[role="tabpanel"]', 'hidden', true);
            hideContent(mainContainer, 'picture', 'class', 'hidden');

            showContent(mainContainer, targetPanel, targetImage, 'class', 'hidden');
}

function hideContent(parent, content, attrib1, attrib2){
    // hide content
    parent.querySelectorAll(content)
                 .forEach((item)=> item.setAttribute(attrib1, attrib2));
}

function showContent(parent, panelContent, insertImage, attrib1, attrib2){
    // show content
    parent.querySelector([`#${panelContent}`])
                 .removeAttribute(attrib2); 
    // show image
    parent.querySelector([`#${insertImage}`])
                 .removeAttribute(attrib1, attrib2);
}

function inactiveLine(contentContainer, aria, attrib, inactive) {
    contentContainer
            .querySelector(aria)
            .setAttribute(attrib, inactive);
}

function activeLine(contentContainer, aria, active){
    contentContainer.setAttribute(aria, active);
}