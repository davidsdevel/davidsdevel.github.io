// ckeditor/insertproductpreviewcommand.js

import { Command } from 'ckeditor5';

export class InsertUnsplashImage extends Command {
	execute(data) {
		const { user, href, src, download } = data;

		//Send track image: Add Unsplash URL
		fetch(
			`/api/unsplash/track?url=${download.replace('https://api.unsplash.com/photos', '')}`,
		);

		const frag = this.editor.model.change((writer) => {
			const image = writer.createElement('imageBlock', src);
            
			const caption = writer.createElement('caption', {
				alignment: 'center',
			});

            const docFrag = writer.createDocumentFragment();
            
			writer.appendText(`Photo by ${user} on Unsplash`, caption);

			writer.append(caption, image);
			writer.append(image, docFrag);

			return docFrag;
		});

		this.editor.model.insertContent(frag, this.editor.model.document.selection);
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;

		const allowedIn = model.schema.findAllowedParent(
			selection.getFirstPosition(),
			'imageBlock',
		);

		this.isEnabled = allowedIn !== null;
	}
}
