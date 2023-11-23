module.exports = (data) => {
  data.excludeFromCollections = true;
  data.layout = null;

  const urls = data.collections.all.map((page) => {
    if (page.data.prerender === 'none') {
      return;
    }
    return page.url
  });

  const prerender = {
    prerender: [
      {
        source: 'list',
        urls: urls,
      },
    ],
  };

  return `<script type="speculationrules">${JSON.stringify(prerender)}</script>`;
};
