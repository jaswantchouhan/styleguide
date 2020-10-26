import React from 'react';


const ColorsComponent = () => {
    return (
    <div class="content">
	     <div class="row">
            <div class="col-md-12">
			
			 <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title"><i class="fa fa-tag"></i> Color Palette</h3>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Primary</h4>

                <div class="color-palette-set">
                  <div class="bg-light-blue disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-light-blue color-palette"><span>#3c8dbc</span></div>
                  <div class="bg-light-blue-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Info</h4>

                <div class="color-palette-set">
                  <div class="bg-aqua disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-aqua color-palette"><span>#00c0ef</span></div>
                  <div class="bg-aqua-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Success</h4>

                <div class="color-palette-set">
                  <div class="bg-green disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-green color-palette"><span>#00a65a</span></div>
                  <div class="bg-green-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Warning</h4>

                <div class="color-palette-set">
                  <div class="bg-yellow disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-yellow color-palette"><span>#f39c12</span></div>
                  <div class="bg-yellow-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Danger</h4>

                <div class="color-palette-set">
                  <div class="bg-red disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-red color-palette"><span>#f56954</span></div>
                  <div class="bg-red-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Gray</h4>

                <div class="color-palette-set">
                  <div class="bg-gray disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-gray color-palette"><span>#d2d6de</span></div>
                  <div class="bg-gray-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
            </div>
            
            <div class="row">
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Teal</h4>

                <div class="color-palette-set">
                  <div class="bg-teal disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-teal color-palette"><span>#39CCCC</span></div>
                  <div class="bg-teal-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
              
              <div class="col-sm-4 col-md-2">
                <h4 class="text-center">Black</h4>

                <div class="color-palette-set">
                  <div class="bg-black disabled color-palette"><span>Disabled</span></div>
                  <div class="bg-black color-palette"><span>#111111</span></div>
                  <div class="bg-black-active color-palette"><span>Active</span></div>
                </div>
              </div>
              
            </div>
            <p>
			  iService uses following button styling for different action
			  
			</p>
			  
          </div>
          
        </div>
			</div>
		</div> 
    </div>
    );
}
 

export default ColorsComponent;
