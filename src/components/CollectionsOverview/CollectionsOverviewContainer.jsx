import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelector";
import WithSpinner from "../Spinner/Spinner";
import CollectionsOverview from './index.jsx'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
    )(CollectionsOverview)

export default CollectionsOverviewContainer;