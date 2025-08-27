function parseSocialContent(text) {
  const hashtags = new Set();
  const mentions = new Set();


  const regex = /(#[\w_]+)|(@[\w_]+)/gi;

  let match;
  let newText = text;

  // Use a while loop with `regex.exec()` to iterate through all matches.
  while ((match = regex.exec(text)) !== null) {
    const fullMatch = match[0];
    const extractedContent = fullMatch.substring(1).toLowerCase();

    if (fullMatch.startsWith("#")) {
      hashtags.add(extractedContent);
    } else if (fullMatch.startsWith("@")) {
      mentions.add(extractedContent);
    }
  }

  // To create the final text, we can use `replace` with the same regex and a replacer function.
  // This approach is cleaner than multiple `replace` calls.
  newText = newText.replace(regex, "");

  return {
    text: newText.trim(), // `trim()` handles leading/trailing spaces left by the replacement
    hashtags: Array.from(hashtags),
    mentions: Array.from(mentions),
  };
}

const text =
  "Check out my new project #WebDev #JavaScript @coder_guy! It's so cool. Let's connect @another_user and talk about #webdev.";

const parsedContent = parseSocialContent(text);
console.log(parsedContent);
