import { expect } from 'chai';
import { Testplugin as TestpluginDll, icons } from '../src/index.js';
import Testplugin from '../src/testplugin.js';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 Testplugin DLL', () => {
	it( 'exports Testplugin', () => {
		expect( TestpluginDll ).to.equal( Testplugin );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
