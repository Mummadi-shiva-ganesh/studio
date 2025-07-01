'use server';

/**
 * @fileOverview Highlights key phrases and keywords in the 'About Me' section and skills descriptions extracted from a resume.
 *
 * - highlightResumeContent - A function that handles the extraction and highlighting process.
 * - HighlightResumeContentInput - The input type for the highlightResumeContent function.
 * - HighlightResumeContentOutput - The return type for the highlightResumeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HighlightResumeContentInputSchema = z.object({
  aboutMe: z.string().describe('The About Me section from the resume.'),
  skillsDescription: z.string().describe('The skills description from the resume.'),
});
export type HighlightResumeContentInput = z.infer<
  typeof HighlightResumeContentInputSchema
>;

const HighlightResumeContentOutputSchema = z.object({
  highlightedAboutMe: z
    .string()
    .describe('The About Me section with key phrases highlighted.'),
  highlightedSkillsDescription: z
    .string()
    .describe('The skills description with keywords highlighted.'),
});
export type HighlightResumeContentOutput = z.infer<
  typeof HighlightResumeContentOutputSchema
>;

export async function highlightResumeContent(
  input: HighlightResumeContentInput
): Promise<HighlightResumeContentOutput> {
  return highlightResumeContentFlow(input);
}

const highlightResumeContentPrompt = ai.definePrompt({
  name: 'highlightResumeContentPrompt',
  input: {schema: HighlightResumeContentInputSchema},
  output: {schema: HighlightResumeContentOutputSchema},
  prompt: `You are an expert resume keyword extractor. Please analyze the following sections from a resume and highlight the most important keywords and phrases. Return the highlighted sections.

About Me Section: {{{aboutMe}}}

Skills Description: {{{skillsDescription}}}

Highlight the keywords by wrapping them in <mark> tags.`,
});

const highlightResumeContentFlow = ai.defineFlow(
  {
    name: 'highlightResumeContentFlow',
    inputSchema: HighlightResumeContentInputSchema,
    outputSchema: HighlightResumeContentOutputSchema,
  },
  async input => {
    const {output} = await highlightResumeContentPrompt(input);
    return output!;
  }
);
