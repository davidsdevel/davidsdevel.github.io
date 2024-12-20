export const figureToImageBlock = {
	view: 'figure',
	model: (viewElement, { writer }) => {
		const child = viewElement.getChild(0);

		const src = child.getAttribute('src');

		return writer.createElement('imageBlock', {
			'src': src,
			'loading': 'lazy'
		});
	},
	converterPriority: 'high',
};

export const imageToDataFigure = (d) =>
	d.on('attribute:src:imageBlock', (e, data, { mapper, writer }) => {
		const figure = mapper.toViewElement(data.item);
		const img = figure.getChild(0);

		//writer.setAttribute('src', `${data.attributeNewValue}&w=100`, img);
		//writer.setAttribute('src', data.attributeNewValue, img);
		writer.setAttribute('src', data.attributeNewValue, img);
		
		writer.setAttribute(
			'srcset',
			`${data.attributeNewValue}&w=480 480w, ${data.attributeNewValue}&w=720 720w, ${data.attributeNewValue}&w=1024 1024w, ${data.attributeNewValue}&w=2048 1400w`,
			img,
		);
		writer.setAttribute('loading', 'lazy', img);
	});

export const imageToEditFigure = (d) =>
	d.on('attribute:src:imageBlock', (e, data, { mapper, writer }) => {
		const figure = mapper.toViewElement(data.item);
		const img = figure.getChild(0);

		writer.setAttribute('src', data.attributeNewValue, img);
	});
