/**
 * Replace URL parameters in Next.js without re-rendering
 *
 * @param parameter - Route parameter
 * @param value - New parameter value
 */
export function replaceUrl(parameter: string, value?: string) {
  // console.log('replaceUrl', parameter, value);
  if (typeof parameter !== 'string') {
    throw new Error('parameter is not a string');
  }

  // if (typeof value !== 'string' || value !== undefined) {
  //   throw new Error('value is not a string');
  // }

  // Current state
  const { as, url } = window.history.state;
  // console.log('as', as);
  // console.log('url', url);
  // const args = as.split('/');

  // Find the parameter index
  // const regex = new RegExp(`^(.*)(\\[${parameter}\\])(.*)$`);
  // const parameterId =
  //   (regex.exec(url)?.slice(1)?.[0]?.split('/')?.length || 1) - 1;

  // Replace value
  // args[parameterId] = value;

  // Build the new state
  // const newAs = args.join('/');
  // const newUrl = url.replace(
  //   new RegExp(`${parameter}=.*?(?=&|$)`),
  //   `${parameter}=${value}`
  // );

  const newUrl = new URL(url, window.location.origin);

  if (value === undefined) {
    // Remove parameter
    newUrl.searchParams.delete(parameter);
  }
  if (value !== undefined) {
    newUrl.searchParams.set(parameter, value);
  }
  const newUrlString = newUrl.toString();
  // Apply the new state
  // window.history.replaceState(
  //   { ...window.history.state, as: newUrlString, url: newUrlString },
  //   '',
  //   newUrlString
  // );
  window.history.pushState(
    {
      ...window.history.state,
      as: newUrlString,
      url: newUrlString,
    },
    '',
    newUrlString
  );
}
