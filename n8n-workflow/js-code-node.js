// n8n Code Node - Place this BEFORE your webhook/HTTP request node

// Get the AI response from previous node
const aiResponse = $input.item.json.output || $input.item.json.message || $input.item.json.text;

// Fix the literal \n characters (they're coming as text, not escape sequences)
let cleanedMessage = aiResponse
  // Replace literal \n with actual newlines
  .replace(/\\n/g, '\n')
  // Remove any remaining backslashes
  .replace(/\\\\/g, '\\');

// OPTION A: For widgets that support plain text with line breaks
const plainTextVersion = cleanedMessage;

// OPTION B: For widgets that need HTML
const htmlVersion = cleanedMessage
  .replace(/\n\n/g, '</p><p>')
  .replace(/\n/g, '<br>')
  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  .replace(/^\*\s/gm, '• ');
const htmlWrapped = `<p>${htmlVersion}</p>`;

// OPTION C: For widgets that want single-line text
const singleLineVersion = cleanedMessage
  .replace(/\n+/g, ' ')
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim();

// Choose which version to return based on your widget's needs
return {
  plainText: plainTextVersion,
  html: htmlWrapped,
  singleLine: singleLineVersion
};

// THEN in your HTTP Request node, use one of these:
// For plain text: {{ $json.plainText }}
// For HTML: {{ $json.html }}
// For single line: {{ $json.singleLine }}
