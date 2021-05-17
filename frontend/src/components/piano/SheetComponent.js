import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Sheet.scss';
class SheetComponent extends Component {
    render() {
        return(
            <div>
                <div class="cat_sheet cat_sheet--animate">
                    <span class="cat_sheet__lines">
                    <span class="cat_sheet__notes-wrapper">
                    <span class="cat_sheet__note cat_sheet__note--1"></span>
                    <span class="cat_sheet__note cat_sheet__note--2"></span>
                    <span class="cat_sheet__note cat_sheet__note--3"></span>
                    <span class="cat_sheet__note cat_sheet__note--4"></span>
                    <span class="cat_sheet__note cat_sheet__note--5"></span>
                    <span class="cat_sheet__note cat_sheet__note--6"></span>
                    <span class="cat_sheet__note cat_sheet__note--7"></span>
                    <span class="cat_sheet__note cat_sheet__note--8"></span>
                    <span class="cat_sheet__note cat_sheet__note--9"></span>
                    <span class="cat_sheet__note cat_sheet__note--10"></span>
                    <span class="cat_sheet__note cat_sheet__note--11"></span>
                    <span class="cat_sheet__note cat_sheet__note--12"></span>
                    </span>
                    </span>
                </div>
            </div>
        )
    }
}

export default connect()(SheetComponent)


