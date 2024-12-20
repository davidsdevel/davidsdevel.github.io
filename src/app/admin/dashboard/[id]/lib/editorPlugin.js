import { ButtonView, Plugin } from 'ckeditor5';
import {
	figureToImageBlock,
	imageDimensionsToDataFigure,
	imageToDataFigure,
	imageToEditFigure,
} from './editorConverters';

import { InsertUnsplashImage } from './editorCommands';

export default class EditorPlugin extends Plugin {
	init() {
		this._defineSchema();
		this._defineConverters();

		const editor = this.editor;

		editor.commands.add('unsplash', new InsertUnsplashImage(editor));

		editor.ui.componentFactory.add('unsplash', () => {
			const button = new ButtonView();

			button.set({
				class: 'image-search-button',
				icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.516 9q1.031 0 1.758-0.727t0.727-1.758-0.727-1.781-1.758-0.75-1.781 0.75-0.75 1.781 0.75 1.758 1.781 0.727zM19.313 8.906l3.094 3.094-1.406 1.406-3.141-3.094q-1.172 0.703-2.391 0.703-1.875 0-3.164-1.313t-1.289-3.188 1.313-3.188 3.188-1.313 3.188 1.313 1.313 3.188q0 1.219-0.703 2.391zM16.5 18h-11.016l2.766-3.516 1.969 2.344 2.719-3.516zM18 12.984l2.016 2.016v5.016q0 0.797-0.609 1.383t-1.406 0.586h-14.016q-0.797 0-1.383-0.586t-0.586-1.383v-14.016q0-0.797 0.586-1.406t1.383-0.609h5.531q-0.469 0.984-0.516 2.016h-5.016v14.016h14.016v-7.031z"></path></svg>`,
				withText: false,
			});

			return button;
		});
	}
	_defineSchema() {
		const schema = this.editor.model.schema;

		schema.extend('imageBlock', {
			allowAttributes: ['data-src', 'data-width'],
		});
	}
	_defineConverters() {
		const editor = this.editor;

		editor.conversion.for('upcast').elementToElement(figureToImageBlock);
		editor.conversion.for('dataDowncast').add(imageToDataFigure);
		editor.conversion.for('dataDowncast').add(imageDimensionsToDataFigure);
		editor.conversion.for('editingDowncast').add(imageToEditFigure);
	}
}
