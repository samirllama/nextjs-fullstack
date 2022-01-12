import * as React from 'react';
import { createCustomEqual } from 'fast-equals';
import { isLatLngLiteral } from '@googlemaps/typescript-guards';

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
}

const Map: React.FC<MapProps> = ({ style, onClick, onIdle, children, ...options }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    React.useEffect(() => {
        const loader = new Loader({
            apiKey: 'yourAPIkey',
            version: 'weekly'
        });
        let map;
        loader.load().then(() => {
            map = new google.maps.Map(map.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });
        });
    });

    return (
        <>
            <div ref={ref} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    );
};
const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a: any, b: any) => {
    if (
        isLatLngLiteral(a) ||
        a instanceof google.maps.LatLng ||
        isLatLngLiteral(b) ||
        b instanceof google.maps.LatLng
    ) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
});

function useDeepCompareMemoize(value: any) {
    const ref = React.useRef();

    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}

function useDeepCompareEffectForMaps(callback: React.EffectCallback, dependencies: any[]) {
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default Map;
