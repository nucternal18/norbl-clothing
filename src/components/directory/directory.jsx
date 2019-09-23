import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item';
import './directory.scss'

const directory = ({sections}) => (
        <div className='directory-menu'>
            {sections.map(({ id, ...props }) => <MenuItem key={id} {...props} />)}
        </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(directory);