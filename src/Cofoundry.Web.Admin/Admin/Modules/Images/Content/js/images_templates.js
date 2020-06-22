angular.module('cms.images').run(['$templateCache',function(t){t.put('/Admin/Modules/Images/Js/Routes/AddImage.html','<cms-page-header cms-title="Upload"                 cms-parent-title="Images"></cms-page-header><cms-form cms-name="mainForm" ng-submit="vm.save()">    <cms-page-actions>        <cms-button-submit cms-text="Save" class="main-cta" ng-disabled="vm.mainForm.$invalid || vm.saveLoadState.isLoading"></cms-button-submit>        <cms-button cms-text="Cancel" ng-click="vm.cancel()"></cms-button>    </cms-page-actions>    <!-- Scrollable content area -->    <cms-page-body cms-content-type="form">        <cms-form-status></cms-form-status>        <!--Page URL-->        <cms-form-section cms-title="Image details">            <cms-form-field-image-upload cms-title="File"                                         cms-model="vm.command.file"                                         cms-change="vm.onFileChanged()"                                         cms-load-state="vm.saveLoadState"                                         required></cms-form-field-image-upload>            <cms-form-field-text cms-title="Title"                                 cms-model="vm.command.title"                                 max-length="130"                                 required></cms-form-field-text>            <cms-form-field-tags cms-title="CMS Tags"                                 cms-model="vm.command.tags"></cms-form-field-tags>            <cms-form-field-image-anchor-location-selector cms-model="vm.command.defaultAnchorLocation"></cms-form-field-image-anchor-location-selector>        </cms-form-section>    </cms-page-body></cms-form>');
t.put('/Admin/Modules/Images/Js/Routes/ImageDetails.html','<cms-page-header cms-title="{{vm.image.title}}"                 cms-parent-title="Images"></cms-page-header>    <cms-form cms-name="mainForm"          cms-edit-mode="vm.editMode"          ng-submit="vm.save()"          cms-loading="vm.formLoadState.isLoading">    <!-- Default toolbar -->    <cms-page-actions ng-show="!vm.editMode">        <cms-button cms-text="Edit"                    class="main-cta"                    ng-click="vm.edit()"                    ng-show="!vm.editMode"                    ng-disabled="vm.globalLoadState.isLoading"                    ng-if="::vm.canUpdate"></cms-button>        <cms-button cms-text="Delete"                    ng-click="vm.remove()"                    ng-disabled="vm.editMode || vm.globalLoadState.isLoading"                    ng-if="::vm.canDelete"></cms-button>    </cms-page-actions>    <!-- Edit toolbar -->    <cms-page-actions ng-show="vm.editMode">        <cms-button-submit cms-text="Save"                           class="main-cta"                           ng-show="vm.editMode"                           ng-disabled="vm.mainForm.$invalid || vm.globalLoadState.isLoading"                           cms-loading="vm.saveLoadState.isLoading"></cms-button-submit>        <cms-button cms-text="Cancel"                    ng-click="vm.cancel()"                    ng-show="vm.editMode"                    ng-disabled="vm.globalLoadState.isLoading"></cms-button>    </cms-page-actions>    <!-- Scrollable content area -->    <cms-page-body cms-content-type="form">        <cms-form-status></cms-form-status>        <!--MAIN-->        <cms-form-section cms-title="Main">            <cms-form-field-image-upload cms-title="File"                                         cms-model="vm.command.file"                                         cms-change="vm.onFileChanged()"                                         cms-asset="vm.previewImage"                                         cms-load-state="vm.saveLoadState"                                         required></cms-form-field-image-upload>            <cms-form-field-text cms-title="Title"                                 cms-model="vm.command.title"                                 maxlength="130"                                 required></cms-form-field-text>            <cms-form-field-readonly cms-title="Path"                                     cms-description="Full path to the image asset file."                                     cms-model="vm.previewUrl"></cms-form-field-readonly>            <cms-form-field-image-anchor-location-selector cms-model="vm.command.defaultAnchorLocation"></cms-form-field-image-anchor-location-selector>            <cms-form-field-tags cms-title="CMS Tags"                                 cms-model="vm.command.tags"></cms-form-field-tags>        </cms-form-section>        <!--AUDIT DATA-->        <cms-form-section-audit-data cms-audit-data="vm.image.auditData"></cms-form-section-audit-data>    </cms-page-body></cms-form>');
t.put('/Admin/Modules/Images/Js/Routes/ImageList.html','<!--HEADER--><cms-page-header cms-title="Images"></cms-page-header><cms-page-sub-header>    <cms-page-header-buttons>        <a class="btn-icon" cms-text="Filter"           ng-click="vm.toggleFilter()">            <i class="fa fa-search"></i>        </a>        <!--FILTER-->        <cms-search-filter cms-query="vm.query"                           cms-filter="vm.filter"                           ng-show="vm.isFilterVisible">            <cms-form-field-text cms-title="Tags"                                 cms-model="vm.filter.tags"></cms-form-field-text>            <cms-form-field-number cms-title="Width"                                   cms-model="vm.filter.width"></cms-form-field-number>            <cms-form-field-number cms-title="Height"                                   cms-model="vm.filter.height"></cms-form-field-number>        </cms-search-filter>    </cms-page-header-buttons></cms-page-sub-header><!-- Default toolbar --><cms-page-actions ng-show="!vm.editMode">    <cms-button-link class="main-cta"                     cms-text="Upload Image"                     cms-icon="plus"                     cms-href="#/new"                     ng-if="::vm.canCreate"></cms-button-link>    <cms-pager cms-result="vm.result"               cms-query="vm.query"></cms-pager></cms-page-actions><!-- Scrollable content area --><cms-page-body cms-content-type="form"               cms-sub-header="with-header">    <cms-table-container cms-loading="vm.gridLoadState.isLoading">        <table>            <thead>                <tr>                    <th>Image</th>                    <th>Title</th>                    <th>Size</th>                    <th>Tags</th>                    <th>Modified</th>                    <th cms-table-column-actions>Actions</th>                </tr>            </thead>            <tbody>                <tr ng-if="vm.result.items.length == 0">                    <td colspan="100" class="empty">Sorry, no images could be found.</td>                </tr>                <tr ng-repeat="image in vm.result.items">                    <td>                        <cms-table-cell-image cms-image="image"></cms-table-cell-image>                    </td>                    <td>                        <a href="#/{{ image.imageAssetId }}">{{ ::image.title }}</a>                    </td>                    <td>                        <strong>{{image.width}} x {{image.height}}</strong>                        <div>{{image.fileSizeInBytes | bytes}}</div>                    </td>                    <td>                        <cms-tag-list cms-tags="image.tags"></cms-tag-list>                    </td>                    <td class="lowPriority">                        <cms-table-cell-updated-audit-data cms-audit-data="image.auditData"></cms-table-cell-updated-audit-data>                    </td>                    <td cms-table-column-actions>                        <a href="#/{{image.imageAssetId}}"                           class="btn-icon"                           title="Edit"                           ng-if="::vm.canUpdate">                            <i class="fa fa-pencil-square-o"></i>                        </a>                    </td>                </tr>            </tbody>        </table>    </cms-table-container></cms-page-body>');}]);