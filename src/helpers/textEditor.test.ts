import { TextEditor } from './textEditor';
import test from 'ava';

const text = 'My FavOurite tEXt.)0))';
const lowerText = 'my favourite text.)0))';
const upperText = 'MY FAVOURITE TEXT.)0))';
const withoutSpaces = 'MyFavOuritetEXt.)0))';

test('toLowerCase', t => {
  const textEditor = new TextEditor(text);
  t.is(textEditor.toLowerCase(), lowerText);
});

test('toUpperCase', t => {
  const textEditor = new TextEditor(text);
  t.is(textEditor.toUpperCase(), upperText);
});

test('removeSpaces', t => {
  const textEditor = new TextEditor(text);
  t.is(textEditor.removeSpaces(), withoutSpaces);
});
