import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item';

import styled from 'styled-components';


const directory = ({sections}) => (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...props }) => <MenuItem key={id} {...props} />)}
        </DirectoryMenuContainer>
)

const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps, null)(directory);