module.exports = {
    name: 'new:page',
    description: 'Creates a page template.',
    run: async toolbox => {
        const { parameters, create } = toolbox;

        const name = parameters.first;

        await create('page', name);
    }
}