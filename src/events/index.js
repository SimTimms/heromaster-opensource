import { monsterDeck } from '../data/decks/monsterDeck';

let gmFlow = {
  newGame: {
    actions: {
      loadDecks: {
        action: loadDeck,
        outcome: false,
      },
      shuffleDecks: {
        playerDeck: {
          action: shuffleDeckAction,
          outcome: false,
        },
        monsterDeck: {
          action: shuffleDeckAction,
          outcome: false,
        },
        locationDeck: {
          action: shuffleDeckAction,
          outcome: false,
        },
      },
      playerRace: {
        player1: {
          action: pickRace,
          outcome: false,
        },
        player2: {
          action: pickRace,
          outcome: false,
        },
        player3: {
          action: pickRace,
          outcome: false,
        },
        player3: {
          action: pickRace,
          outcome: false,
        },
      },
    },
    outcome: false,
  },
};

async function waitGameAction(outcome, action) {
  if (!outcome) {
    const actionResult = await action;
  }
  //TODO: return a status so the same action isn't run twice
}

export async function newGame(activateModal) {
  const newGameActions = gmFlow.newGame.actions;
  console.log(newGameActions);
  if (!newGameActions.loadDecks.outcome) {
    newGameActions.loadDecks.outcome = await waitGameAction(
      newGameActions.loadDecks.outcome,
      newGameActions.loadDecks.action(monsterDeck),
    ).status;
  }

  if (!newGameActions.shuffleDecks.playerDeck.outcome) {
    newGameActions.shuffleDecks.playerDeck.outcome = await waitGameAction(
      newGameActions.shuffleDecks.playerDeck.outcome,
      newGameActions.shuffleDecks.playerDeck.action(monsterDeck),
    ).status;
  }

  if (!newGameActions.shuffleDecks.monsterDeck.outcome) {
    newGameActions.shuffleDecks.monsterDeck.outcome = await waitGameAction(
      newGameActions.shuffleDecks.monsterDeck.outcome,
      newGameActions.shuffleDecks.monsterDeck.action(monsterDeck),
    ).status;
  }

  if (!newGameActions.shuffleDecks.locationDeck.outcome) {
    newGameActions.shuffleDecks.locationDeck.outcome = await waitGameAction(
      newGameActions.shuffleDecks.locationDeck.outcome,
      newGameActions.shuffleDecks.locationDeck.action(monsterDeck),
    ).status;
  }

  if (!newGameActions.playerRace.player1.outcome) {
    newGameActions.playerRace.player1.outcome = await waitGameAction(
      newGameActions.playerRace.player1.outcome,
      newGameActions.playerRace.player1.action(activateModal, true),
    ).status;
  }
}

function pickRace(activateModal, open) {
  //notify player to pick race
  activateModal(open);
  return {
    status: false,
    message: `==> Waiting for player to choose a race`,
  };
}

function loadDeck(deckName) {
  return { status: true, message: 'Deck Loaded' };
}

async function shuffleDeckAction(deckIn) {
  await shuffleDeck(deckIn);
  return { status: true, message: "Every day I'm shufflin'" };
}

function shuffleDeck(deckIn) {
  let currentIndex = deckIn.length;
  let temporaryValue = '';
  let randomIndex = 0;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deckIn[currentIndex];
    deckIn[currentIndex] = deckIn[randomIndex];
    deckIn[randomIndex] = temporaryValue;
  }

  return deckIn;
}
