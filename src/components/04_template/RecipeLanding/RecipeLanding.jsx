import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as apiActions from '../../../actions/api';
import Default from '../../05_page/Default/Default';
import TeaserFeatured from '../../03_organism/TeaserFeatured/TeaserFeatured';
import TeaserList from '../../03_organism/TeaserList/TeaserList';

class RecipeLanding extends Component {
  componentDidMount() {
    if (!this.props.latestRecipes.length) {
      this.props.fetchRecipeLanding();
    }
  }
  render() {
    return (
      <Default>
        <div>
          <TeaserFeatured />
          <TeaserList teasers={this.props.latestRecipes.map(latestRecipe => ({
            id: latestRecipe.id,
            title: latestRecipe.attributes.title,
            subtitle: latestRecipe.attributes.field_difficulty,
          }))} />
          <TeaserFeatured textAlignment="right" />
        </div>
      </Default>
    );
  }
}

RecipeLanding.loadData = [apiActions.fetchRecipeLanding];

export default connect((state) => ({
  latestRecipes: state.api.latestRecipes,
}), { ...apiActions })(RecipeLanding);
