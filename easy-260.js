"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
var GarageDoorStates;
(function (GarageDoorStates) {
    GarageDoorStates["open"] = "Open";
    GarageDoorStates["opening"] = "Opening";
    GarageDoorStates["emergencyOpening"] = "Emergency Opening";
    GarageDoorStates["stoppedWhileOpening"] = "Stopped While Opening";
    GarageDoorStates["closed"] = "Closed";
    GarageDoorStates["closing"] = "Closing";
    GarageDoorStates["stoppedWhileClosing"] = "Stopped While Closing";
})(GarageDoorStates || (GarageDoorStates = {}));
var EventTypes;
(function (EventTypes) {
    EventTypes["buttonClicked"] = "Button Clicked";
    EventTypes["cycleComplete"] = "Cycle Complete";
    EventTypes["blockDetected"] = "Block Detected";
    EventTypes["blockCleared"] = "Block Cleared";
})(EventTypes || (EventTypes = {}));
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["toggleBlock"] = "Toggle Block";
})(ActionTypes || (ActionTypes = {}));
var GuardTypes;
(function (GuardTypes) {
    GuardTypes["doorIsNotBlocked"] = "Door Is Not Blocked";
    GuardTypes["doorIsBlocked"] = "Door Is Blocked";
})(GuardTypes || (GuardTypes = {}));
const GarageDoorMachine = xstate_1.Machine({
    context: {
        blocked: false,
    },
    id: "GarageDoor",
    initial: GarageDoorStates.closed,
    on: {
        [EventTypes.blockDetected]: {
            actions: ActionTypes.toggleBlock,
        },
        [EventTypes.blockCleared]: {
            actions: ActionTypes.toggleBlock,
        },
    },
    states: {
        [GarageDoorStates.closed]: {
            on: {
                [EventTypes.buttonClicked]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.opening,
                },
            },
        },
        [GarageDoorStates.closing]: {
            on: {
                [EventTypes.buttonClicked]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.stoppedWhileClosing,
                },
                [EventTypes.cycleComplete]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.closed,
                },
                "": {
                    cond: GuardTypes.doorIsBlocked,
                    target: GarageDoorStates.emergencyOpening,
                },
            },
        },
        [GarageDoorStates.emergencyOpening]: {
            on: {
                [EventTypes.cycleComplete]: GarageDoorStates.open,
            },
        },
        [GarageDoorStates.open]: {
            on: {
                [EventTypes.buttonClicked]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.closing,
                },
            },
        },
        [GarageDoorStates.opening]: {
            on: {
                [EventTypes.buttonClicked]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.stoppedWhileOpening,
                },
                [EventTypes.cycleComplete]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.open,
                },
            },
        },
        [GarageDoorStates.stoppedWhileClosing]: {
            on: {
                [EventTypes.buttonClicked]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: GarageDoorStates.opening,
                },
            },
        },
        [GarageDoorStates.stoppedWhileOpening]: {
            on: {
                [EventTypes.buttonClicked]: {
                    cond: GuardTypes.doorIsNotBlocked,
                    target: [GarageDoorStates.closing],
                },
            },
        },
    },
}, {
    actions: {
        [ActionTypes.toggleBlock]: xstate_1.assign({
            blocked: (context, event) => event.type === EventTypes.blockDetected
                ? true
                : event.type === EventTypes.blockCleared
                    ? false
                    : context.blocked,
        }),
    },
    guards: {
        [GuardTypes.doorIsNotBlocked]: (context) => !context.blocked,
        [GuardTypes.doorIsBlocked]: (context) => context.blocked,
    },
});
const GarageDoorService = xstate_1.interpret(GarageDoorMachine)
    .onTransition(state => {
    console.log(`${state.event.type !== "xstate.init"
        ? `> ${state.event.type}`
        : ""}\nDoor: ${state.value}`);
})
    .start();
[
    EventTypes.buttonClicked,
    EventTypes.cycleComplete,
    EventTypes.buttonClicked,
    EventTypes.buttonClicked,
    EventTypes.buttonClicked,
    EventTypes.buttonClicked,
    EventTypes.buttonClicked,
    EventTypes.cycleComplete,
].forEach(event => {
    GarageDoorService.send({ type: event });
});
// Door: Closed
// > Button Clicked
// Door: Opening
// > Cycle Complete
// Door: Open
// > Button Clicked
// Door: Closing
// > Button Clicked
// Door: Stopped While Closing
// > Button Clicked
// Door: Opening
// > Button Clicked
// Door: Stopped While Opening
// > Button Clicked
// Door: Closing
// > Cycle Complete
// Door: Closed
GarageDoorService.stop()
    .onTransition(state => {
    console.log(`${state.event.type !== "xstate.init"
        ? `> ${state.event.type}`
        : ""}\nDoor: ${state.value}`);
})
    .start();
[
    EventTypes.buttonClicked,
    EventTypes.cycleComplete,
    EventTypes.buttonClicked,
    EventTypes.blockDetected,
    EventTypes.buttonClicked,
    EventTypes.cycleComplete,
    EventTypes.buttonClicked,
    EventTypes.blockCleared,
    EventTypes.buttonClicked,
    EventTypes.cycleComplete,
].forEach(event => {
    GarageDoorService.send({ type: event });
});
// Door: Closed
// > Button Clicked
// Door: Opening
// > Cycle Complete
// Door: Open
// > Button Clicked
// Door: Closing
// > Block Detected
// Door: Emergency Opening
// > Button Clicked
// Door: Emergency Opening
// > Cycle Complete
// Door: Open
// > Button Clicked
// Door: Open
// > Block Cleared
// Door: Open
// > Button Clicked
// Door: Closing
// > Cycle Complete
// Door: Closed
