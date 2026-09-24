//comic_cursor.js — JS-driven custom cursor using the Geared Brass cursor set.
//
//Native CSS cursor: url() can't animate GIFs outside Firefox, so instead we hide the
//real system cursor and float a small div that tracks the mouse, swapping its image
//based on whatever element is currently underneath the pointer.
//
//IMPORTANT: this script assumes the corresponding CSS (cursor: none on body, plus the
//#customCursor rules) has already been added to style.css. See below for that.

////////////////////////
//CURSOR STATES
////////////////////////

//point this at whichever folder holds your converted cursor files
const cursorFolder = "img/cursors";

//each state maps to a file + a hotspot offset (how far the image's "tip" sits from its top-left corner)
const cursorStates = {
    normal:   { file: "normal.gif",     offsetX: 4,  offsetY: 4  },
    link:     { file: "link.gif",       offsetX: 4,  offsetY: 4  },
    text:     { file: "text.gif",       offsetX: 8,  offsetY: 16 },
    busy:     { file: "wait.gif",       offsetX: 16, offsetY: 16 },
    disabled: { file: "notallowed.gif", offsetX: 16, offsetY: 16 },
    move:     { file: "move.gif",       offsetX: 16, offsetY: 16 },
};

//checked in order — first matching selector wins, so put more specific states first
const cursorRules = [
    { selector: "[disabled], .disabled",                        state: "disabled" },
    { selector: ".busy",                                        state: "busy" },
    { selector: ".draggable",                                   state: "move" },
    { selector: "input, textarea",                              state: "text" },
    { selector: "a, .dropbtn, .archiveRow, button, [onclick]",  state: "link" },
];

////////////////////////
//BUILD THE CURSOR ELEMENT
////////////////////////

const cursorEl = document.createElement("div");
cursorEl.id = "customCursor";
document.body.appendChild(cursorEl);

let currentState = null;

function setCursorState(state) {
    if (state === currentState) return; //skip the DOM write if nothing actually changed
    currentState = state;
    const data = cursorStates[state] || cursorStates.normal;
    cursorEl.style.backgroundImage = `url('${cursorFolder}/${data.file}')`;
    cursorEl.style.marginLeft = `-${data.offsetX}px`;
    cursorEl.style.marginTop = `-${data.offsetY}px`;
}

setCursorState("normal"); //show the default cursor immediately, before any mouse movement

////////////////////////
//TRACK MOUSE + FIGURE OUT HOVER STATE
////////////////////////

document.addEventListener("mousemove", (e) => {
    cursorEl.style.left = e.clientX + "px";
    cursorEl.style.top = e.clientY + "px";

    //walk the rule list and see what's under the pointer right now
    let matchedState = "normal";
    for (const rule of cursorRules) {
        if (e.target.closest(rule.selector)) {
            matchedState = rule.state;
            break;
        }
    }
    setCursorState(matchedState);
});

//hide the fake cursor when it leaves the browser window/tab so it doesn't get stuck at the edge
document.addEventListener("mouseleave", () => {
    cursorEl.style.opacity = "0";
});
document.addEventListener("mouseenter", () => {
    cursorEl.style.opacity = "1";
});

////////////////////////
//SKIP ENTIRELY ON TOUCH DEVICES
////////////////////////

//touchscreens have no real cursor to replace — bail out so we're not floating a useless div
if (window.matchMedia("(pointer: coarse)").matches) {
    cursorEl.style.display = "none";
}