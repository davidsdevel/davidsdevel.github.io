// components/custom-editor.js
'use client' // only in App Router

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	AccessibilityHelp,
	AutoImage,
	Autoformat,
	Autosave,
    ClassicEditor,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	CloudServices,
	Essentials,
	Heading,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SelectAll,
	SimpleUploadAdapter,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
} from 'ckeditor5';
import CustomPlugin from '../lib/editorPlugin';
import 'ckeditor5/ckeditor5.css';

function CustomEditor({content, onChange, onChangeModalState, onLoad}) {

    
	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertImage',
				'unsplash',
				'mediaEmbed',
				'insertTable',
				'blockQuote',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'outdent',
				'indent',
			],
			shouldNotGroupWhenFull: false,
		},
		plugins: [
			AccessibilityHelp,
			Autoformat,
			AutoImage,
			Autosave,
			BalloonToolbar,
			BlockQuote,
			BlockToolbar,
			Bold,
			CloudServices,
			Essentials,
			Heading,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			MediaEmbed,
			Paragraph,
			PasteFromOffice,
			SelectAll,
			SimpleUploadAdapter,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			TodoList,
			Underline,
			Undo,
			CustomPlugin,
		],
		balloonToolbar: [
			'bold',
			'italic',
			'|',
			'link',
			'unsplash',
			'|',
			'bulletedList',
			'numberedList',
		],
		blockToolbar: [
			'bold',
			'italic',
			'|',
			'link',
			'unsplash',
			'insertTable',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
		],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph',
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1',
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2',
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3',
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4',
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5',
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6',
				},
			],
		},
		image: {
			toolbar: [
				'toggleImageCaption',
				'imageTextAlternative',
				'|',
				'imageStyle:inline',
				'imageStyle:wrapText',
				'imageStyle:breakText',
				'|',
				'resizeImage',
			],
		},
		initialData: content,
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file',
					},
				},
			},
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true,
			},
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties',
			],
		},
        licenseKey: 'GPL'
	};

    return (
        <CKEditor
            editor={ ClassicEditor }
			config={ editorConfig }
			onChange={(event, editor) => {
				onChange(editor.getData())
			}}
			onReady={(editor) => {
				onLoad(editor);

				const input = document.querySelector('.image-search-button');

				input.onclick = (e) => {
					e.preventDefault();

					onChangeModalState(true);
				};
			}}
        />
    );
}

export default CustomEditor;
