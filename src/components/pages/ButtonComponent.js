import React from 'react';


const ButtonComponent = () => {
    return (
       <div class="content">
	     <div class="row">
            <div class="col-md-12">
			<p class="action-description">
			  iService buttons are usually used in form action like save.
			</p>
			  <div class="box box-primary">
			    <div class="box-header">
				  <h3 class="box-title"> <i class="fa fa-edit"></i> Buttons </h3>
				</div>
				<div class="box-body  table-responsive">
				  <table class="table table-bordered text-center">
					<tbody>
						<tr>
							<th>Normal</th>
							<th>Large <code>.btn-lg</code></th>
							<th>Small <code>.btn-sm</code></th>
							<th>X-Small <code>.btn-xs</code></th>
							
							<th>Disabled <code>.disabled</code></th>
						</tr>
						<tr>
							<td>
								<button type="button" class="btn btn-block btn-default">Default</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-default btn-lg">Default</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-default btn-sm">Default</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-default btn-xs">Default</button>
							</td>
							
							<td>
								<button type="button" class="btn btn-block btn-default disabled">Default</button>
							</td>
						</tr>
						<tr>
							<td>
								<button type="button" class="btn btn-block btn-primary">Primary</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-primary btn-lg">Primary</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-primary btn-sm">Primary</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-primary btn-xs">Primary</button>
							</td>
							
							<td>
								<button type="button" class="btn btn-block btn-primary disabled">Primary</button>
							</td>
						</tr>
						<tr>
							<td>
								<button type="button" class="btn btn-block btn-success">Success</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-success btn-lg">Success</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-success btn-sm">Success</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-success btn-xs">Success</button>
							</td>
						
							<td>
								<button type="button" class="btn btn-block btn-success disabled">Success</button>
							</td>
						</tr>
						<tr>
							<td>
								<button type="button" class="btn btn-block btn-info">Info</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-info btn-lg">Info</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-info btn-sm">Info</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-info btn-xs">Info</button>
							</td>
							
							<td>
								<button type="button" class="btn btn-block btn-info disabled">Info</button>
							</td>
						</tr>
						<tr>
							<td>
								<button type="button" class="btn btn-block btn-danger">Danger</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-danger btn-lg">Danger</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-danger btn-sm">Danger</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-danger btn-xs">Danger</button>
							</td>
							
							<td>
								<button type="button" class="btn btn-block btn-danger disabled">Danger</button>
							</td>
						</tr>
						<tr>
							<td>
								<button type="button" class="btn btn-block btn-warning">Warning</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-warning btn-lg">Warning</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-warning btn-sm">Warning</button>
							</td>
							<td>
								<button type="button" class="btn btn-block btn-warning btn-xs">Warning</button>
							</td>
							
							<td>
								<button type="button" class="btn btn-block btn-warning disabled">Warning</button>
							</td>
						</tr>
					</tbody>
				</table>
				
				<div class="">
				    <h2 class="action-list-title">Example</h2>
				    <p class="action-description">
					  iService includes several predefined button styles, each serving its own semantic purpose.
					</p>
					<ul class="item-actions">
					<li>
						<div>
						  <button class="btn btn-primary" type="button">Save</button>  Save or Add action.
						  
						</div>
					</li>
					<li>
						<div>
						  <button class="btn btn-danger btn-delete" type="button">Delete...</button>  Delete or Remove action 
						  
						</div>
					</li>				
				  </ul>
				</div>	
				</div>
				
			  </div>
			  
			</div>
			<div class="col-md-12">
				
					<div class="box">
						<div class="box-header border-primary">
							<h3 class="box-title">Split Buttons</h3>
						</div>
						 <div class="box-body">
                                
							<p>Normal split buttons:</p>

							<div class="margin">
								<div class="btn-group">
									<button type="button" class="btn btn-default">Action</button>
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
										<span class="caret"></span>
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
								<div class="btn-group">
									<button type="button" class="btn btn-info">Action</button>
									<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
										<span class="caret"></span>
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
								<div class="btn-group">
									<button type="button" class="btn btn-danger">Action</button>
									<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
										<span class="caret"></span>
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
								<div class="btn-group">
									<button type="button" class="btn btn-success">Action</button>
									<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
										<span class="caret"></span>
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
								<div class="btn-group">
									<button type="button" class="btn btn-warning">Action</button>
									<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
										<span class="caret"></span>
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li><a href="#">Action</a></li>
										<li><a href="#">Another action</a></li>
										<li><a href="#">Something else here</a></li>
										<li class="divider"></li>
										<li><a href="#">Separated link</a></li>
									</ul>
								</div>
							</div>
						  
						</div>
					</div>
				</div>
		</div> 
    </div>
    );
}
 

export default ButtonComponent;
