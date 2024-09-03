import { expect } from 'chai';
import { ClassicEditor, Essentials, Paragraph, Heading } from 'ckeditor5';
import Testplugin from '../src/testplugin.js';

describe( 'Testplugin', () => {
	it( 'should be named', () => {
		expect( Testplugin.pluginName ).to.equal( 'Testplugin' );
	} );

	describe( 'init()', () => {
		let domElement: HTMLElement, editor: ClassicEditor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					Testplugin
				],
				toolbar: [
					'testpluginButton'
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load Testplugin', () => {
			const myPlugin = editor.plugins.get( 'Testplugin' );

			expect( myPlugin ).to.be.an.instanceof( Testplugin );
		} );

		it( 'should add an icon to the toolbar', () => {
			expect( editor.ui.componentFactory.has( 'testpluginButton' ) ).to.equal( true );
		} );

		it( 'should add a text into the editor after clicking the icon', () => {
			const icon = editor.ui.componentFactory.create( 'testpluginButton' );

			expect( editor.getData() ).to.equal( '' );

			icon.fire( 'execute' );

			expect( editor.getData() ).to.equal( '<p>Hello CKEditor 5!</p>' );
		} );
	} );
} );
