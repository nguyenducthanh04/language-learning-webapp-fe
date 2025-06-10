import React from 'react';
import './feature_items.scss'; 

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature_item">
      <img src={icon} alt={title} className="feature_icon" />
      <h3 className="feature_title">{title}</h3>
      <p className="feature_description">{description}</p>
    </div>
  );
}

export default FeatureItem;
