"use babel";

export default {
  selector: '.source.js',
  disableForSelector: '.source.js .comment',

  inclusionPriority: 1,
  excludeLowerPriority: true,

  getSuggestions({editor, bufferPosition, scopeDescriptor, prefix}) {
    console.log({editor, bufferPosition, scopeDescriptor, prefix})
    return Promise.resolve([
      {
        text: 'es-plus'
      }
    ]);
  },

  onDidInsertSuggestion({editor, triggerPosition, suggestion}) {
    console.log({editor, triggerPosition, suggestion});
  }
};
