const chat = (hid, hih) => {
    //     <div class='chatmessage maker'>
    //         <p class='text_message'>Hello There!</p>
    //     </div>
    conversation = document.querySelector(".conversation");
    var msg = document.createElement("div");
    msg.className = 'chatmessage you'
    var text_message = document.createElement('p')
    text_message.className = 'text_message'
    text_message.innerHTML = hih;
    if (hid == 'emoji') {
        msg.style.backgroundColor = 'white';
        text_message.style.float = 'right';
        text_message.style.fontSize = '35px';
    }
    msg.appendChild(text_message)
    conversation.appendChild(msg);
    setTimeout(() => {
        scrollParentToChild(conversation, msg)
    }, 100)

    setTimeout(() => {
        var msg = document.createElement("div");
        msg.className = 'chatmessage maker'
        var text_message = document.createElement('p')
        text_message.className = 'text_message'

        // Responses
        if (hid == 'tmay') {
            text_message.innerHTML = "I am Troy Serapio, a 13 year old Filipino who loves programming and math. Kinda cool too 😎. ";
        } else if (hid == 'ways') {
            text_message.innerHTML = "Comfortable: <br>    - Python <br>    - Java <br>    - HTML, CSS, JS <br>    - Unity Game Engine <br><br>Knows a bit: <br>    - C++";
        } else if (hid == 'c') {
            text_message.innerHTML = "Here is my YouTube Account: <a href='https://www.youtube.com/channel/UC6zYIB1rlM3IfZz7QhriOVQ'>Troy S</a> <br /> My Github Account: <a href='https://github.com/tdserapio'>Github</a> <br /> Here is my Gmail account: <a href='mailto:troy.serapio@gmail.com'>Gmail</a> <br /><br /> Thats all!"
        } else if (hid == "ol") {
            text_message.innerHTML = "Here is: <br>    - Arithmos: <a href='https://tdserapio.github.io/Arithmos'>Arithmos</a>"
        } else if (hid != 'emoji') {
            text_message.innerHTML = "I do not understand...";
        } else {
            msg.style.backgroundColor = 'white';
            text_message.innerHTML = hih;
            text_message.style.fontSize = '35px';
        }

        // End Responses

        msg.appendChild(text_message);
        conversation.appendChild(msg);
        setTimeout(() => {
            scrollParentToChild(conversation, msg)
        }, 100)

        var sound = document.createElement("AUDIO");

        if (sound.canPlayType("audio/mpeg")) {
            sound.setAttribute("src", "boking.mp3");
        } else {
            sound.setAttribute("src", "boking.ogg");
        }
        sound.autoplay = true;
        sound.volume = 0.07;
        document.body.appendChild(sound);
    }, 700)
}

function scrollParentToChild(parent, child) {

    // Where is the parent on page
    var parentRect = parent.getBoundingClientRect();
    // What can you see?
    var parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth
    };

    // Where is the child
    var childRect = child.getBoundingClientRect();
    // Is the child viewable?
    var isViewable = (childRect.top >= parentRect.top) && (childRect.bottom <= parentRect.top + parentViewableArea.height);

    // if you can't see the child try to scroll parent
    if (!isViewable) {
        // Should we scroll using top or bottom? Find the smaller ABS adjustment
        const scrollTop = childRect.top - parentRect.top;
        const scrollBot = childRect.bottom - parentRect.bottom;
        if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
            // we're near the top of the list
            parent.scrollTop += scrollTop;
        } else {
            // we're near the bottom of the list
            parent.scrollTop += scrollBot + 1000000;
        }
    }

}