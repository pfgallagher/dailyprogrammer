import { assign, interpret, Machine } from "xstate";

enum GarageDoorStates {
	open = "Open",
	opening = "Opening",
	emergencyOpening = "Emergency Opening",
	stoppedWhileOpening = "Stopped While Opening",
	closed = "Closed",
	closing = "Closing",
	stoppedWhileClosing = "Stopped While Closing",
}
enum EventTypes {
	buttonClicked = "Button Clicked",
	cycleComplete = "Cycle Complete",
	blockDetected = "Block Detected",
	blockCleared = "Block Cleared",
}
enum ActionTypes {
	toggleBlock = "Toggle Block",
}
enum GuardTypes {
	doorIsNotBlocked = "Door Is Not Blocked",
	doorIsBlocked = "Door Is Blocked",
}

interface IGarageDoorContext {
	blocked: boolean;
}
interface IGarageDoorSchema {
	states: {
		[GarageDoorStates.open]: {};
		[GarageDoorStates.opening]: {};
		[GarageDoorStates.emergencyOpening]: {};
		[GarageDoorStates.stoppedWhileOpening]: {};
		[GarageDoorStates.closed]: {};
		[GarageDoorStates.closing]: {};
		[GarageDoorStates.stoppedWhileClosing]: {};
	};
}
type GarageDoorEvent =
	| { type: EventTypes.buttonClicked }
	| { type: EventTypes.cycleComplete }
	| { type: EventTypes.blockDetected }
	| { type: EventTypes.blockCleared };

const GarageDoorMachine = Machine<
	IGarageDoorContext,
	IGarageDoorSchema,
	GarageDoorEvent
>(
	{
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
	},
	{
		actions: {
			[ActionTypes.toggleBlock]: assign({
				blocked: (context, event) =>
					event.type === EventTypes.blockDetected
						? true
						: event.type === EventTypes.blockCleared
						? false
						: context.blocked,
			}),
		},
		guards: {
			[GuardTypes.doorIsNotBlocked]: (context): boolean => !context.blocked,
			[GuardTypes.doorIsBlocked]: (context): boolean => context.blocked,
		},
	},
);

const GarageDoorService = interpret(GarageDoorMachine)
	.onTransition(state => {
		console.log(
			`${
				(state.event.type as string) !== "xstate.init"
					? `> ${state.event.type}`
					: ""
			}\nDoor: ${state.value}`,
		);
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
		console.log(
			`${
				(state.event.type as string) !== "xstate.init"
					? `> ${state.event.type}`
					: ""
			}\nDoor: ${state.value}`,
		);
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
