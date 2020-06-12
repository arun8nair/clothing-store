import React, {Component} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import MenuItem from '../../components/MenuItem';
import './Directory.scss';

const Directory = ({sections}) => (
    <div className="directory-menu">
                {sections.map(({id, ...otherProps}) => {
                    return <MenuItem key={id} {...otherProps} />
                })}
            </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);