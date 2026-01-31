import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Translator - Functional Tests', () => {

  test('Pos_Fun_0001 - Convert short daily greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputText = 'oyaata kohomadha?';

    // Input field
    const inputBox = page.locator('textarea').first();
    await inputBox.fill(inputText);

    // Output div
    const outputBox = page.locator('div.whitespace-pre-wrap').first();

    // Wait for output to appear
    await expect(outputBox).toHaveText(/.+/, { timeout: 10000 });

    const outputText = await outputBox.innerText();

    expect(outputText.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0002 - Convert longer conversational sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputText = 'mata oyage adahasa hari lassanai kiyala hithenawa';

  const inputBox = page.locator('textarea').first();
  await inputBox.fill(inputText);

  await page.waitForFunction(() => {
    const el = document.querySelector('div.whitespace-pre-wrap');
    return el && el.textContent && el.textContent.trim().length > 0;
  }, { timeout: 15000 });

  const outputText = await page.locator('div.whitespace-pre-wrap').first().innerText();
  expect(outputText.length).toBeGreaterThan(0);
});

test('Pos_UI_0001 - Verify real-time output updates while typing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  // Step 1: Ensure output is initially empty
  await expect(outputBox).toHaveText('');

  // Step 2: Type first input
  await inputBox.type('oyaata');

  // Wait for output to appear
  await page.waitForFunction(() => {
    const el = document.querySelector('div.whitespace-pre-wrap');
    return el && el.textContent && el.textContent.trim().length > 0;
  });

  const firstOutput = await outputBox.innerText();

  // Step 3: Modify input
  await inputBox.fill('oyaata kohomadha');

  // Wait until output updates (changes)
  await page.waitForFunction(
    (prev) => {
      const el = document.querySelector('div.whitespace-pre-wrap');
      return el && el.textContent && el.textContent.trim() !== prev;
    },
    firstOutput
  );

  const updatedOutput = await outputBox.innerText();

  expect(updatedOutput).not.toBe(firstOutput);
});


});
