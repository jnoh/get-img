import test from 'ava';
import s from '.';

test('throws an error if content is not an image', async t => {
  const error = await t.throwsAsync(async () => {
    await s('http://www.google.com');
  });

  t.is(error.message, 'Invalid content-type');
});

test('allows https', async t => {
  const error = await t.throwsAsync(async () => {
    await s('https://www.google.com');
  });

  t.is(error.message, 'Invalid content-type');
});

test('should download a jpeg', async t => {
  const imgData = await s('http://obs.astro.ucla.edu/images/towercam.jpg');
  t.truthy(imgData);
});
