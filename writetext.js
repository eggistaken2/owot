function writeText (text, doNotMoveCursor, color, noNewLine, undoCursorOffset, bgColor, dB, dI, dU, dS) {
  for(i of text) writeChar(i, doNotMoveCursor, color, noNewLine, undoCursorOffset, bgColor, dB, dI, dU, dS);
}
return writeText;
