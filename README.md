# Brian Kipkoech Portfolio

This is my personal portfolio website, built with HTML, CSS, and JavaScript.

## Live API integration

The Projects page loads my latest public GitHub repositories using the GitHub REST API:

`https://api.github.com/users/KBRIANKIP/repos?sort=updated&per_page=6`

The feature has three user-facing states:

- A loading message while the request is in progress.
- Repository cards after the returned JSON is rendered.
- A friendly error message and a `Try again` button if the request fails.

No API key or secret is used or exposed in this project.

## Security review

- Dynamic repository data is added with DOM methods and `textContent`; no repository data is inserted with `innerHTML`.
- The contact-form status messages use `textContent`.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- Confirm the GitHub Pages and Vercel deployments show HTTPS before submitting.

## Performance work

- There are no below-the-fold images in the current pages. Add `loading="lazy"` to any future project thumbnails placed below the first screen.
- Resize and compress `Images/me.jpg` before deployment if it is larger than needed for its displayed size.

## Lighthouse Performance score

Measure the deployed site in Chrome DevTools, using the same device setting before and after optimisation.

| Measurement | Performance score | Date tested |
| --- | --- | --- |
| Before optimisation | Add your score | Add your date |
| After optimisation | Add your score | Add your date |

## Before submission

- Test the GitHub API section on GitHub Pages and Vercel in an incognito/private browser window.
- Confirm the loading and error states can be demonstrated.
- Replace the Lighthouse placeholders above with your measured results.
- Prepare a 3-4 minute demonstration covering the live data, security review, and performance improvement.
