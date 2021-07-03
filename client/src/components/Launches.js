import React, { Fragment } from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      id
      flight_number
      name
      date_local
      success
    }
  }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);

    return (
        <Fragment>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            <Fragment>
                {
                    data.launches.map(launch => (
                        <LaunchItem 
                            key={launch.id}
                            launch={launch}
                        />
                    ))
                }
            </Fragment>
        </Fragment>
    )
}

export default Launches
