import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CkeditorComponent = () => {
    return (
	        <div class="content">
				 <div class="row">
					<div class="col-md-12">
					  <div class="box box-primary">
						<div class="box-header">
						  <h3 class="box-title"> <i class="fa fa-edit"></i> Ckeditor </h3>
						</div>
						<div class="box-body  table-responsive">
									<CKEditor
										editor={ ClassicEditor }
										data="<p>Hi</p>"
										onInit={ editor => {
											// You can store the "editor" and use when it is needed.
											console.log( 'Editor is ready to use!', editor );
										} }
										onChange={ ( event, editor ) => {
											const data = editor.getData();
											console.log( { event, editor, data } );
										} }
										onBlur={ ( event, editor ) => {
											console.log( 'Blur.', editor );
										} }
										onFocus={ ( event, editor ) => {
											console.log( 'Focus.', editor );
										} }
									/>
								
						</div>	
					  </div>
					</div>
				</div> 
			</div>
    );
}
 
export default CkeditorComponent;
