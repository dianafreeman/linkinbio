import { default as socials } from '$content/socials.json';

export async function get() {
  if (socials) {
    return {
      body: { socials },
    };
  } else {
    return {
      status: 404,
    };
  }
}
