import React from "react";
import PropTypes from "prop-types";

const Gitlab = (props) => {
	return (
		<svg
			className={props.iconStyles}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			width="1em"
			height="1em"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24">
			<path d="M23.955 13.587l-1.342-4.135l-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449L.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024" />
		</svg>
	);
};

Gitlab.propTypes = {
	iconStyles: PropTypes.string.isRequired,
};

export default Gitlab;