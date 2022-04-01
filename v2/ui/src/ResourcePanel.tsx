import * as React from "react";

const ExampleResourcePanel = ({
                                  application,
                                  node,
                                  resource,
                                  tree,
                              }: { application: any, node: any, resource?: any, tree: any }) =>
    <div className='white-box'>
        <p>This is an example resource panel.</p>
        <div className='row'>
            <div className='columns small-3'>Application</div>
            <div className='columns small-6'>{application.metadata.name}</div>
        </div>
        <div className='row'>
            <div className='columns small-3'>Node</div>
            <div className='columns small-6'>{node.group}/{node.kind}/{node.name}</div>
        </div>
        <div className='row'>
            <div className='columns small-3'>Resource</div>
            <div className='columns small-6'>{resource && resource.metadata.name}</div>
        </div>
        <div className='row'>
            <div className='columns small-3'>Tree</div>
            <div className='columns small-6'>{tree.nodes.length} nodes</div>
        </div>
    </div>;

export const ResourcePanel = ({
                                  application,
                                  resource,
                                  node,
                                  tree
                              }: { application: any, resource?: any, node: any, tree: any }) => ({
    iconClassName: 'fa fa-cat',
    title: 'Example',
    component: <ExampleResourcePanel application={application} node={node}
                                     resource={resource}
                                     tree={tree}/>
});
