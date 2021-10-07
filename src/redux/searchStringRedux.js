// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_STRING = createActionName('CHANGE_STRING');

// action creators
export const createActionChangeString = SearchString => ({ payload: SearchString, type: CHANGE_STRING });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

