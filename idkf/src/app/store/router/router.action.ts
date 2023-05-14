import {createAction, props} from '@ngrx/store';

export const goToUrl = createAction(
    '[AppRouter/Navigation] Go To Url',
    props<{ url: string }>(),
);