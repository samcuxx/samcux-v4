import { Heading1, Heading2, Heading3, Paragraph, Blockquote, UnorderedList, Table } from './ui';

export function TypographyDemo() {
  return (
    <div>
      <Heading1>The Joke Tax Chronicles</Heading1>
      <Paragraph>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </Paragraph>
      <Heading2>The King's Plan</Heading2>
      <Paragraph>
        The king thought long and hard, and finally came up with{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </Paragraph>
      <Blockquote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </Blockquote>
      <Heading3>The Joke Tax</Heading3>
      <Paragraph>
        The king's subjects were not amused. They grumbled and complained, but
        the king was firm:
      </Paragraph>
      <UnorderedList>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </UnorderedList>
      {/* ... rest of the content ... */}
      <Table>
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          {/* ... table rows ... */}
        </tbody>
      </Table>
    </div>
  );
}
