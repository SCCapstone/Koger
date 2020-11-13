(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-login-admin-login-module~tab3-tab3-module"], {
    /***/
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
      \************************************************************************************/

    /*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */

    /***/
    function node_modulesAngularFire__ivy_ngcc__Fesm2015AngularFireFirestoreJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestore", function () {
        return AngularFirestore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function () {
        return AngularFirestoreCollection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function () {
        return AngularFirestoreCollectionGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function () {
        return AngularFirestoreDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function () {
        return AngularFirestoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function () {
        return ENABLE_PERSISTENCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function () {
        return PERSISTENCE_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTINGS", function () {
        return SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "associateQuery", function () {
        return associateQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineChange", function () {
        return combineChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineChanges", function () {
        return combineChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "docChanges", function () {
        return docChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function () {
        return fromCollectionRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromDocRef", function () {
        return fromDocRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromRef", function () {
        return fromRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortedChanges", function () {
        return sortedChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateEventsArray", function () {
        return validateEventsArray;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.esm.js");
      /**
       * @fileoverview added by tsickle
       * Generated from: observable/fromRef.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T, R
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function _fromRef(ref) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"];
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
        /**
        * @param {?} subscriber
        * @return {?}
        */
        function (subscriber) {
          /** @type {?} */
          var unsubscribe;

          if (scheduler != null) {
            scheduler.schedule(
            /**
            * @return {?}
            */
            function () {
              unsubscribe = ref.onSnapshot(subscriber);
            });
          } else {
            unsubscribe = ref.onSnapshot(subscriber);
          }

          return (
            /**
            * @return {?}
            */
            function () {
              if (unsubscribe != null) {
                unsubscribe();
              }
            }
          );
        });
      }
      /**
       * @template R
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromRef(ref, scheduler) {
        return _fromRef(ref, scheduler);
      }
      /**
       * @template T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromDocRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} payload
        * @return {?}
        */
        function (payload) {
          return {
            payload: payload,
            type: 'value'
          };
        }));
      }
      /**
       * @template T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromCollectionRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} payload
        * @return {?}
        */
        function (payload) {
          return {
            payload: payload,
            type: 'query'
          };
        }));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: collection/changes.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Return a stream of document changes on a query. These results are not in sort order but in
       * order of occurence.
       * @template T
       * @param {?} query
       * @param {?=} scheduler
       * @return {?}
       */


      function docChanges(query, scheduler) {
        return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} action
        * @return {?}
        */
        function (action) {
          return action.payload.docChanges().map(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return (
              /** @type {?} */
              {
                type: change.type,
                payload: change
              }
            );
          });
        }));
      }
      /**
       * Return a stream of document changes on a query. These results are in sort order.
       * @template T
       * @param {?} query
       * @param {?} events
       * @param {?=} scheduler
       * @return {?}
       */


      function sortedChanges(query, events, scheduler) {
        return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes.payload.docChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
        /**
        * @param {?} current
        * @param {?} changes
        * @return {?}
        */
        function (current, changes) {
          return combineChanges(current, changes, events);
        }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              {
                type: c.type,
                payload: c
              }
            );
          });
        }));
      }
      /**
       * Combines the total result set from the current set of changes from an incoming set
       * of changes.
       * @template T
       * @param {?} current
       * @param {?} changes
       * @param {?} events
       * @return {?}
       */


      function combineChanges(current, changes, events) {
        changes.forEach(
        /**
        * @param {?} change
        * @return {?}
        */
        function (change) {
          // skip unwanted change types
          if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
          }
        });
        return current;
      }
      /**
       * Creates a new sorted array from a new change.
       * @template T
       * @param {?} combined
       * @param {?} change
       * @return {?}
       */


      function combineChange(combined, change) {
        switch (change.type) {
          case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {// Not sure why the duplicates are getting fired
            } else {
              combined.splice(change.newIndex, 0, change);
            }

            break;

          case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
              // When an item changes position we first remove it
              // and then add it's new position
              if (change.oldIndex !== change.newIndex) {
                combined.splice(change.oldIndex, 1);
                combined.splice(change.newIndex, 0, change);
              } else {
                combined.splice(change.newIndex, 1, change);
              }
            }

            break;

          case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
              combined.splice(change.oldIndex, 1);
            }

            break;
        }

        return combined;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: collection/collection.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?=} events
       * @return {?}
       */


      function validateEventsArray(events) {
        if (!events || events.length === 0) {
          events = ['added', 'removed', 'modified'];
        }

        return events;
      }
      /**
       * AngularFirestoreCollection service
       *
       * This class creates a reference to a Firestore Collection. A reference and a query are provided in
       * in the constructor. The query can be the unqueried reference if no query is desired.The class
       * is generic which gives you type safety for data update methods and data streaming.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const collectionRef = firebase.firestore.collection('stocks');
       * const query = collectionRef.where('price', '>', '0.01');
       * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
       *
       * // NOTE!: the updates are performed on the reference not the query
       * await fakeStock.add({ name: 'FAKE', price: 0.01 });
       *
       * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
       * fakeStock.valueChanges().subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreCollection = /*#__PURE__*/function () {
        /**
         * The constructor takes in a CollectionReference and Query to provide wrapper methods
         * for data operations and data streaming.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query. See the AssociatedRefence type for details
         * on this implication.
         * @param {?} ref
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollection(ref, query, afs) {
          _classCallCheck(this, AngularFirestoreCollection);

          this.ref = ref;
          this.query = query;
          this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */


        _createClass(AngularFirestoreCollection, [{
          key: "stateChanges",
          value: function stateChanges(events) {
            if (!events || events.length === 0) {
              return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }

            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return events.indexOf(change.type) > -1;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes.length > 0;
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Create a stream of changes as they occur it time. This method is similar to stateChanges()
           * but it collects each event in an array over time.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "auditTrail",
          value: function auditTrail(events) {
            return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
            /**
            * @param {?} current
            * @param {?} action
            * @return {?}
            */
            function (current, action) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(action));
            }, []));
          }
          /**
           * Create a stream of synchronized changes. This method keeps the local array in sorted
           * query order.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges(events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */

            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * @template K
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.payload.docs.map(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                if (options.idField) {
                  return (
                    /** @type {?} */
                    Object.assign(Object.assign({},
                    /** @type {?} */
                    a.data()), _defineProperty({}, options.idField, a.id))
                  );
                } else {
                  return a.data();
                }
              });
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Retrieve the results of the query once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
          /**
           * Add data to a collection reference.
           *
           * Note: Data operation methods are done on the reference not the query. This means
           * when you update data it is not updating data to the window of your query unless
           * the data fits the criteria of the query.
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(data) {
            return this.ref.add(data);
          }
          /**
           * Create a reference to a single document in a collection.
           * @template T
           * @param {?=} path
           * @return {?}
           */

        }, {
          key: "doc",
          value: function doc(path) {
            return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
          }
        }]);

        return AngularFirestoreCollection;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: document/document.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * AngularFirestoreDocument service
       *
       * This class creates a reference to a Firestore Document. A reference is provided in
       * in the constructor. The class is generic which gives you type safety for data update
       * methods and data streaming.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
       * await fakeStock.set({ name: 'FAKE', price: 0.01 });
       * fakeStock.valueChanges().map(snap => {
       *   if(snap.exists) return snap.data();
       *   return null;
       * }).subscribe(value => console.log(value));
       * // OR! Transform using Observable.from() and the data is unwrapped for you
       * Observable.from(fakeStock).subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreDocument = /*#__PURE__*/function () {
        /**
         * The contstuctor takes in a DocumentReference to provide wrapper methods
         * for data operations, data streaming, and Symbol.observable.
         * @param {?} ref
         * @param {?} afs
         */
        function AngularFirestoreDocument(ref, afs) {
          _classCallCheck(this, AngularFirestoreDocument);

          this.ref = ref;
          this.afs = afs;
        }
        /**
         * Create or overwrite a single document.
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */


        _createClass(AngularFirestoreDocument, [{
          key: "set",
          value: function set(data, options) {
            return this.ref.set(data, options);
          }
          /**
           * Update some fields of a document without overwriting the entire document.
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "update",
          value: function update(data) {
            return this.ref.update(data);
          }
          /**
           * Delete a document.
           * @return {?}
           */

        }, {
          key: "delete",
          value: function _delete() {
            return this.ref["delete"]();
          }
          /**
           * Create a reference to a sub-collection given a path and an optional query
           * function.
           * @template R
           * @param {?} path
           * @param {?=} queryFn
           * @return {?}
           */

        }, {
          key: "collection",
          value: function collection(path, queryFn) {
            /** @type {?} */
            var collectionRef = this.ref.collection(path);

            var _associateQuery = associateQuery(collectionRef, queryFn),
                ref = _associateQuery.ref,
                query = _associateQuery.query;

            return new AngularFirestoreCollection(ref, query, this.afs);
          }
          /**
           * Listen to snapshot updates from the document.
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges() {
            /** @type {?} */
            var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
            return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * Listen to unwrapped snapshot updates from the document.
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} action
            * @return {?}
            */
            function (action) {
              return action.payload.data();
            }));
          }
          /**
           * Retrieve the document once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
        }]);

        return AngularFirestoreDocument;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: collection-group/collection-group.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * AngularFirestoreCollectionGroup service
       *
       * This class holds a reference to a Firestore Collection Group Query.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const collectionGroup = firebase.firestore.collectionGroup('stocks');
       * const query = collectionRef.where('price', '>', '0.01');
       * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
       *
       * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
       * fakeStock.valueChanges().subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreCollectionGroup = /*#__PURE__*/function () {
        /**
         * The constructor takes in a CollectionGroupQuery to provide wrapper methods
         * for data operations and data streaming.
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollectionGroup(query, afs) {
          _classCallCheck(this, AngularFirestoreCollectionGroup);

          this.query = query;
          this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */


        _createClass(AngularFirestoreCollectionGroup, [{
          key: "stateChanges",
          value: function stateChanges(events) {
            if (!events || events.length === 0) {
              return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }

            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return events.indexOf(change.type) > -1;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes.length > 0;
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Create a stream of changes as they occur it time. This method is similar to stateChanges()
           * but it collects each event in an array over time.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "auditTrail",
          value: function auditTrail(events) {
            return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
            /**
            * @param {?} current
            * @param {?} action
            * @return {?}
            */
            function (current, action) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(action));
            }, []));
          }
          /**
           * Create a stream of synchronized changes. This method keeps the local array in sorted
           * query order.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges(events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */

            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * Listen to all documents in the collection and its possible query as an Observable.
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            /** @type {?} */
            var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
            return fromCollectionRefScheduled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.payload.docs.map(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                return a.data();
              });
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Retrieve the results of the query once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
        }]);

        return AngularFirestoreCollectionGroup;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: firestore.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var atFirestore = __webpack_require__(
      /*! @firebase/firestore */
      "./node_modules/@firebase/firestore/dist/index.esm.js");
      /**
       * The value of this token determines whether or not the firestore will have persistance enabled
       * @type {?}
       */


      var ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
      /** @type {?} */

      var PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
      /** @type {?} */

      var SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
      /**
       * A utility methods for associating a collection reference with
       * a query.
       *
       * @param {?} collectionRef - A collection reference to query
       * @param {?=} queryFn - The callback to create a query
       *
       * Example:
       * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
       *  return ref.where('age', '<', 200);
       * });
       * @return {?}
       */

      function associateQuery(collectionRef) {
        var queryFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
        /**
        * @param {?} ref
        * @return {?}
        */
        function (ref) {
          return ref;
        };

        /** @type {?} */
        var query = queryFn(collectionRef);
        /** @type {?} */

        var ref = collectionRef;
        return {
          query: query,
          ref: ref
        };
      }
      /**
       * AngularFirestore Service
       *
       * This service is the main entry point for this feature module. It provides
       * an API for creating Collection and Reference services. These services can
       * then be used to do data updates and observable streams of the data.
       *
       * Example:
       *
       * import { Component } from '\@angular/core';
       * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
       * import { Observable } from 'rxjs/Observable';
       * import { from } from 'rxjs/observable';
       *
       * \@Component({
       *   selector: 'app-my-component',
       *   template: `
       *    <h2>Items for {{ (profile | async)?.name }}
       *    <ul>
       *       <li *ngFor="let item of items | async">{{ item.name }}</li>
       *    </ul>
       *    <div class="control-input">
       *       <input type="text" #itemname />
       *       <button (click)="addItem(itemname.value)">Add Item</button>
       *    </div>
       *   `
       * })
       * export class MyComponent implements OnInit {
       *
       *   // services for data operations and data streaming
       *   private readonly itemsRef: AngularFirestoreCollection<Item>;
       *   private readonly profileRef: AngularFirestoreDocument<Profile>;
       *
       *   // observables for template
       *   items: Observable<Item[]>;
       *   profile: Observable<Profile>;
       *
       *   // inject main service
       *   constructor(private readonly afs: AngularFirestore) {}
       *
       *   ngOnInit() {
       *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
       *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
       *     // this.items = from(this.itemsRef); // you can also do this with no mapping
       *
       *     this.profileRef = afs.doc('users/davideast');
       *     this.profile = this.profileRef.valueChanges();
       *   }
       *
       *   addItem(name: string) {
       *     const user = 'davideast';
       *     this.itemsRef.add({ name, user });
       *   }
       * }
       */


      var AngularFirestore = /*#__PURE__*/function () {
        /**
         * Each Feature of AngularFire has a FirebaseApp injected. This way we
         * don't rely on the main Firebase App instance and we can create named
         * apps and use multiple apps.
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} shouldEnablePersistence
         * @param {?} settings
         * @param {?} platformId
         * @param {?} zone
         * @param {?} persistenceSettings
         */
        function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, // tslint:disable-next-line:ban-types
        platformId, zone, persistenceSettings) {
          var _this2 = this;

          _classCallCheck(this, AngularFirestore);

          this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
          this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
          this.firestore = zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig); // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
            //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
            //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue

            if ('registerFirestore' in atFirestore) {
              /** @type {?} */
              atFirestore.registerFirestore(
              /** @type {?} */
              firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"]);
            }
            /** @type {?} */


            var firestore = app.firestore();

            if (settings) {
              firestore.settings(settings);
            }

            return firestore;
          });

          if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
            // We need to try/catch here because not all enablePersistence() failures are caught
            // https://github.com/firebase/firebase-js-sdk/issues/608

            /** @type {?} */
            var enablePersistence =
            /**
            * @return {?}
            */
            function enablePersistence() {
              try {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this2.firestore.enablePersistence(persistenceSettings || undefined).then(
                /**
                * @return {?}
                */
                function () {
                  return true;
                },
                /**
                * @return {?}
                */
                function () {
                  return false;
                }));
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
              }
            };

            this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
          } else {
            this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */


        _createClass(AngularFirestore, [{
          key: "collection",
          value: function collection(pathOrRef, queryFn) {
            /** @type {?} */
            var collectionRef;

            if (typeof pathOrRef === 'string') {
              collectionRef = this.firestore.collection(pathOrRef);
            } else {
              collectionRef = pathOrRef;
            }

            var _associateQuery2 = associateQuery(collectionRef, queryFn),
                ref = _associateQuery2.ref,
                query = _associateQuery2.query;
            /** @type {?} */


            var refInZone = this.schedulers.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return ref;
            });
            return new AngularFirestoreCollection(refInZone, query, this);
          }
          /**
           * Create a reference to a Firestore Collection Group based on a collectionId
           * and an optional query function to narrow the result
           * set.
           * @template T
           * @param {?} collectionId
           * @param {?=} queryGroupFn
           * @return {?}
           */

        }, {
          key: "collectionGroup",
          value: function collectionGroup(collectionId, queryGroupFn) {
            /** @type {?} */
            var queryFn = queryGroupFn ||
            /**
            * @param {?} ref
            * @return {?}
            */
            function (ref) {
              return ref;
            };
            /** @type {?} */


            var collectionGroup = this.firestore.collectionGroup(collectionId);
            return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
          }
          /**
           * @template T
           * @param {?} pathOrRef
           * @return {?}
           */

        }, {
          key: "doc",
          value: function doc(pathOrRef) {
            /** @type {?} */
            var ref;

            if (typeof pathOrRef === 'string') {
              ref = this.firestore.doc(pathOrRef);
            } else {
              ref = pathOrRef;
            }
            /** @type {?} */


            var refInZone = this.schedulers.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return ref;
            });
            return new AngularFirestoreDocument(refInZone, this);
          }
          /**
           * Returns a generated Firestore Document Id.
           * @return {?}
           */

        }, {
          key: "createId",
          value: function createId() {
            return this.firestore.collection('_').doc().id;
          }
        }]);

        return AngularFirestore;
      }();

      AngularFirestore.ɵfac = function AngularFirestore_Factory(t) {
        return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8));
      };
      /** @nocollapse */


      AngularFirestore.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [ENABLE_PERSISTENCE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SETTINGS]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [PERSISTENCE_SETTINGS]
          }]
        }];
      };
      /** @nocollapse */


      AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFirestore_Factory() {
          return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8));
        },
        token: AngularFirestore,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [ENABLE_PERSISTENCE]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SETTINGS]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [PERSISTENCE_SETTINGS]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: firestore.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFirestoreModule = /*#__PURE__*/function () {
        function AngularFirestoreModule() {
          _classCallCheck(this, AngularFirestoreModule);
        }

        _createClass(AngularFirestoreModule, null, [{
          key: "enablePersistence",

          /**
           * Attempt to enable persistent storage, if possible
           * @param {?=} persistenceSettings
           * @return {?}
           */
          value: function enablePersistence(persistenceSettings) {
            return {
              ngModule: AngularFirestoreModule,
              providers: [{
                provide: ENABLE_PERSISTENCE,
                useValue: true
              }, {
                provide: PERSISTENCE_SETTINGS,
                useValue: persistenceSettings
              }]
            };
          }
        }]);

        return AngularFirestoreModule;
      }();

      AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFirestoreModule
      });
      AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFirestoreModule_Factory(t) {
          return new (t || AngularFirestoreModule)();
        },
        providers: [AngularFirestore]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFirestore]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: interfaces.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       * @template T
       */


      function DocumentSnapshotExists() {}

      if (false) {}
      /**
       * @record
       */


      function DocumentSnapshotDoesNotExist() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function QueryDocumentSnapshot() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function QuerySnapshot() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function DocumentChange() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function DocumentChangeAction() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function Action() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function Reference() {}

      if (false) {}
      /**
       * A structure that provides an association between a reference
       * and a query on that reference. Note: Performing operations
       * on the reference can lead to confusing results with complicated
       * queries.
       *
       * Example:
       *
       * const query = ref.where('type', '==', 'Book').
       *                  .where('price', '>' 18.00)
       *                  .where('price', '<' 100.00)
       *                  .where('category', '==', 'Fiction')
       *                  .where('publisher', '==', 'BigPublisher')
       *
       * // This addition would not be a result of the query above
       * ref.add({
       *  type: 'Magazine',
       *  price: 4.99,
       *  category: 'Sports',
       *  publisher: 'SportsPublisher'
       * });
       * @record
       */


      function AssociatedReference() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-firestore.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-firestore.js.map

      /***/

    },

    /***/
    "./node_modules/@firebase/firestore/dist/index.esm.js":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/firestore/dist/index.esm.js ***!
      \************************************************************/

    /*! exports provided: __PRIVATE_registerFirestore */

    /***/
    function node_modulesFirebaseFirestoreDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__PRIVATE_registerFirestore", function () {
        return Ua;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.esm.js");
      /* harmony import */


      var _firebase_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/logger */
      "./node_modules/@firebase/logger/dist/index.esm.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.esm.js");
      /* harmony import */


      var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @firebase/webchannel-wrapper */
      "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.esm.js");
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Converts a Base64 encoded string to a binary string. */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var b = {
        // Causes are copied from:
        // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

        /** Not an error; returned on success. */
        OK: "ok",

        /** The operation was cancelled (typically by the caller). */
        CANCELLED: "cancelled",

        /** Unknown error or an error from a different error domain. */
        UNKNOWN: "unknown",

        /**
         * Client specified an invalid argument. Note that this differs from
         * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
         * problematic regardless of the state of the system (e.g., a malformed file
         * name).
         */
        INVALID_ARGUMENT: "invalid-argument",

        /**
         * Deadline expired before operation could complete. For operations that
         * change the state of the system, this error may be returned even if the
         * operation has completed successfully. For example, a successful response
         * from a server could have been delayed long enough for the deadline to
         * expire.
         */
        DEADLINE_EXCEEDED: "deadline-exceeded",

        /** Some requested entity (e.g., file or directory) was not found. */
        NOT_FOUND: "not-found",

        /**
         * Some entity that we attempted to create (e.g., file or directory) already
         * exists.
         */
        ALREADY_EXISTS: "already-exists",

        /**
         * The caller does not have permission to execute the specified operation.
         * PERMISSION_DENIED must not be used for rejections caused by exhausting
         * some resource (use RESOURCE_EXHAUSTED instead for those errors).
         * PERMISSION_DENIED must not be used if the caller can not be identified
         * (use UNAUTHENTICATED instead for those errors).
         */
        PERMISSION_DENIED: "permission-denied",

        /**
         * The request does not have valid authentication credentials for the
         * operation.
         */
        UNAUTHENTICATED: "unauthenticated",

        /**
         * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
         * entire file system is out of space.
         */
        RESOURCE_EXHAUSTED: "resource-exhausted",

        /**
         * Operation was rejected because the system is not in a state required for
         * the operation's execution. For example, directory to be deleted may be
         * non-empty, an rmdir operation is applied to a non-directory, etc.
         *
         * A litmus test that may help a service implementor in deciding
         * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
         *  (a) Use UNAVAILABLE if the client can retry just the failing call.
         *  (b) Use ABORTED if the client should retry at a higher-level
         *      (e.g., restarting a read-modify-write sequence).
         *  (c) Use FAILED_PRECONDITION if the client should not retry until
         *      the system state has been explicitly fixed. E.g., if an "rmdir"
         *      fails because the directory is non-empty, FAILED_PRECONDITION
         *      should be returned since the client should not retry unless
         *      they have first fixed up the directory by deleting files from it.
         *  (d) Use FAILED_PRECONDITION if the client performs conditional
         *      REST Get/Update/Delete on a resource and the resource on the
         *      server does not match the condition. E.g., conflicting
         *      read-modify-write on the same resource.
         */
        FAILED_PRECONDITION: "failed-precondition",

        /**
         * The operation was aborted, typically due to a concurrency issue like
         * sequencer check failures, transaction aborts, etc.
         *
         * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
         * and UNAVAILABLE.
         */
        ABORTED: "aborted",

        /**
         * Operation was attempted past the valid range. E.g., seeking or reading
         * past end of file.
         *
         * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
         * if the system state changes. For example, a 32-bit file system will
         * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
         * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
         * an offset past the current file size.
         *
         * There is a fair bit of overlap between FAILED_PRECONDITION and
         * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
         * when it applies so that callers who are iterating through a space can
         * easily look for an OUT_OF_RANGE error to detect when they are done.
         */
        OUT_OF_RANGE: "out-of-range",

        /** Operation is not implemented or not supported/enabled in this service. */
        UNIMPLEMENTED: "unimplemented",

        /**
         * Internal errors. Means some invariants expected by underlying System has
         * been broken. If you see one of these errors, Something is very broken.
         */
        INTERNAL: "internal",

        /**
         * The service is currently unavailable. This is a most likely a transient
         * condition and may be corrected by retrying with a backoff.
         *
         * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
         * and UNAVAILABLE.
         */
        UNAVAILABLE: "unavailable",

        /** Unrecoverable data loss or corruption. */
        DATA_LOSS: "data-loss"
      },
          I =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
          // class and so inheritance does not work correctly. We could alternatively
          // do the same "back-door inheritance" trick that FirebaseError does.
          r.toString = function () {
            return r.name + ": [code=" + r.code + "]: " + r.message;
          }, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(Error),
          E = new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]("@firebase/firestore");
      /** An error returned by a Firestore operation. */
      // Helper methods are needed because variables can't be exported as read/write


      function _() {
        return E.logLevel;
      }
      /**
       * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
       *
       * @param logLevel
       *   The verbosity you set for activity and error logging. Can be any of
       *   the following values:
       *
       *   <ul>
       *     <li>`debug` for the most verbose logging level, primarily for
       *     debugging.</li>
       *     <li>`error` to log errors only.</li>
       *     <li><code>`silent` to turn off logging.</li>
       *   </ul>
       */


      function T(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        if (E.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG) {
          var i = e.map(D);
          E.debug.apply(E, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["Firestore (8.0.1): " + t], i));
        }
      }

      function N(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        if (E.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].ERROR) {
          var i = e.map(D);
          E.error.apply(E, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["Firestore (8.0.1): " + t], i));
        }
      }

      function A(t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        if (E.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].WARN) {
          var i = e.map(D);
          E.warn.apply(E, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["Firestore (8.0.1): " + t], i));
        }
      }
      /**
       * Converts an additional log parameter to a string representation.
       */


      function D(t) {
        if ("string" == typeof t) return t;

        try {
          return e = t, JSON.stringify(e);
        } catch (e) {
          // Converting to JSON failed, just log the object directly
          return t;
        }
        /**
        * @license
        * Copyright 2020 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /** Formats an object as a JSON string, suitable for logging. */


        var e;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Unconditionally fails, throwing an Error with the given message.
       * Messages are stripped in production builds.
       *
       * Returns `never` and can be used in expressions:
       * @example
       * let futureVar = fail('not implemented yet');
       */


      function S(t) {
        void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
        // exception is swallowed.

        var e = "FIRESTORE (8.0.1) INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
        // that cannot be handled by the user. (Also it would create a circular
        // dependency between the error and assert modules which doesn't work.)

        throw N(e), new Error(e)
        /**
        * Fails if the given assertion condition is false, throwing an Error with the
        * given message if it did.
        *
        * Messages are stripped in production builds.
        */
        ;
      }

      function x(t, e) {
        t || S();
      }
      /**
       * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
       * instance of `T` before casting.
       */


      function k(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e) {
        return t;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Generates `nBytes` of random bytes.
       *
       * If `nBytes < 0` , an error will be thrown.
       */


      function O(t) {
        // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
        var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "undefined" != typeof self && (self.crypto || self.msCrypto),
            n = new Uint8Array(t);
        if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);else // Falls back to Math.random
          for (var r = 0; r < t; r++) {
            n[r] = Math.floor(256 * Math.random());
          }
        return n;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var P =
      /** @class */
      function () {
        function t() {}

        return t.t = function () {
          for ( // Alphanumeric characters
          var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
          ; n.length < 20;) {
            for (var r = O(40), i = 0; i < r.length; ++i) {
              // Only accept values that are [0, maxMultiple), this ensures they can
              // be evenly mapped to indices of `chars` via a modulo operation.
              n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
            }
          }

          return n;
        }, t;
      }();

      function L(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }
      /** Helper to compare arrays using isEqual(). */


      function V(t, e, n) {
        return t.length === e.length && t.every(function (t, r) {
          return n(t, e[r]);
        });
      }
      /**
       * Returns the immediate lexicographically-following string. This is useful to
       * construct an inclusive range for indexeddb iterators.
       */


      function R(t) {
        // Return the input string, with an additional NUL byte appended.
        return t + "\0";
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Immutable class that represents a "proto" byte string.
       *
       * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
       * sent on the wire. This class abstracts away this differentiation by holding
       * the proto byte string in a common class that must be converted into a string
       * before being sent as a proto.
       */


      var U =
      /** @class */
      function () {
        function t(t) {
          this.i = t;
        }

        return t.fromBase64String = function (e) {
          return new t(atob(e));
        }, t.fromUint8Array = function (e) {
          return new t(
          /**
          * Helper function to convert an Uint8array to a binary string.
          */
          function (t) {
            for (var e = "", n = 0; n < t.length; ++n) {
              e += String.fromCharCode(t[n]);
            }

            return e;
          }(e));
        }, t.prototype.toBase64 = function () {
          return t = this.i, btoa(t);
          /** Converts a binary string to a Base64 encoded string. */

          var t;
          /** True if and only if the Base64 conversion functions are available. */
        }, t.prototype.toUint8Array = function () {
          return function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) {
              e[n] = t.charCodeAt(n);
            }

            return e;
          }(this.i);
        }, t.prototype.o = function () {
          return 2 * this.i.length;
        }, t.prototype.u = function (t) {
          return L(this.i, t.i);
        }, t.prototype.isEqual = function (t) {
          return this.i === t.i;
        }, t;
      }();

      U.h = new U("");

      var C =
      /** @class */
      function () {
        function t(t) {
          this.l = t;
        }
        /**
         * Creates a new `Bytes` object from the given Base64 string, converting it to
         * bytes.
         *
         * @param base64 The Base64 string used to create the `Bytes` object.
         */


        return t.fromBase64String = function (e) {
          try {
            return new t(U.fromBase64String(e));
          } catch (e) {
            throw new I(b.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e);
          }
        },
        /**
         * Creates a new `Bytes` object from the given Uint8Array.
         *
         * @param array The Uint8Array used to create the `Bytes` object.
         */
        t.fromUint8Array = function (e) {
          return new t(U.fromUint8Array(e));
        },
        /**
         * Returns the underlying bytes as a Base64-encoded string.
         *
         * @return The Base64-encoded string created from the `Bytes` object.
         */
        t.prototype.toBase64 = function () {
          return this.l.toBase64();
        },
        /**
         * Returns the underlying bytes in a new `Uint8Array`.
         *
         * @return The Uint8Array created from the `Bytes` object.
         */
        t.prototype.toUint8Array = function () {
          return this.l.toUint8Array();
        },
        /**
         * Returns a string representation of the `Bytes` object.
         *
         * @return A string representation of the `Bytes` object.
         */
        t.prototype.toString = function () {
          return "Bytes(base64: " + this.toBase64() + ")";
        },
        /**
         * Returns true if this `Bytes` object is equal to the provided one.
         *
         * @param other The `Bytes` object to compare against.
         * @return true if this `Bytes` object is equal to the provided one.
         */
        t.prototype.isEqual = function (t) {
          return this.l.isEqual(t.l);
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Helper function to assert Uint8Array is available at runtime. */


      function q() {
        if ("undefined" == typeof Uint8Array) throw new I(b.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
      }
      /** Helper function to assert Base64 functions are available at runtime. */


      function M() {
        if ("undefined" == typeof atob) throw new I(b.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
      }
      /**
       * Immutable class holding a blob (binary data).
       *
       * This class is directly exposed in the public API. It extends the Bytes class
       * of the firestore-exp API to support `instanceof Bytes` checks during user
       * data conversion.
       *
       * Note that while you can't hide the constructor in JavaScript code, we are
       * using the hack above to make sure no-one outside this module can call it.
       */


      var F =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.fromBase64String = function (t) {
          M();

          try {
            return new n(U.fromBase64String(t));
          } catch (t) {
            throw new I(b.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
          }
        }, n.fromUint8Array = function (t) {
          return q(), new n(U.fromUint8Array(t));
        }, n.prototype.toBase64 = function () {
          return M(), e.prototype.toBase64.call(this);
        }, n.prototype.toUint8Array = function () {
          return q(), e.prototype.toUint8Array.call(this);
        }, n.prototype.toString = function () {
          return "Blob(base64: " + this.toBase64() + ")";
        }, n;
      }(C),
          B =
      /**
           * Constructs a DatabaseInfo using the provided host, databaseId and
           * persistenceKey.
           *
           * @param databaseId The database to use.
           * @param persistenceKey A unique identifier for this Firestore's local
           * storage (used in conjunction with the databaseId).
           * @param host The Firestore backend host to connect to.
           * @param ssl Whether to use SSL when connecting.
           * @param forceLongPolling Whether to use the forceLongPolling option
           * when using WebChannel as the network transport.
           * @param autoDetectLongPolling Whether to use the detectBufferingProxy
           * option when using WebChannel as the network transport.
           */
      function B(t, e, n, r, i, o) {
        this._ = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, this.T = o;
      },
          j =
      /** @class */
      function () {
        function t(t, e) {
          this.projectId = t, this.database = e || "(default)";
        }

        return Object.defineProperty(t.prototype, "I", {
          get: function get() {
            return "(default)" === this.database;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (e) {
          return e instanceof t && e.projectId === this.projectId && e.database === this.database;
        }, t.prototype.u = function (t) {
          return L(this.projectId, t.projectId) || L(this.database, t.database);
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function z(t) {
        var e = 0;

        for (var n in t) {
          Object.prototype.hasOwnProperty.call(t, n) && e++;
        }

        return e;
      }

      function G(t, e) {
        for (var n in t) {
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
        }
      }

      function K(t) {
        for (var e in t) {
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        }

        return !0;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A map implementation that uses objects as keys. Objects must have an
       * associated equals function and must be immutable. Entries in the map are
       * stored together with the key being produced from the mapKeyFn. This map
       * automatically handles collisions of keys.
       */


      var Q =
      /** @class */
      function () {
        function t(t, e) {
          this.m = t, this.A = e,
          /**
               * The inner map for a key -> value pair. Due to the possibility of
               * collisions we keep a list of entries that we do a linear search through
               * to find an actual match. Note that collisions should be rare, so we still
               * expect near constant time lookups in practice.
               */
          this.R = {}
          /** Get a value for this key, or undefined if it does not exist. */
          ;
        }

        return t.prototype.get = function (t) {
          var e = this.m(t),
              n = this.R[e];
          if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r],
                u = o[0],
                s = o[1];
            if (this.A(u, t)) return s;
          }
        }, t.prototype.has = function (t) {
          return void 0 !== this.get(t);
        },
        /** Put this key and value in the map. */
        t.prototype.set = function (t, e) {
          var n = this.m(t),
              r = this.R[n];

          if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) {
              if (this.A(r[i][0], t)) return void (r[i] = [t, e]);
            }

            r.push([t, e]);
          } else this.R[n] = [[t, e]];
        },
        /**
         * Remove this key from the map. Returns a boolean if anything was deleted.
         */
        t.prototype["delete"] = function (t) {
          var e = this.m(t),
              n = this.R[e];
          if (void 0 === n) return !1;

          for (var r = 0; r < n.length; r++) {
            if (this.A(n[r][0], t)) return 1 === n.length ? delete this.R[e] : n.splice(r, 1), !0;
          }

          return !1;
        }, t.prototype.forEach = function (t) {
          G(this.R, function (e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                  u = o[0],
                  s = o[1];
              t(u, s);
            }
          });
        }, t.prototype.P = function () {
          return K(this.R);
        }, t;
      }(),
          W =
      /** @class */
      function () {
        /**
         * Creates a new timestamp.
         *
         * @param seconds The number of seconds of UTC time since Unix epoch
         *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
         *     9999-12-31T23:59:59Z inclusive.
         * @param nanoseconds The non-negative fractions of a second at nanosecond
         *     resolution. Negative second values with fractions must still have
         *     non-negative nanoseconds values that count forward in time. Must be
         *     from 0 to 999,999,999 inclusive.
         */
        function t(t, e) {
          if (this.seconds = t, this.nanoseconds = e, e < 0) throw new I(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
          if (e >= 1e9) throw new I(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
          if (t < -62135596800) throw new I(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

          if (t >= 253402300800) throw new I(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        }
        /**
         * Creates a new timestamp with the current date, with millisecond precision.
         *
         * @return a new timestamp representing the current date.
         */


        return t.now = function () {
          return t.fromMillis(Date.now());
        },
        /**
         * Creates a new timestamp from the given date.
         *
         * @param date The date to initialize the `Timestamp` from.
         * @return A new `Timestamp` representing the same point in time as the given
         *     date.
         */
        t.fromDate = function (e) {
          return t.fromMillis(e.getTime());
        },
        /**
         * Creates a new timestamp from the given number of milliseconds.
         *
         * @param milliseconds Number of milliseconds since Unix epoch
         *     1970-01-01T00:00:00Z.
         * @return A new `Timestamp` representing the same point in time as the given
         *     number of milliseconds.
         */
        t.fromMillis = function (e) {
          var n = Math.floor(e / 1e3);
          return new t(n, 1e6 * (e - 1e3 * n));
        },
        /**
         * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
         * a loss of precision since `Date` objects only support millisecond precision.
         *
         * @return JavaScript `Date` object representing the same point in time as
         *     this `Timestamp`, with millisecond precision.
         */
        t.prototype.toDate = function () {
          return new Date(this.toMillis());
        },
        /**
         * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
         * epoch). This operation causes a loss of precision.
         *
         * @return The point in time corresponding to this timestamp, represented as
         *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
         */
        t.prototype.toMillis = function () {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }, t.prototype.g = function (t) {
          return this.seconds === t.seconds ? L(this.nanoseconds, t.nanoseconds) : L(this.seconds, t.seconds);
        },
        /**
         * Returns true if this `Timestamp` is equal to the provided one.
         *
         * @param other The `Timestamp` to compare against.
         * @return true if this `Timestamp` is equal to the provided one.
         */
        t.prototype.isEqual = function (t) {
          return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
        }, t.prototype.toString = function () {
          return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
        }, t.prototype.toJSON = function () {
          return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
          };
        },
        /**
         * Converts this object to a primitive string, which allows Timestamp objects to be compared
         * using the `>`, `<=`, `>=` and `>` operators.
         */
        t.prototype.valueOf = function () {
          // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
          // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
          // with zeroes to be a consistent length. Strings with this format then have a lexiographical
          // ordering that matches the expected ordering. The <seconds> translation is done to avoid
          // having a leading negative sign (i.e. a leading '-' character) in its string representation,
          // which would affect its lexiographical ordering.
          var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

          return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
        }, t;
      }(),
          H =
      /** @class */
      function () {
        function t(t) {
          this.timestamp = t;
        }

        return t.V = function (e) {
          return new t(e);
        }, t.min = function () {
          return new t(new W(0, 0));
        }, t.prototype.u = function (t) {
          return this.timestamp.g(t.timestamp);
        }, t.prototype.isEqual = function (t) {
          return this.timestamp.isEqual(t.timestamp);
        },
        /** Returns a number representation of the version for use in spec tests. */
        t.prototype.p = function () {
          // Convert to microseconds.
          return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
        }, t.prototype.toString = function () {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }, t.prototype.v = function () {
          return this.timestamp;
        }, t;
      }(),
          Y =
      /** @class */
      function () {
        function t(t, e, n) {
          void 0 === e ? e = 0 : e > t.length && S(), void 0 === n ? n = t.length - e : n > t.length - e && S(), this.segments = t, this.offset = e, this.S = n;
        }

        return Object.defineProperty(t.prototype, "length", {
          get: function get() {
            return this.S;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (e) {
          return 0 === t.D(this, e);
        }, t.prototype.child = function (e) {
          var n = this.segments.slice(this.offset, this.limit());
          return e instanceof t ? e.forEach(function (t) {
            n.push(t);
          }) : n.push(e), this.C(n);
        },
        /** The index of one past the last segment of the path. */
        t.prototype.limit = function () {
          return this.offset + this.length;
        }, t.prototype.N = function (t) {
          return t = void 0 === t ? 1 : t, this.C(this.segments, this.offset + t, this.length - t);
        }, t.prototype.F = function () {
          return this.C(this.segments, this.offset, this.length - 1);
        }, t.prototype.O = function () {
          return this.segments[this.offset];
        }, t.prototype.k = function () {
          return this.get(this.length - 1);
        }, t.prototype.get = function (t) {
          return this.segments[this.offset + t];
        }, t.prototype.P = function () {
          return 0 === this.length;
        }, t.prototype.M = function (t) {
          if (t.length < this.length) return !1;

          for (var e = 0; e < this.length; e++) {
            if (this.get(e) !== t.get(e)) return !1;
          }

          return !0;
        }, t.prototype.$ = function (t) {
          if (this.length + 1 !== t.length) return !1;

          for (var e = 0; e < this.length; e++) {
            if (this.get(e) !== t.get(e)) return !1;
          }

          return !0;
        }, t.prototype.forEach = function (t) {
          for (var e = this.offset, n = this.limit(); e < n; e++) {
            t(this.segments[e]);
          }
        }, t.prototype.L = function () {
          return this.segments.slice(this.offset, this.limit());
        }, t.D = function (t, e) {
          for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r),
                o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
          }

          return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
        }, t;
      }(),
          J =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.C = function (t, e, r) {
          return new n(t, e, r);
        }, n.prototype.B = function () {
          // NOTE: The client is ignorant of any path segments containing escape
          // sequences (e.g. __id123__) and just passes them through raw (they exist
          // for legacy reasons and should not be used frequently).
          return this.L().join("/");
        }, n.prototype.toString = function () {
          return this.B();
        },
        /**
         * Creates a resource path from the given slash-delimited string. If multiple
         * arguments are provided, all components are combined. Leading and trailing
         * slashes from all components are ignored.
         */
        n.q = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          } // NOTE: The client is ignorant of any path segments containing escape
          // sequences (e.g. __id123__) and just passes them through raw (they exist
          // for legacy reasons and should not be used frequently).


          for (var r = [], i = 0, o = t; i < o.length; i++) {
            var u = o[i];
            if (u.indexOf("//") >= 0) throw new I(b.INVALID_ARGUMENT, "Invalid segment (" + u + "). Paths must not contain // in them."); // Strip leading and traling slashed.

            r.push.apply(r, u.split("/").filter(function (t) {
              return t.length > 0;
            }));
          }

          return new n(r);
        }, n.U = function () {
          return new n([]);
        }, n;
      }(Y),
          X = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
          Z =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.C = function (t, e, r) {
          return new n(t, e, r);
        },
        /**
         * Returns true if the string could be used as a segment in a field path
         * without escaping.
         */
        n.K = function (t) {
          return X.test(t);
        }, n.prototype.B = function () {
          return this.L().map(function (t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.K(t) || (t = "`" + t + "`"), t;
          }).join(".");
        }, n.prototype.toString = function () {
          return this.B();
        },
        /**
         * Returns true if this field references the key of a document.
         */
        n.prototype.W = function () {
          return 1 === this.length && "__name__" === this.get(0);
        },
        /**
         * The field designating the key of a document.
         */
        n.j = function () {
          return new n(["__name__"]);
        },
        /**
         * Parses a field string from the given server-formatted string.
         *
         * - Splitting the empty string is not allowed (for now at least).
         * - Empty segments within the string (e.g. if there are two consecutive
         *   separators) are not allowed.
         *
         * TODO(b/37244157): we should make this more strict. Right now, it allows
         * non-identifier path components, even if they aren't escaped.
         */
        n.G = function (t) {
          for (var e = [], r = "", i = 0, o = function o() {
            if (0 === r.length) throw new I(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
          }, u = !1; i < t.length;) {
            var s = t[i];

            if ("\\" === s) {
              if (i + 1 === t.length) throw new I(b.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
              var a = t[i + 1];
              if ("\\" !== a && "." !== a && "`" !== a) throw new I(b.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
              r += a, i += 2;
            } else "`" === s ? (u = !u, i++) : "." !== s || u ? (r += s, i++) : (o(), i++);
          }

          if (o(), u) throw new I(b.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
          return new n(e);
        }, n.U = function () {
          return new n([]);
        }, n;
      }(Y),
          $ =
      /** @class */
      function () {
        function t(t) {
          this.path = t;
        }

        return t.H = function (e) {
          return new t(J.q(e));
        }, t.Y = function (e) {
          return new t(J.q(e).N(5));
        },
        /** Returns true if the document is in the specified collectionId. */
        t.prototype.J = function (t) {
          return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
        }, t.prototype.isEqual = function (t) {
          return null !== t && 0 === J.D(this.path, t.path);
        }, t.prototype.toString = function () {
          return this.path.toString();
        }, t.D = function (t, e) {
          return J.D(t.path, e.path);
        }, t.X = function (t) {
          return t.length % 2 == 0;
        },
        /**
         * Creates and returns a new document key with the given segments.
         *
         * @param segments The segments of the path to the document
         * @return A new instance of DocumentKey
         */
        t.Z = function (e) {
          return new t(new J(e.slice()));
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).

      /**
       * A `Timestamp` represents a point in time independent of any time zone or
       * calendar, represented as seconds and fractions of seconds at nanosecond
       * resolution in UTC Epoch time.
       *
       * It is encoded using the Proleptic Gregorian Calendar which extends the
       * Gregorian calendar backwards to year one. It is encoded assuming all minutes
       * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
       * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
       * 9999-12-31T23:59:59.999999999Z.
       *
       * @see https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns whether a variable is either undefined or null.
       */


      function tt(t) {
        return null == t;
      }
      /** Returns whether the value represents -0. */


      function et(t) {
        // Detect if the value is -0.0. Based on polyfill from
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
        return 0 === t && 1 / t == -1 / 0;
      }
      /**
       * Returns whether a value is an integer and in the safe integer range
       * @param value The value to test for being an integer and in the safe range
       */


      function nt(t) {
        return "number" == typeof t && Number.isInteger(t) && !et(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Visible for testing


      var rt = function rt(t, e, n, r, i, o, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = u, this.tt = null;
      };
      /**
       * Initializes a Target with a path and optional additional query constraints.
       * Path must currently be empty if this is a collection group query.
       *
       * NOTE: you should always construct `Target` from `Query.toTarget` instead of
       * using this factory method, because `Query` provides an implicit `orderBy`
       * property.
       */


      function it(t, e, n, r, i, o, u) {
        return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), new rt(t, e, n, r, i, o, u);
      }

      function ot(t) {
        var e = k(t);

        if (null === e.tt) {
          var n = e.path.B();
          null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) {
            return function (t) {
              // TODO(b/29183165): Technically, this won't be unique if two values have
              // the same description, such as the int 3 and the string "3". So we should
              // add the types in here somehow, too.
              return t.field.B() + t.op.toString() + Jt(t.value);
            }(t);
          }).join(","), n += "|ob:", n += e.orderBy.map(function (t) {
            return (e = t).field.B() + e.dir;
            var e;
          }).join(","), tt(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += er(e.startAt)), e.endAt && (n += "|ub:", n += er(e.endAt)), e.tt = n;
        }

        return e.tt;
      }

      function ut(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;

        for (var n = 0; n < t.orderBy.length; n++) {
          if (!ur(t.orderBy[n], e.orderBy[n])) return !1;
        }

        if (t.filters.length !== e.filters.length) return !1;

        for (var r = 0; r < t.filters.length; r++) {
          if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !Qt(i.value, o.value)) return !1;
        }

        var i, o;
        return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!rr(t.startAt, e.startAt) && rr(t.endAt, e.endAt);
      }

      function st(t) {
        return $.X(t.path) && null === t.collectionGroup && 0 === t.filters.length;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An immutable set of metadata that the local store tracks for each target.
       */


      var at,
          ct,
          ht =
      /** @class */
      function () {
        function t(
        /** The target being listened to. */
        t,
        /**
         * The target ID to which the target corresponds; Assigned by the
         * LocalStore for user listens and by the SyncEngine for limbo watches.
         */
        e,
        /** The purpose of the target. */
        n,
        /**
         * The sequence number of the last transaction during which this target data
         * was modified.
         */
        r,
        /** The latest snapshot version seen for this target. */
        i
        /**
         * The maximum snapshot version at which the associated view
         * contained no limbo documents.
         */
        , o
        /**
         * An opaque, server-assigned token that allows watching a target to be
         * resumed after disconnecting without retransmitting all the data that
         * matches the target. The resume token essentially identifies a point in
         * time from which the server should resume sending results.
         */
        , u) {
          void 0 === i && (i = H.min()), void 0 === o && (o = H.min()), void 0 === u && (u = U.h), this.target = t, this.targetId = e, this.et = n, this.sequenceNumber = r, this.nt = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = u;
        }
        /** Creates a new target data instance with an updated sequence number. */


        return t.prototype.st = function (e) {
          return new t(this.target, this.targetId, this.et, e, this.nt, this.lastLimboFreeSnapshotVersion, this.resumeToken);
        },
        /**
         * Creates a new target data instance with an updated resume token and
         * snapshot version.
         */
        t.prototype.it = function (e, n) {
          return new t(this.target, this.targetId, this.et, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
        },
        /**
         * Creates a new target data instance with an updated last limbo free
         * snapshot version number.
         */
        t.prototype.rt = function (e) {
          return new t(this.target, this.targetId, this.et, this.sequenceNumber, this.nt, e, this.resumeToken);
        }, t;
      }(),
          ft = // TODO(b/33078163): just use simplest form of existence filter for now
      function ft(t) {
        this.count = t;
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Determines whether an error code represents a permanent error when received
       * in response to a non-write operation.
       *
       * See isPermanentWriteError for classifying write errors.
       */


      function lt(t) {
        switch (t) {
          case b.OK:
            return S();

          case b.CANCELLED:
          case b.UNKNOWN:
          case b.DEADLINE_EXCEEDED:
          case b.RESOURCE_EXHAUSTED:
          case b.INTERNAL:
          case b.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
          // to retry with new credentials which will happen automatically.

          case b.UNAUTHENTICATED:
            return !1;

          case b.INVALID_ARGUMENT:
          case b.NOT_FOUND:
          case b.ALREADY_EXISTS:
          case b.PERMISSION_DENIED:
          case b.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
          // the context and should handled individually by the calling code.
          // See https://cloud.google.com/apis/design/errors.

          case b.ABORTED:
          case b.OUT_OF_RANGE:
          case b.UNIMPLEMENTED:
          case b.DATA_LOSS:
            return !0;

          default:
            return S();
        }
      }
      /**
       * Determines whether an error code represents a permanent error when received
       * in response to a write operation.
       *
       * Write operations must be handled specially because as of b/119437764, ABORTED
       * errors on the write stream should be retried too (even though ABORTED errors
       * are not generally retryable).
       *
       * Note that during the initial handshake on the write stream an ABORTED error
       * signals that we should discard our stream token (i.e. it is permanent). This
       * means a handshake error should be classified with isPermanentError, above.
       */

      /**
       * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
       * are not the same as HTTP status codes.
       *
       * @returns The Code equivalent to the given GRPC status code. Fails if there
       *     is no match.
       */


      function pt(t) {
        if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
          // to send invalid proto messages) we may get an error with no GRPC code.
          return N("GRPC error has no .code"), b.UNKNOWN;

        switch (t) {
          case at.OK:
            return b.OK;

          case at.CANCELLED:
            return b.CANCELLED;

          case at.UNKNOWN:
            return b.UNKNOWN;

          case at.DEADLINE_EXCEEDED:
            return b.DEADLINE_EXCEEDED;

          case at.RESOURCE_EXHAUSTED:
            return b.RESOURCE_EXHAUSTED;

          case at.INTERNAL:
            return b.INTERNAL;

          case at.UNAVAILABLE:
            return b.UNAVAILABLE;

          case at.UNAUTHENTICATED:
            return b.UNAUTHENTICATED;

          case at.INVALID_ARGUMENT:
            return b.INVALID_ARGUMENT;

          case at.NOT_FOUND:
            return b.NOT_FOUND;

          case at.ALREADY_EXISTS:
            return b.ALREADY_EXISTS;

          case at.PERMISSION_DENIED:
            return b.PERMISSION_DENIED;

          case at.FAILED_PRECONDITION:
            return b.FAILED_PRECONDITION;

          case at.ABORTED:
            return b.ABORTED;

          case at.OUT_OF_RANGE:
            return b.OUT_OF_RANGE;

          case at.UNIMPLEMENTED:
            return b.UNIMPLEMENTED;

          case at.DATA_LOSS:
            return b.DATA_LOSS;

          default:
            return S();
        }
      }
      /**
       * Converts an HTTP response's error status to the equivalent error code.
       *
       * @param status An HTTP error response status ("FAILED_PRECONDITION",
       * "UNKNOWN", etc.)
       * @returns The equivalent Code. Non-matching responses are mapped to
       *     Code.UNKNOWN.
       */


      (ct = at || (at = {}))[ct.OK = 0] = "OK", ct[ct.CANCELLED = 1] = "CANCELLED", ct[ct.UNKNOWN = 2] = "UNKNOWN", ct[ct.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ct[ct.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ct[ct.NOT_FOUND = 5] = "NOT_FOUND", ct[ct.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ct[ct.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ct[ct.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ct[ct.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ct[ct.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ct[ct.ABORTED = 10] = "ABORTED", ct[ct.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ct[ct.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ct[ct.INTERNAL = 13] = "INTERNAL", ct[ct.UNAVAILABLE = 14] = "UNAVAILABLE", ct[ct.DATA_LOSS = 15] = "DATA_LOSS";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // An immutable sorted map implementation, based on a Left-leaning Red-Black
      // tree.

      var dt =
      /** @class */
      function () {
        function t(t, e) {
          this.D = t, this.root = e || yt.EMPTY;
        } // Returns a copy of the map, with the specified key/value added or replaced.


        return t.prototype.ot = function (e, n) {
          return new t(this.D, this.root.ot(e, n, this.D).copy(null, null, yt.at, null, null));
        }, // Returns a copy of the map, with the specified key removed.
        t.prototype.remove = function (e) {
          return new t(this.D, this.root.remove(e, this.D).copy(null, null, yt.at, null, null));
        }, // Returns the value of the node with the given key, or null.
        t.prototype.get = function (t) {
          for (var e = this.root; !e.P();) {
            var n = this.D(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
          }

          return null;
        }, // Returns the index of the element in this sorted map, or -1 if it doesn't
        // exist.
        t.prototype.indexOf = function (t) {
          for ( // Number of nodes that were pruned when descending right
          var e = 0, n = this.root; !n.P();) {
            var r = this.D(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
          } // Node not found


          return -1;
        }, t.prototype.P = function () {
          return this.root.P();
        }, Object.defineProperty(t.prototype, "size", {
          // Returns the total number of nodes in the map.
          get: function get() {
            return this.root.size;
          },
          enumerable: !1,
          configurable: !0
        }), // Returns the minimum key in the map.
        t.prototype.ct = function () {
          return this.root.ct();
        }, // Returns the maximum key in the map.
        t.prototype.ut = function () {
          return this.root.ut();
        }, // Traverses the map in key order and calls the specified action function
        // for each key/value pair. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.ht = function (t) {
          return this.root.ht(t);
        }, t.prototype.forEach = function (t) {
          this.ht(function (e, n) {
            return t(e, n), !1;
          });
        }, t.prototype.toString = function () {
          var t = [];
          return this.ht(function (e, n) {
            return t.push(e + ":" + n), !1;
          }), "{" + t.join(", ") + "}";
        }, // Traverses the map in reverse key order and calls the specified action
        // function for each key/value pair. If action returns true, traversal is
        // aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.lt = function (t) {
          return this.root.lt(t);
        }, // Returns an iterator over the SortedMap.
        t.prototype._t = function () {
          return new vt(this.root, null, this.D, !1);
        }, t.prototype.ft = function (t) {
          return new vt(this.root, t, this.D, !1);
        }, t.prototype.dt = function () {
          return new vt(this.root, null, this.D, !0);
        }, t.prototype.wt = function (t) {
          return new vt(this.root, t, this.D, !0);
        }, t;
      }(),
          vt =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.Et = r, this.Tt = [];

          for (var i = 1; !t.P();) {
            if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
            r && (i *= -1), i < 0) // This node is less than our start key. ignore it
              t = this.Et ? t.left : t.right;else {
              if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Tt.push(t);
                break;
              } // This node is greater than our start key, add it to the stack and move
              // to the next one


              this.Tt.push(t), t = this.Et ? t.right : t.left;
            }
          }
        }

        return t.prototype.It = function () {
          var t = this.Tt.pop(),
              e = {
            key: t.key,
            value: t.value
          };
          if (this.Et) for (t = t.left; !t.P();) {
            this.Tt.push(t), t = t.right;
          } else for (t = t.right; !t.P();) {
            this.Tt.push(t), t = t.left;
          }
          return e;
        }, t.prototype.At = function () {
          return this.Tt.length > 0;
        }, t.prototype.Rt = function () {
          if (0 === this.Tt.length) return null;
          var t = this.Tt[this.Tt.length - 1];
          return {
            key: t.key,
            value: t.value
          };
        }, t;
      }(),
          yt =
      /** @class */
      function () {
        function t(e, n, r, i, o) {
          this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
        } // Returns a copy of the current node, optionally replacing pieces of it.


        return t.prototype.copy = function (e, n, r, i, o) {
          return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
        }, t.prototype.P = function () {
          return !1;
        }, // Traverses the tree in key order and calls the specified action function
        // for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.ht = function (t) {
          return this.left.ht(t) || t(this.key, this.value) || this.right.ht(t);
        }, // Traverses the tree in reverse key order and calls the specified action
        // function for each node. If action returns true, traversal is aborted.
        // Returns the first truthy value returned by action, or the last falsey
        // value returned by action.
        t.prototype.lt = function (t) {
          return this.right.lt(t) || t(this.key, this.value) || this.left.lt(t);
        }, // Returns the minimum node in the tree.
        t.prototype.min = function () {
          return this.left.P() ? this : this.left.min();
        }, // Returns the maximum key in the tree.
        t.prototype.ct = function () {
          return this.min().key;
        }, // Returns the maximum key in the tree.
        t.prototype.ut = function () {
          return this.right.P() ? this.key : this.right.ut();
        }, // Returns new tree, with the key/value added.
        t.prototype.ot = function (t, e, n) {
          var r = this,
              i = n(t, r.key);
          return (r = i < 0 ? r.copy(null, null, null, r.left.ot(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.ot(t, e, n))).Pt();
        }, t.prototype.gt = function () {
          if (this.left.P()) return t.EMPTY;
          var e = this;
          return e.left.yt() || e.left.left.yt() || (e = e.Vt()), (e = e.copy(null, null, null, e.left.gt(), null)).Pt();
        }, // Returns new tree, with the specified item removed.
        t.prototype.remove = function (e, n) {
          var r,
              i = this;
          if (n(e, i.key) < 0) i.left.P() || i.left.yt() || i.left.left.yt() || (i = i.Vt()), i = i.copy(null, null, null, i.left.remove(e, n), null);else {
            if (i.left.yt() && (i = i.bt()), i.right.P() || i.right.yt() || i.right.left.yt() || (i = i.vt()), 0 === n(e, i.key)) {
              if (i.right.P()) return t.EMPTY;
              r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.gt());
            }

            i = i.copy(null, null, null, null, i.right.remove(e, n));
          }
          return i.Pt();
        }, t.prototype.yt = function () {
          return this.color;
        }, // Returns new tree after performing any needed rotations.
        t.prototype.Pt = function () {
          var t = this;
          return t.right.yt() && !t.left.yt() && (t = t.St()), t.left.yt() && t.left.left.yt() && (t = t.bt()), t.left.yt() && t.right.yt() && (t = t.Dt()), t;
        }, t.prototype.Vt = function () {
          var t = this.Dt();
          return t.right.left.yt() && (t = (t = (t = t.copy(null, null, null, null, t.right.bt())).St()).Dt()), t;
        }, t.prototype.vt = function () {
          var t = this.Dt();
          return t.left.left.yt() && (t = (t = t.bt()).Dt()), t;
        }, t.prototype.St = function () {
          var e = this.copy(null, null, t.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }, t.prototype.bt = function () {
          var e = this.copy(null, null, t.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }, t.prototype.Dt = function () {
          var t = this.left.copy(null, null, !this.left.color, null, null),
              e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e);
        }, // For testing.
        t.prototype.Ct = function () {
          var t = this.Nt();
          return Math.pow(2, t) <= this.size + 1;
        }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
        // leaves is equal on both sides.  This function verifies that or asserts.
        t.prototype.Nt = function () {
          if (this.yt() && this.left.yt()) throw S();
          if (this.right.yt()) throw S();
          var t = this.left.Nt();
          if (t !== this.right.Nt()) throw S();
          return t + (this.yt() ? 0 : 1);
        }, t;
      }(); // end SortedMap
      // An iterator over an LLRBNode.
      // end LLRBNode
      // Empty node is shared between all LLRB trees.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      yt.EMPTY = null, yt.RED = !0, yt.at = !1, // end LLRBEmptyNode
      yt.EMPTY = new (
      /** @class */
      function () {
        function t() {
          this.size = 0;
        }

        return Object.defineProperty(t.prototype, "key", {
          get: function get() {
            throw S();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "value", {
          get: function get() {
            throw S();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "color", {
          get: function get() {
            throw S();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "left", {
          get: function get() {
            throw S();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "right", {
          get: function get() {
            throw S();
          },
          enumerable: !1,
          configurable: !0
        }), // Returns a copy of the current node.
        t.prototype.copy = function (t, e, n, r, i) {
          return this;
        }, // Returns a copy of the tree, with the specified key/value added.
        t.prototype.ot = function (t, e, n) {
          return new yt(t, e);
        }, // Returns a copy of the tree, with the specified key removed.
        t.prototype.remove = function (t, e) {
          return this;
        }, t.prototype.P = function () {
          return !0;
        }, t.prototype.ht = function (t) {
          return !1;
        }, t.prototype.lt = function (t) {
          return !1;
        }, t.prototype.ct = function () {
          return null;
        }, t.prototype.ut = function () {
          return null;
        }, t.prototype.yt = function () {
          return !1;
        }, // For testing.
        t.prototype.Ct = function () {
          return !0;
        }, t.prototype.Nt = function () {
          return 0;
        }, t;
      }())();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * SortedSet is an immutable (copy-on-write) collection that holds elements
       * in order specified by the provided comparator.
       *
       * NOTE: if provided comparator returns 0 for two elements, we consider them to
       * be equal!
       */

      var mt =
      /** @class */
      function () {
        function t(t) {
          this.D = t, this.data = new dt(this.D);
        }

        return t.prototype.has = function (t) {
          return null !== this.data.get(t);
        }, t.prototype.first = function () {
          return this.data.ct();
        }, t.prototype.last = function () {
          return this.data.ut();
        }, Object.defineProperty(t.prototype, "size", {
          get: function get() {
            return this.data.size;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.indexOf = function (t) {
          return this.data.indexOf(t);
        },
        /** Iterates elements in order defined by "comparator" */
        t.prototype.forEach = function (t) {
          this.data.ht(function (e, n) {
            return t(e), !1;
          });
        },
        /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
        t.prototype.xt = function (t, e) {
          for (var n = this.data.ft(t[0]); n.At();) {
            var r = n.It();
            if (this.D(r.key, t[1]) >= 0) return;
            e(r.key);
          }
        },
        /**
         * Iterates over `elem`s such that: start <= elem until false is returned.
         */
        t.prototype.Ft = function (t, e) {
          var n;

          for (n = void 0 !== e ? this.data.ft(e) : this.data._t(); n.At();) {
            if (!t(n.It().key)) return;
          }
        },
        /** Finds the least element greater than or equal to `elem`. */
        t.prototype.Ot = function (t) {
          var e = this.data.ft(t);
          return e.At() ? e.It().key : null;
        }, t.prototype._t = function () {
          return new gt(this.data._t());
        }, t.prototype.ft = function (t) {
          return new gt(this.data.ft(t));
        },
        /** Inserts or updates an element */
        t.prototype.add = function (t) {
          return this.copy(this.data.remove(t).ot(t, !0));
        },
        /** Deletes an element */
        t.prototype["delete"] = function (t) {
          return this.has(t) ? this.copy(this.data.remove(t)) : this;
        }, t.prototype.P = function () {
          return this.data.P();
        }, t.prototype.kt = function (t) {
          var e = this; // Make sure `result` always refers to the larger one of the two sets.

          return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
            e = e.add(t);
          }), e;
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;

          for (var n = this.data._t(), r = e.data._t(); n.At();) {
            var i = n.It().key,
                o = r.It().key;
            if (0 !== this.D(i, o)) return !1;
          }

          return !0;
        }, t.prototype.L = function () {
          var t = [];
          return this.forEach(function (e) {
            t.push(e);
          }), t;
        }, t.prototype.toString = function () {
          var t = [];
          return this.forEach(function (e) {
            return t.push(e);
          }), "SortedSet(" + t.toString() + ")";
        }, t.prototype.copy = function (e) {
          var n = new t(this.D);
          return n.data = e, n;
        }, t;
      }(),
          gt =
      /** @class */
      function () {
        function t(t) {
          this.Mt = t;
        }

        return t.prototype.It = function () {
          return this.Mt.It().key;
        }, t.prototype.At = function () {
          return this.Mt.At();
        }, t;
      }(),
          wt = new dt($.D);

      function bt() {
        return wt;
      }

      function It() {
        return bt();
      }

      var Et = new dt($.D);

      function _t() {
        return Et;
      }

      var Tt = new dt($.D),
          Nt = new mt($.D);

      function At() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        for (var n = Nt, r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          n = n.add(o);
        }

        return n;
      }

      var Dt = new mt(L);

      function St() {
        return Dt;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * DocumentSet is an immutable (copy-on-write) collection that holds documents
       * in order specified by the provided comparator. We always add a document key
       * comparator on top of what is provided to guarantee document equality based on
       * the key.
       */


      var xt =
      /** @class */
      function () {
        /** The default ordering is by key if the comparator is omitted */
        function t(t) {
          // We are adding document key comparator to the end as it's the only
          // guaranteed unique property of a document.
          this.D = t ? function (e, n) {
            return t(e, n) || $.D(e.key, n.key);
          } : function (t, e) {
            return $.D(t.key, e.key);
          }, this.$t = _t(), this.Lt = new dt(this.D)
          /**
          * Returns an empty copy of the existing DocumentSet, using the same
          * comparator.
          */
          ;
        }

        return t.Bt = function (e) {
          return new t(e.D);
        }, t.prototype.has = function (t) {
          return null != this.$t.get(t);
        }, t.prototype.get = function (t) {
          return this.$t.get(t);
        }, t.prototype.first = function () {
          return this.Lt.ct();
        }, t.prototype.last = function () {
          return this.Lt.ut();
        }, t.prototype.P = function () {
          return this.Lt.P();
        },
        /**
         * Returns the index of the provided key in the document set, or -1 if the
         * document key is not present in the set;
         */
        t.prototype.indexOf = function (t) {
          var e = this.$t.get(t);
          return e ? this.Lt.indexOf(e) : -1;
        }, Object.defineProperty(t.prototype, "size", {
          get: function get() {
            return this.Lt.size;
          },
          enumerable: !1,
          configurable: !0
        }),
        /** Iterates documents in order defined by "comparator" */
        t.prototype.forEach = function (t) {
          this.Lt.ht(function (e, n) {
            return t(e), !1;
          });
        },
        /** Inserts or updates a document with the same key */
        t.prototype.add = function (t) {
          // First remove the element if we have it.
          var e = this["delete"](t.key);
          return e.copy(e.$t.ot(t.key, t), e.Lt.ot(t, null));
        },
        /** Deletes a document with a given key */
        t.prototype["delete"] = function (t) {
          var e = this.get(t);
          return e ? this.copy(this.$t.remove(t), this.Lt.remove(e)) : this;
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;

          for (var n = this.Lt._t(), r = e.Lt._t(); n.At();) {
            var i = n.It().key,
                o = r.It().key;
            if (!i.isEqual(o)) return !1;
          }

          return !0;
        }, t.prototype.toString = function () {
          var t = [];
          return this.forEach(function (e) {
            t.push(e.toString());
          }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
        }, t.prototype.copy = function (e, n) {
          var r = new t();
          return r.D = this.D, r.$t = e, r.Lt = n, r;
        }, t;
      }(),
          kt =
      /** @class */
      function () {
        function t() {
          this.qt = new dt($.D);
        }

        return t.prototype.track = function (t) {
          var e = t.doc.key,
              n = this.qt.get(e);
          n ? // Merge the new change with the existing change.
          0
          /* Added */
          !== t.type && 3
          /* Metadata */
          === n.type ? this.qt = this.qt.ot(e, t) : 3
          /* Metadata */
          === t.type && 1
          /* Removed */
          !== n.type ? this.qt = this.qt.ot(e, {
            type: n.type,
            doc: t.doc
          }) : 2
          /* Modified */
          === t.type && 2
          /* Modified */
          === n.type ? this.qt = this.qt.ot(e, {
            type: 2
            /* Modified */
            ,
            doc: t.doc
          }) : 2
          /* Modified */
          === t.type && 0
          /* Added */
          === n.type ? this.qt = this.qt.ot(e, {
            type: 0
            /* Added */
            ,
            doc: t.doc
          }) : 1
          /* Removed */
          === t.type && 0
          /* Added */
          === n.type ? this.qt = this.qt.remove(e) : 1
          /* Removed */
          === t.type && 2
          /* Modified */
          === n.type ? this.qt = this.qt.ot(e, {
            type: 1
            /* Removed */
            ,
            doc: n.doc
          }) : 0
          /* Added */
          === t.type && 1
          /* Removed */
          === n.type ? this.qt = this.qt.ot(e, {
            type: 2
            /* Modified */
            ,
            doc: t.doc
          }) : // This includes these cases, which don't make sense:
          // Added->Added
          // Removed->Removed
          // Modified->Added
          // Removed->Modified
          // Metadata->Added
          // Removed->Metadata
          S() : this.qt = this.qt.ot(e, t);
        }, t.prototype.Ut = function () {
          var t = [];
          return this.qt.ht(function (e, n) {
            t.push(n);
          }), t;
        }, t;
      }(),
          Ot =
      /** @class */
      function () {
        function t(t, e, n, r, i, o, u, s) {
          this.query = t, this.docs = e, this.Kt = n, this.docChanges = r, this.Qt = i, this.fromCache = o, this.Wt = u, this.jt = s
          /** Returns a view snapshot as if all documents in the snapshot were added. */
          ;
        }

        return t.Gt = function (e, n, r, i) {
          var o = [];
          return n.forEach(function (t) {
            o.push({
              type: 0
              /* Added */
              ,
              doc: t
            });
          }), new t(e, n, xt.Bt(n), o, r, i,
          /* syncStateChanged= */
          !0,
          /* excludesMetadataChanges= */
          !1);
        }, Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function get() {
            return !this.Qt.P();
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (t) {
          if (!(this.fromCache === t.fromCache && this.Wt === t.Wt && this.Qt.isEqual(t.Qt) && Fn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Kt.isEqual(t.Kt))) return !1;
          var e = this.docChanges,
              n = t.docChanges;
          if (e.length !== n.length) return !1;

          for (var r = 0; r < e.length; r++) {
            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
          }

          return !0;
        }, t;
      }(),
          Pt =
      /** @class */
      function () {
        function t(
        /**
         * The snapshot version this event brings us up to, or MIN if not set.
         */
        t,
        /**
         * A map from target to changes to the target. See TargetChange.
         */
        e,
        /**
         * A set of targets that is known to be inconsistent. Listens for these
         * targets should be re-established without resume tokens.
         */
        n,
        /**
         * A set of which documents have changed or been deleted, along with the
         * doc's new values (if not deleted).
         */
        r,
        /**
         * A set of which document updates are due only to limbo resolution targets.
         */
        i) {
          this.nt = t, this.zt = e, this.Ht = n, this.Yt = r, this.Jt = i;
        }
        /**
         * HACK: Views require RemoteEvents in order to determine whether the view is
         * CURRENT, but secondary tabs don't receive remote events. So this method is
         * used to create a synthesized RemoteEvent that can be used to apply a
         * CURRENT status change to a View, for queries executed in a different tab.
         */
        // PORTING NOTE: Multi-tab only


        return t.Xt = function (e, n) {
          var r = new Map();
          return r.set(e, Lt.Zt(e, n)), new t(H.min(), r, St(), bt(), At());
        }, t;
      }(),
          Lt =
      /** @class */
      function () {
        function t(
        /**
         * An opaque, server-assigned token that allows watching a query to be resumed
         * after disconnecting without retransmitting all the data that matches the
         * query. The resume token essentially identifies a point in time from which
         * the server should resume sending results.
         */
        t,
        /**
         * The "current" (synced) status of this target. Note that "current"
         * has special meaning in the RPC protocol that implies that a target is
         * both up-to-date and consistent with the rest of the watch stream.
         */
        e,
        /**
         * The set of documents that were newly assigned to this target as part of
         * this remote event.
         */
        n,
        /**
         * The set of documents that were already assigned to this target but received
         * an update during this remote event.
         */
        r,
        /**
         * The set of documents that were removed from this target as part of this
         * remote event.
         */
        i) {
          this.resumeToken = t, this.te = e, this.ee = n, this.ne = r, this.se = i
          /**
          * This method is used to create a synthesized TargetChanges that can be used to
          * apply a CURRENT status change to a View (for queries executed in a different
          * tab) or for new queries (to raise snapshots with correct CURRENT status).
          */
          ;
        }

        return t.Zt = function (e, n) {
          return new t(U.h, n, At(), At(), At());
        }, t;
      }(),
          Vt = function Vt(
      /** The new document applies to all of these targets. */
      t,
      /** The new document is removed from all of these targets. */
      e,
      /** The key of the document for this change. */
      n,
      /**
           * The new document or NoDocument if it was deleted. Is null if the
           * document went out of view without the server sending a new document.
           */
      r) {
        this.ie = t, this.removedTargetIds = e, this.key = n, this.re = r;
      },
          Rt = function Rt(t, e) {
        this.targetId = t, this.oe = e;
      },
          Ut = function Ut(
      /** What kind of change occurred to the watch target. */
      t,
      /** The target IDs that were added/removed/set. */
      e,
      /**
           * An opaque, server-assigned token that allows watching a target to be
           * resumed after disconnecting without retransmitting all the data that
           * matches the target. The resume token essentially identifies a point in
           * time from which the server should resume sending results.
           */
      n
      /** An RPC error indicating why the watch failed. */
      , r) {
        void 0 === n && (n = U.h), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
      },
          Ct =
      /** @class */
      function () {
        function t() {
          /**
           * The number of pending responses (adds or removes) that we are waiting on.
           * We only consider targets active that have no pending responses.
           */
          this.ae = 0,
          /**
               * Keeps track of the document changes since the last raised snapshot.
               *
               * These changes are continuously updated as we receive document updates and
               * always reflect the current set of changes against the last issued snapshot.
               */
          this.ce = Ft(),
          /** See public getters for explanations of these fields. */
          this.ue = U.h, this.he = !1,
          /**
               * Whether this target state should be included in the next snapshot. We
               * initialize to true so that newly-added targets are included in the next
               * RemoteEvent.
               */
          this.le = !0;
        }

        return Object.defineProperty(t.prototype, "te", {
          /**
           * Whether this target has been marked 'current'.
           *
           * 'Current' has special meaning in the RPC protocol: It implies that the
           * Watch backend has sent us all changes up to the point at which the target
           * was added and that the target is consistent with the rest of the watch
           * stream.
           */
          get: function get() {
            return this.he;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "resumeToken", {
          /** The last resume token sent to us for this target. */
          get: function get() {
            return this.ue;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "_e", {
          /** Whether this target has pending target adds or target removes. */
          get: function get() {
            return 0 !== this.ae;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "fe", {
          /** Whether we have modified any state that should trigger a snapshot. */
          get: function get() {
            return this.le;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Applies the resume token to the TargetChange, but only when it has a new
         * value. Empty resumeTokens are discarded.
         */
        t.prototype.de = function (t) {
          t.o() > 0 && (this.le = !0, this.ue = t);
        },
        /**
         * Creates a target change from the current set of changes.
         *
         * To reset the document changes after raising this snapshot, call
         * `clearPendingChanges()`.
         */
        t.prototype.we = function () {
          var t = At(),
              e = At(),
              n = At();
          return this.ce.forEach(function (r, i) {
            switch (i) {
              case 0
              /* Added */
              :
                t = t.add(r);
                break;

              case 2
              /* Modified */
              :
                e = e.add(r);
                break;

              case 1
              /* Removed */
              :
                n = n.add(r);
                break;

              default:
                S();
            }
          }), new Lt(this.ue, this.he, t, e, n);
        },
        /**
         * Resets the document changes and sets `hasPendingChanges` to false.
         */
        t.prototype.Ee = function () {
          this.le = !1, this.ce = Ft();
        }, t.prototype.Te = function (t, e) {
          this.le = !0, this.ce = this.ce.ot(t, e);
        }, t.prototype.Ie = function (t) {
          this.le = !0, this.ce = this.ce.remove(t);
        }, t.prototype.me = function () {
          this.ae += 1;
        }, t.prototype.Ae = function () {
          this.ae -= 1;
        }, t.prototype.Re = function () {
          this.le = !0, this.he = !0;
        }, t;
      }(),
          qt =
      /** @class */
      function () {
        function t(t) {
          this.Pe = t,
          /** The internal state of all tracked targets. */
          this.ge = new Map(),
          /** Keeps track of the documents to update since the last raised snapshot. */
          this.ye = bt(),
          /** A mapping of document keys to their set of target IDs. */
          this.Ve = Mt(),
          /**
               * A list of targets with existence filter mismatches. These targets are
               * known to be inconsistent and their listens needs to be re-established by
               * RemoteStore.
               */
          this.pe = new mt(L)
          /**
          * Processes and adds the DocumentWatchChange to the current set of changes.
          */
          ;
        }

        return t.prototype.be = function (t) {
          for (var e = 0, n = t.ie; e < n.length; e++) {
            var r = n[e];
            t.re instanceof Tn ? this.ve(r, t.re) : t.re instanceof Nn && this.Se(r, t.key, t.re);
          }

          for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var u = o[i];
            this.Se(u, t.key, t.re);
          }
        },
        /** Processes and adds the WatchTargetChange to the current set of changes. */
        t.prototype.De = function (t) {
          var e = this;
          this.Ce(t, function (n) {
            var r = e.Ne(n);

            switch (t.state) {
              case 0
              /* NoChange */
              :
                e.xe(n) && r.de(t.resumeToken);
                break;

              case 1
              /* Added */
              :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ae(), r._e || // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.Ee(), r.de(t.resumeToken);
                break;

              case 2
              /* Removed */
              :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ae(), r._e || e.removeTarget(n);
                break;

              case 3
              /* Current */
              :
                e.xe(n) && (r.Re(), r.de(t.resumeToken));
                break;

              case 4
              /* Reset */
              :
                e.xe(n) && ( // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Fe(n), r.de(t.resumeToken));
                break;

              default:
                S();
            }
          });
        },
        /**
         * Iterates over all targetIds that the watch change applies to: either the
         * targetIds explicitly listed in the change or the targetIds of all currently
         * active targets.
         */
        t.prototype.Ce = function (t, e) {
          var n = this;
          t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.ge.forEach(function (t, r) {
            n.xe(r) && e(r);
          });
        },
        /**
         * Handles existence filters and synthesizes deletes for filter mismatches.
         * Targets that are invalidated by filter mismatches are added to
         * `pendingTargetResets`.
         */
        t.prototype.Oe = function (t) {
          var e = t.targetId,
              n = t.oe.count,
              r = this.ke(e);

          if (r) {
            var i = r.target;
            if (st(i)) {
              if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new $(i.path);
                this.Se(e, o, new Nn(o, H.min()));
              } else x(1 === n);
            } else this.Me(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Fe(e), this.pe = this.pe.add(e));
          }
        },
        /**
         * Converts the currently accumulated state into a remote event at the
         * provided snapshot version. Resets the accumulated changes before returning.
         */
        t.prototype.$e = function (t) {
          var e = this,
              n = new Map();
          this.ge.forEach(function (r, i) {
            var o = e.ke(i);

            if (o) {
              if (r.te && st(o.target)) {
                // Document queries for document that don't exist can produce an empty
                // result set. To update our local cache, we synthesize a document
                // delete if we have not previously received the document. This
                // resolves the limbo state of the document, removing it from
                // limboDocumentRefs.
                // TODO(dimond): Ideally we would have an explicit lookup target
                // instead resulting in an explicit delete message and we could
                // remove this special logic.
                var u = new $(o.target.path);
                null !== e.ye.get(u) || e.Le(i, u) || e.Se(i, u, new Nn(u, t));
              }

              r.fe && (n.set(i, r.we()), r.Ee());
            }
          });
          var r = At(); // We extract the set of limbo-only document updates as the GC logic
          // special-cases documents that do not appear in the target cache.
          // TODO(gsoltis): Expand on this comment once GC is available in the JS
          // client.

          this.Ve.forEach(function (t, n) {
            var i = !0;
            n.Ft(function (t) {
              var n = e.ke(t);
              return !n || 2
              /* LimboResolution */
              === n.et || (i = !1, !1);
            }), i && (r = r.add(t));
          });
          var i = new Pt(t, n, this.pe, this.ye, r);
          return this.ye = bt(), this.Ve = Mt(), this.pe = new mt(L), i;
        },
        /**
         * Adds the provided document to the internal list of document updates and
         * its document key to the given target's mapping.
         */
        // Visible for testing.
        t.prototype.ve = function (t, e) {
          if (this.xe(t)) {
            var n = this.Le(t, e.key) ? 2
            /* Modified */
            : 0
            /* Added */
            ;
            this.Ne(t).Te(e.key, n), this.ye = this.ye.ot(e.key, e), this.Ve = this.Ve.ot(e.key, this.Be(e.key).add(t));
          }
        },
        /**
         * Removes the provided document from the target mapping. If the
         * document no longer matches the target, but the document's state is still
         * known (e.g. we know that the document was deleted or we received the change
         * that caused the filter mismatch), the new document can be provided
         * to update the remote document cache.
         */
        // Visible for testing.
        t.prototype.Se = function (t, e, n) {
          if (this.xe(t)) {
            var r = this.Ne(t);
            this.Le(t, e) ? r.Te(e, 1
            /* Removed */
            ) : // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Ie(e), this.Ve = this.Ve.ot(e, this.Be(e)["delete"](t)), n && (this.ye = this.ye.ot(e, n));
          }
        }, t.prototype.removeTarget = function (t) {
          this.ge["delete"](t);
        },
        /**
         * Returns the current count of documents in the target. This includes both
         * the number of documents that the LocalStore considers to be part of the
         * target as well as any accumulated changes.
         */
        t.prototype.Me = function (t) {
          var e = this.Ne(t).we();
          return this.Pe.qe(t).size + e.ee.size - e.se.size;
        },
        /**
         * Increment the number of acks needed from watch before we can consider the
         * server to be 'in-sync' with the client's active targets.
         */
        t.prototype.me = function (t) {
          this.Ne(t).me();
        }, t.prototype.Ne = function (t) {
          var e = this.ge.get(t);
          return e || (e = new Ct(), this.ge.set(t, e)), e;
        }, t.prototype.Be = function (t) {
          var e = this.Ve.get(t);
          return e || (e = new mt(L), this.Ve = this.Ve.ot(t, e)), e;
        },
        /**
         * Verifies that the user is still interested in this target (by calling
         * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
         * from watch.
         */
        t.prototype.xe = function (t) {
          var e = null !== this.ke(t);
          return e || T("WatchChangeAggregator", "Detected inactive target", t), e;
        },
        /**
         * Returns the TargetData for an active target (i.e. a target that the user
         * is still interested in that has no outstanding target change requests).
         */
        t.prototype.ke = function (t) {
          var e = this.ge.get(t);
          return e && e._e ? null : this.Pe.Ue(t);
        },
        /**
         * Resets the state of a Watch target to its initial state (e.g. sets
         * 'current' to false, clears the resume token and removes its target mapping
         * from all documents).
         */
        t.prototype.Fe = function (t) {
          var e = this;
          this.ge.set(t, new Ct()), this.Pe.qe(t).forEach(function (n) {
            e.Se(t, n,
            /*updatedDocument=*/
            null);
          });
        },
        /**
         * Returns whether the LocalStore considers the document to be part of the
         * specified target.
         */
        t.prototype.Le = function (t, e) {
          return this.Pe.qe(t).has(e);
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
       * duplicate events for the same doc.
       */


      function Mt() {
        return new dt($.D);
      }

      function Ft() {
        return new dt($.D);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents a locally-applied ServerTimestamp.
       *
       * Server Timestamps are backed by MapValues that contain an internal field
       * `__type__` with a value of `server_timestamp`. The previous value and local
       * write time are stored in its `__previous_value__` and `__local_write_time__`
       * fields respectively.
       *
       * Notes:
       * - ServerTimestampValue instances are created as the result of applying a
       *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
       *   the local view of a document. Therefore they do not need to be parsed or
       *   serialized.
       * - When evaluated locally (e.g. for snapshot.data()), they by default
       *   evaluate to `null`. This behavior can be configured by passing custom
       *   FieldValueOptions to value().
       * - With respect to other ServerTimestampValues, they sort by their
       *   localWriteTime.
       */


      function Bt(t) {
        var e, n;
        return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
      }
      /**
       * Creates a new ServerTimestamp proto value (using the internal format).
       */

      /**
       * Returns the value of the field before this ServerTimestamp was set.
       *
       * Preserving the previous values allows the user to display the last resoled
       * value until the backend responds with the timestamp.
       */


      function jt(t) {
        var e = t.mapValue.fields.__previous_value__;
        return Bt(e) ? jt(e) : e;
      }
      /**
       * Returns the local time at which this timestamp was first set.
       */


      function zt(t) {
        var e = Zt(t.mapValue.fields.__local_write_time__.timestampValue);
        return new W(e.seconds, e.nanos);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // A RegExp matching ISO 8601 UTC timestamps with optional fraction.


      var Gt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      /** Extracts the backend's type order for the provided value. */

      function Kt(t) {
        return "nullValue" in t ? 0
        /* NullValue */
        : "booleanValue" in t ? 1
        /* BooleanValue */
        : "integerValue" in t || "doubleValue" in t ? 2
        /* NumberValue */
        : "timestampValue" in t ? 3
        /* TimestampValue */
        : "stringValue" in t ? 5
        /* StringValue */
        : "bytesValue" in t ? 6
        /* BlobValue */
        : "referenceValue" in t ? 7
        /* RefValue */
        : "geoPointValue" in t ? 8
        /* GeoPointValue */
        : "arrayValue" in t ? 9
        /* ArrayValue */
        : "mapValue" in t ? Bt(t) ? 4
        /* ServerTimestampValue */
        : 10
        /* ObjectValue */
        : S();
      }
      /** Tests `left` and `right` for equality based on the backend semantics. */


      function Qt(t, e) {
        var n = Kt(t);
        if (n !== Kt(e)) return !1;

        switch (n) {
          case 0
          /* NullValue */
          :
            return !0;

          case 1
          /* BooleanValue */
          :
            return t.booleanValue === e.booleanValue;

          case 4
          /* ServerTimestampValue */
          :
            return zt(t).isEqual(zt(e));

          case 3
          /* TimestampValue */
          :
            return function (t, e) {
              if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
                return t.timestampValue === e.timestampValue;
              var n = Zt(t.timestampValue),
                  r = Zt(e.timestampValue);
              return n.seconds === r.seconds && n.nanos === r.nanos;
            }(t, e);

          case 5
          /* StringValue */
          :
            return t.stringValue === e.stringValue;

          case 6
          /* BlobValue */
          :
            return function (t, e) {
              return te(t.bytesValue).isEqual(te(e.bytesValue));
            }(t, e);

          case 7
          /* RefValue */
          :
            return t.referenceValue === e.referenceValue;

          case 8
          /* GeoPointValue */
          :
            return function (t, e) {
              return $t(t.geoPointValue.latitude) === $t(e.geoPointValue.latitude) && $t(t.geoPointValue.longitude) === $t(e.geoPointValue.longitude);
            }(t, e);

          case 2
          /* NumberValue */
          :
            return function (t, e) {
              if ("integerValue" in t && "integerValue" in e) return $t(t.integerValue) === $t(e.integerValue);

              if ("doubleValue" in t && "doubleValue" in e) {
                var n = $t(t.doubleValue),
                    r = $t(e.doubleValue);
                return n === r ? et(n) === et(r) : isNaN(n) && isNaN(r);
              }

              return !1;
            }(t, e);

          case 9
          /* ArrayValue */
          :
            return V(t.arrayValue.values || [], e.arrayValue.values || [], Qt);

          case 10
          /* ObjectValue */
          :
            return function (t, e) {
              var n = t.mapValue.fields || {},
                  r = e.mapValue.fields || {};
              if (z(n) !== z(r)) return !1;

              for (var i in n) {
                if (n.hasOwnProperty(i) && (void 0 === r[i] || !Qt(n[i], r[i]))) return !1;
              }

              return !0;
            }(t, e);

          default:
            return S();
        }
      }

      function Wt(t, e) {
        return void 0 !== (t.values || []).find(function (t) {
          return Qt(t, e);
        });
      }

      function Ht(t, e) {
        var n = Kt(t),
            r = Kt(e);
        if (n !== r) return L(n, r);

        switch (n) {
          case 0
          /* NullValue */
          :
            return 0;

          case 1
          /* BooleanValue */
          :
            return L(t.booleanValue, e.booleanValue);

          case 2
          /* NumberValue */
          :
            return function (t, e) {
              var n = $t(t.integerValue || t.doubleValue),
                  r = $t(e.integerValue || e.doubleValue);
              return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
              isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
            }(t, e);

          case 3
          /* TimestampValue */
          :
            return Yt(t.timestampValue, e.timestampValue);

          case 4
          /* ServerTimestampValue */
          :
            return Yt(zt(t), zt(e));

          case 5
          /* StringValue */
          :
            return L(t.stringValue, e.stringValue);

          case 6
          /* BlobValue */
          :
            return function (t, e) {
              var n = te(t),
                  r = te(e);
              return n.u(r);
            }(t.bytesValue, e.bytesValue);

          case 7
          /* RefValue */
          :
            return function (t, e) {
              for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = L(n[i], r[i]);
                if (0 !== o) return o;
              }

              return L(n.length, r.length);
            }(t.referenceValue, e.referenceValue);

          case 8
          /* GeoPointValue */
          :
            return function (t, e) {
              var n = L($t(t.latitude), $t(e.latitude));
              return 0 !== n ? n : L($t(t.longitude), $t(e.longitude));
            }(t.geoPointValue, e.geoPointValue);

          case 9
          /* ArrayValue */
          :
            return function (t, e) {
              for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = Ht(n[i], r[i]);
                if (o) return o;
              }

              return L(n.length, r.length);
            }(t.arrayValue, e.arrayValue);

          case 10
          /* ObjectValue */
          :
            return function (t, e) {
              var n = t.fields || {},
                  r = Object.keys(n),
                  i = e.fields || {},
                  o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
              // order (e.g. when received from the backend), local modifications can bring
              // elements out of order. We need to re-sort the elements to ensure that
              // canonical IDs are independent of insertion order.

              r.sort(), o.sort();

              for (var u = 0; u < r.length && u < o.length; ++u) {
                var s = L(r[u], o[u]);
                if (0 !== s) return s;
                var a = Ht(n[r[u]], i[o[u]]);
                if (0 !== a) return a;
              }

              return L(r.length, o.length);
            }(t.mapValue, e.mapValue);

          default:
            throw S();
        }
      }

      function Yt(t, e) {
        if ("string" == typeof t && "string" == typeof e && t.length === e.length) return L(t, e);
        var n = Zt(t),
            r = Zt(e),
            i = L(n.seconds, r.seconds);
        return 0 !== i ? i : L(n.nanos, r.nanos);
      }

      function Jt(t) {
        return Xt(t);
      }

      function Xt(t) {
        return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function (t) {
          var e = Zt(t);
          return "time(" + e.seconds + "," + e.nanos + ")";
        }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? te(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, $.Y(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function (t) {
          for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += Xt(i[r]);
          }

          return e + "]";
        }(t.arrayValue) : "mapValue" in t ? function (t) {
          for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
          // matching canonical IDs for identical maps, we need to sort the keys.
          var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + Xt(t.fields[o]);
          }

          return e + "}";
        }(t.mapValue) : S();
        var e, n;
      }

      function Zt(t) {
        // The json interface (for the browser) will return an iso timestamp string,
        // while the proto js library (for node) will return a
        // google.protobuf.Timestamp instance.
        if (x(!!t), "string" == typeof t) {
          // The date string can have higher precision (nanos) than the Date class
          // (millis), so we do some custom parsing here.
          // Parse the nanos right out of the string.
          var e = 0,
              n = Gt.exec(t);

          if (x(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
          } // Parse the date to get the seconds.


          var i = new Date(t);
          return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
          };
        }

        return {
          seconds: $t(t.seconds),
          nanos: $t(t.nanos)
        };
      }
      /**
       * Converts the possible Proto types for numbers into a JavaScript number.
       * Returns 0 if the value is not numeric.
       */


      function $t(t) {
        // TODO(bjornick): Handle int64 greater than 53 bits.
        return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
      }
      /** Converts the possible Proto types for Blobs into a ByteString. */


      function te(t) {
        return "string" == typeof t ? U.fromBase64String(t) : U.fromUint8Array(t);
      }
      /** Returns a reference value for the provided database and key. */


      function ee(t, e) {
        return {
          referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.B()
        };
      }
      /** Returns true if `value` is an IntegerValue . */


      function ne(t) {
        return !!t && "integerValue" in t;
      }
      /** Returns true if `value` is a DoubleValue. */

      /** Returns true if `value` is an ArrayValue. */


      function re(t) {
        return !!t && "arrayValue" in t;
      }
      /** Returns true if `value` is a NullValue. */


      function ie(t) {
        return !!t && "nullValue" in t;
      }
      /** Returns true if `value` is NaN. */


      function oe(t) {
        return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
      }
      /** Returns true if `value` is a MapValue. */


      function ue(t) {
        return !!t && "mapValue" in t;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var se = {
        asc: "ASCENDING",
        desc: "DESCENDING"
      },
          ae = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        "in": "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
      },
          ce = function ce(t, e) {
        this._ = t, this.Ke = e;
      };
      /**
       * This class generates JsonObject values for the Datastore API suitable for
       * sending to either GRPC stub methods or via the JSON/HTTP REST API.
       *
       * The serializer supports both Protobuf.js and Proto3 JSON formats. By
       * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
       * format.
       *
       * For a description of the Proto3 JSON format check
       * https://developers.google.com/protocol-buffers/docs/proto3#json
       *
       * TODO(klimt): We can remove the databaseId argument if we keep the full
       * resource name in documents.
       */

      /**
       * Returns an IntegerValue for `value`.
       */


      function he(t) {
        return {
          integerValue: "" + t
        };
      }
      /**
       * Returns an DoubleValue for `value` that is encoded based the serializer's
       * `useProto3Json` setting.
       */


      function fe(t, e) {
        if (t.Ke) {
          if (isNaN(e)) return {
            doubleValue: "NaN"
          };
          if (e === 1 / 0) return {
            doubleValue: "Infinity"
          };
          if (e === -1 / 0) return {
            doubleValue: "-Infinity"
          };
        }

        return {
          doubleValue: et(e) ? "-0" : e
        };
      }
      /**
       * Returns a value for a number that's appropriate to put into a proto.
       * The return value is an IntegerValue if it can safely represent the value,
       * otherwise a DoubleValue is returned.
       */


      function le(t, e) {
        return nt(e) ? he(e) : fe(t, e);
      }
      /**
       * Returns a value for a Date that's appropriate to put into a proto.
       */


      function pe(t, e) {
        return t.Ke ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
          seconds: "" + e.seconds,
          nanos: e.nanoseconds
        };
      }
      /**
       * Returns a value for bytes that's appropriate to put in a proto.
       *
       * Visible for testing.
       */


      function de(t, e) {
        return t.Ke ? e.toBase64() : e.toUint8Array();
      }
      /**
       * Returns a ByteString based on the proto string value.
       */


      function ve(t, e) {
        return pe(t, e.v());
      }

      function ye(t) {
        return x(!!t), H.V(function (t) {
          var e = Zt(t);
          return new W(e.seconds, e.nanos);
        }(t));
      }

      function me(t, e) {
        return function (t) {
          return new J(["projects", t.projectId, "databases", t.database]);
        }(t).child("documents").child(e).B();
      }

      function ge(t) {
        var e = J.q(t);
        return x(Be(e)), e;
      }

      function we(t, e) {
        return me(t._, e.path);
      }

      function be(t, e) {
        var n = ge(e);
        return x(n.get(1) === t._.projectId), x(!n.get(3) && !t._.database || n.get(3) === t._.database), new $(Te(n));
      }

      function Ie(t, e) {
        return me(t._, e);
      }

      function Ee(t) {
        var e = ge(t); // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.

        return 4 === e.length ? J.U() : Te(e);
      }

      function _e(t) {
        return new J(["projects", t._.projectId, "databases", t._.database]).B();
      }

      function Te(t) {
        return x(t.length > 4 && "documents" === t.get(4)), t.N(5)
        /** Creates a Document proto from key and fields (but no create/update time) */
        ;
      }

      function Ne(t, e, n) {
        return {
          name: we(t, e),
          fields: n.proto.mapValue.fields
        };
      }

      function Ae(t, e) {
        var n;
        if (e instanceof ln) n = {
          update: Ne(t, e.key, e.value)
        };else if (e instanceof gn) n = {
          "delete": we(t, e.key)
        };else if (e instanceof pn) n = {
          update: Ne(t, e.key, e.data),
          updateMask: Fe(e.Qe)
        };else if (e instanceof vn) n = {
          transform: {
            document: we(t, e.key),
            fieldTransforms: e.fieldTransforms.map(function (t) {
              return function (t, e) {
                var n = e.transform;
                if (n instanceof Qe) return {
                  fieldPath: e.field.B(),
                  setToServerValue: "REQUEST_TIME"
                };
                if (n instanceof We) return {
                  fieldPath: e.field.B(),
                  appendMissingElements: {
                    values: n.elements
                  }
                };
                if (n instanceof Ye) return {
                  fieldPath: e.field.B(),
                  removeAllFromArray: {
                    values: n.elements
                  }
                };
                if (n instanceof Xe) return {
                  fieldPath: e.field.B(),
                  increment: n.We
                };
                throw S();
              }(0, t);
            })
          }
        };else {
          if (!(e instanceof wn)) return S();
          n = {
            verify: we(t, e.key)
          };
        }
        return e.Ge.je || (n.currentDocument = function (t, e) {
          return void 0 !== e.updateTime ? {
            updateTime: ve(t, e.updateTime)
          } : void 0 !== e.exists ? {
            exists: e.exists
          } : S();
        }(t, e.Ge)), n;
      }

      function De(t, e) {
        var n = e.currentDocument ? function (t) {
          return void 0 !== t.updateTime ? rn.updateTime(ye(t.updateTime)) : void 0 !== t.exists ? rn.exists(t.exists) : rn.ze();
        }(e.currentDocument) : rn.ze();

        if (e.update) {
          e.update.name;
          var r = be(t, e.update.name),
              i = new bn({
            mapValue: {
              fields: e.update.fields
            }
          });

          if (e.updateMask) {
            var o = function (t) {
              var e = t.fieldPaths || [];
              return new tn(e.map(function (t) {
                return Z.G(t);
              }));
            }(e.updateMask);

            return new pn(r, i, o, n);
          }

          return new ln(r, i, n);
        }

        if (e["delete"]) {
          var u = be(t, e["delete"]);
          return new gn(u, n);
        }

        if (e.transform) {
          var s = be(t, e.transform.document),
              a = e.transform.fieldTransforms.map(function (e) {
            return function (t, e) {
              var n = null;
              if ("setToServerValue" in e) x("REQUEST_TIME" === e.setToServerValue), n = new Qe();else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new We(r);
              } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new Ye(i);
              } else "increment" in e ? n = new Xe(t, e.increment) : S();
              var o = Z.G(e.fieldPath);
              return new en(o, n);
            }(t, e);
          });
          return x(!0 === n.exists), new vn(s, a);
        }

        if (e.verify) {
          var c = be(t, e.verify);
          return new wn(c, n);
        }

        return S();
      }

      function Se(t, e) {
        return {
          documents: [Ie(t, e.path)]
        };
      }

      function xe(t, e) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var n = {
          structuredQuery: {}
        },
            r = e.path;
        null !== e.collectionGroup ? (n.parent = Ie(t, r), n.structuredQuery.from = [{
          collectionId: e.collectionGroup,
          allDescendants: !0
        }]) : (n.parent = Ie(t, r.F()), n.structuredQuery.from = [{
          collectionId: r.k()
        }]);

        var i = function (t) {
          if (0 !== t.length) {
            var e = t.map(function (t) {
              // visible for testing
              return function (t) {
                if ("=="
                /* EQUAL */
                === t.op) {
                  if (oe(t.value)) return {
                    unaryFilter: {
                      field: Ue(t.field),
                      op: "IS_NAN"
                    }
                  };
                  if (ie(t.value)) return {
                    unaryFilter: {
                      field: Ue(t.field),
                      op: "IS_NULL"
                    }
                  };
                } else if ("!="
                /* NOT_EQUAL */
                === t.op) {
                  if (oe(t.value)) return {
                    unaryFilter: {
                      field: Ue(t.field),
                      op: "IS_NOT_NAN"
                    }
                  };
                  if (ie(t.value)) return {
                    unaryFilter: {
                      field: Ue(t.field),
                      op: "IS_NOT_NULL"
                    }
                  };
                }

                return {
                  fieldFilter: {
                    field: Ue(t.field),
                    op: Re(t.op),
                    value: t.value
                  }
                };
              }(t);
            });
            return 1 === e.length ? e[0] : {
              compositeFilter: {
                op: "AND",
                filters: e
              }
            };
          }
        }(e.filters);

        i && (n.structuredQuery.where = i);

        var o = function (t) {
          if (0 !== t.length) return t.map(function (t) {
            // visible for testing
            return function (t) {
              return {
                field: Ue(t.field),
                direction: Ve(t.dir)
              };
            }(t);
          });
        }(e.orderBy);

        o && (n.structuredQuery.orderBy = o);

        var u = function (t, e) {
          return t.Ke || tt(e) ? e : {
            value: e
          };
        }(t, e.limit);

        return null !== u && (n.structuredQuery.limit = u), e.startAt && (n.structuredQuery.startAt = Pe(e.startAt)), e.endAt && (n.structuredQuery.endAt = Pe(e.endAt)), n;
      }

      function ke(t) {
        var e = Ee(t.parent),
            n = t.structuredQuery,
            r = n.from ? n.from.length : 0,
            i = null;

        if (r > 0) {
          x(1 === r);
          var o = n.from[0];
          o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }

        var u = [];
        n.where && (u = Oe(n.where));
        var s = [];
        n.orderBy && (s = n.orderBy.map(function (t) {
          return function (t) {
            return new ir(Ce(t.field), // visible for testing
            function (t) {
              switch (t) {
                case "ASCENDING":
                  return "asc"
                  /* ASCENDING */
                  ;

                case "DESCENDING":
                  return "desc"
                  /* DESCENDING */
                  ;

                default:
                  return;
              }
            }(t.direction));
          }(t);
        }));
        var a = null;
        n.limit && (a = function (t) {
          var e;
          return tt(e = "object" == typeof t ? t.value : t) ? null : e;
        }(n.limit));
        var c = null;
        n.startAt && (c = Le(n.startAt));
        var h = null;
        return n.endAt && (h = Le(n.endAt)), Un(Sn(e, i, s, u, a, "F"
        /* First */
        , c, h));
      }

      function Oe(t) {
        return t ? void 0 !== t.unaryFilter ? [Me(t)] : void 0 !== t.fieldFilter ? [qe(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
          return Oe(t);
        }).reduce(function (t, e) {
          return t.concat(e);
        }) : S() : [];
      }

      function Pe(t) {
        return {
          before: t.before,
          values: t.position
        };
      }

      function Le(t) {
        var e = !!t.before,
            n = t.values || [];
        return new tr(n, e);
      } // visible for testing


      function Ve(t) {
        return se[t];
      }

      function Re(t) {
        return ae[t];
      }

      function Ue(t) {
        return {
          fieldPath: t.B()
        };
      }

      function Ce(t) {
        return Z.G(t.fieldPath);
      }

      function qe(t) {
        return Kn.create(Ce(t.fieldFilter.field), function (t) {
          switch (t) {
            case "EQUAL":
              return "=="
              /* EQUAL */
              ;

            case "NOT_EQUAL":
              return "!="
              /* NOT_EQUAL */
              ;

            case "GREATER_THAN":
              return ">"
              /* GREATER_THAN */
              ;

            case "GREATER_THAN_OR_EQUAL":
              return ">="
              /* GREATER_THAN_OR_EQUAL */
              ;

            case "LESS_THAN":
              return "<"
              /* LESS_THAN */
              ;

            case "LESS_THAN_OR_EQUAL":
              return "<="
              /* LESS_THAN_OR_EQUAL */
              ;

            case "ARRAY_CONTAINS":
              return "array-contains"
              /* ARRAY_CONTAINS */
              ;

            case "IN":
              return "in"
              /* IN */
              ;

            case "NOT_IN":
              return "not-in"
              /* NOT_IN */
              ;

            case "ARRAY_CONTAINS_ANY":
              return "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              ;

            case "OPERATOR_UNSPECIFIED":
            default:
              return S();
          }
        }(t.fieldFilter.op), t.fieldFilter.value);
      }

      function Me(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = Ce(t.unaryFilter.field);
            return Kn.create(e, "=="
            /* EQUAL */
            , {
              doubleValue: NaN
            });

          case "IS_NULL":
            var n = Ce(t.unaryFilter.field);
            return Kn.create(n, "=="
            /* EQUAL */
            , {
              nullValue: "NULL_VALUE"
            });

          case "IS_NOT_NAN":
            var r = Ce(t.unaryFilter.field);
            return Kn.create(r, "!="
            /* NOT_EQUAL */
            , {
              doubleValue: NaN
            });

          case "IS_NOT_NULL":
            var i = Ce(t.unaryFilter.field);
            return Kn.create(i, "!="
            /* NOT_EQUAL */
            , {
              nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
          default:
            return S();
        }
      }

      function Fe(t) {
        var e = [];
        return t.fields.forEach(function (t) {
          return e.push(t.B());
        }), {
          fieldPaths: e
        };
      }

      function Be(t) {
        // Resource names have at least 4 components (project ID, database ID)
        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Represents a transform within a TransformMutation. */


      var je = function je() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this.He = void 0;
      };
      /**
       * Computes the local transform result against the provided `previousValue`,
       * optionally using the provided localWriteTime.
       */


      function ze(t, e, n) {
        return t instanceof Qe ? function (t, e) {
          var n = {
            fields: {
              __type__: {
                stringValue: "server_timestamp"
              },
              __local_write_time__: {
                timestampValue: {
                  seconds: t.seconds,
                  nanos: t.nanoseconds
                }
              }
            }
          };
          return e && (n.fields.__previous_value__ = e), {
            mapValue: n
          };
        }(n, e) : t instanceof We ? He(t, e) : t instanceof Ye ? Je(t, e) : function (t, e) {
          // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
          // precision and resolves overflows by reducing precision, we do not
          // manually cap overflows at 2^63.
          var n = Ke(t, e),
              r = Ze(n) + Ze(t.We);
          return ne(n) && ne(t.We) ? he(r) : fe(t.serializer, r);
        }(t, e);
      }
      /**
       * Computes a final transform result after the transform has been acknowledged
       * by the server, potentially using the server-provided transformResult.
       */


      function Ge(t, e, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return t instanceof We ? He(t, e) : t instanceof Ye ? Je(t, e) : n;
      }
      /**
       * If this transform operation is not idempotent, returns the base value to
       * persist for this transform. If a base value is returned, the transform
       * operation is always applied to this base value, even if document has
       * already been updated.
       *
       * Base values provide consistent behavior for non-idempotent transforms and
       * allow us to return the same latency-compensated value even if the backend
       * has already applied the transform operation. The base value is null for
       * idempotent transforms, as they can be re-played even if the backend has
       * already applied them.
       *
       * @return a base value to store along with the mutation, or null for
       * idempotent transforms.
       */


      function Ke(t, e) {
        return t instanceof Xe ? ne(n = e) || function (t) {
          return !!t && "doubleValue" in t;
        }(n) ? e : {
          integerValue: 0
        } : null;
        var n;
      }
      /** Transforms a value into a server-generated timestamp. */


      var Qe =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(je),
          We =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).elements = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(je);
      /** Transforms an array value via a union operation. */


      function He(t, e) {
        for (var n = $e(e), r = function r(t) {
          n.some(function (e) {
            return Qt(e, t);
          }) || n.push(t);
        }, i = 0, o = t.elements; i < o.length; i++) {
          r(o[i]);
        }

        return {
          arrayValue: {
            values: n
          }
        };
      }
      /** Transforms an array value via a remove operation. */


      var Ye =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).elements = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(je);

      function Je(t, e) {
        for (var n = $e(e), r = function r(t) {
          n = n.filter(function (e) {
            return !Qt(e, t);
          });
        }, i = 0, o = t.elements; i < o.length; i++) {
          r(o[i]);
        }

        return {
          arrayValue: {
            values: n
          }
        };
      }
      /**
       * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
       * transforms. Converts all field values to integers or doubles, but unlike the
       * backend does not cap integer values at 2^63. Instead, JavaScript number
       * arithmetic is used and precision loss can occur for values greater than 2^53.
       */


      var Xe =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).serializer = t, r.We = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(je);

      function Ze(t) {
        return $t(t.integerValue || t.doubleValue);
      }

      function $e(t) {
        return re(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provides a set of fields that can be used to partially patch a document.
       * FieldMask is used in conjunction with ObjectValue.
       * Examples:
       *   foo - Overwrites foo entirely with the provided value. If foo is not
       *         present in the companion ObjectValue, the field is deleted.
       *   foo.bar - Overwrites only the field bar of the object foo.
       *             If foo is not an object, foo is replaced with an object
       *             containing foo
       */


      var tn =
      /** @class */
      function () {
        function t(t) {
          this.fields = t, // TODO(dimond): validation of FieldMask
          // Sort the field mask to support `FieldMask.isEqual()` and assert below.
          t.sort(Z.D)
          /**
          * Verifies that `fieldPath` is included by at least one field in this field
          * mask.
          *
          * This is an O(n) operation, where `n` is the size of the field mask.
          */
          ;
        }

        return t.prototype.Ye = function (t) {
          for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].M(t)) return !0;
          }

          return !1;
        }, t.prototype.isEqual = function (t) {
          return V(this.fields, t.fields, function (t, e) {
            return t.isEqual(e);
          });
        }, t;
      }(),
          en = function en(t, e) {
        this.field = t, this.transform = e;
      };
      /** A field path and the TransformOperation to perform upon it. */

      /** The result of successfully applying a mutation to the backend. */


      var nn = function nn(
      /**
           * The version at which the mutation was committed:
           *
           * - For most operations, this is the updateTime in the WriteResult.
           * - For deletes, the commitTime of the WriteResponse (because deletes are
           *   not stored and have no updateTime).
           *
           * Note that these versions can be different: No-op writes will not change
           * the updateTime even though the commitTime advances.
           */
      t,
      /**
           * The resulting fields returned from the backend after a
           * TransformMutation has been committed. Contains one FieldValue for each
           * FieldTransform that was in the mutation.
           *
           * Will be null if the mutation was not a TransformMutation.
           */
      e) {
        this.version = t, this.transformResults = e;
      },
          rn =
      /** @class */
      function () {
        function t(t, e) {
          this.updateTime = t, this.exists = e
          /** Creates a new empty Precondition. */
          ;
        }

        return t.ze = function () {
          return new t();
        },
        /** Creates a new Precondition with an exists flag. */
        t.exists = function (e) {
          return new t(void 0, e);
        },
        /** Creates a new Precondition based on a version a document exists at. */
        t.updateTime = function (e) {
          return new t(e);
        }, Object.defineProperty(t.prototype, "je", {
          /** Returns whether this Precondition is empty. */
          get: function get() {
            return void 0 === this.updateTime && void 0 === this.exists;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (t) {
          return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
        }, t;
      }();
      /**
       * Encodes a precondition for a mutation. This follows the model that the
       * backend accepts with the special case of an explicit "empty" precondition
       * (meaning no precondition).
       */

      /**
       * Returns true if the preconditions is valid for the given document
       * (or null if no document is available).
       */


      function on(t, e) {
        return void 0 !== t.updateTime ? e instanceof Tn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Tn;
      }
      /**
       * A mutation describes a self-contained change to a document. Mutations can
       * create, replace, delete, and update subsets of documents.
       *
       * Mutations not only act on the value of the document but also its version.
       *
       * For local mutations (mutations that haven't been committed yet), we preserve
       * the existing version for Set, Patch, and Transform mutations. For Delete
       * mutations, we reset the version to 0.
       *
       * Here's the expected transition table.
       *
       * MUTATION           APPLIED TO            RESULTS IN
       *
       * SetMutation        Document(v3)          Document(v3)
       * SetMutation        NoDocument(v3)        Document(v0)
       * SetMutation        null                  Document(v0)
       * PatchMutation      Document(v3)          Document(v3)
       * PatchMutation      NoDocument(v3)        NoDocument(v3)
       * PatchMutation      null                  null
       * TransformMutation  Document(v3)          Document(v3)
       * TransformMutation  NoDocument(v3)        NoDocument(v3)
       * TransformMutation  null                  null
       * DeleteMutation     Document(v3)          NoDocument(v0)
       * DeleteMutation     NoDocument(v3)        NoDocument(v0)
       * DeleteMutation     null                  NoDocument(v0)
       *
       * For acknowledged mutations, we use the updateTime of the WriteResponse as
       * the resulting version for Set, Patch, and Transform mutations. As deletes
       * have no explicit update time, we use the commitTime of the WriteResponse for
       * Delete mutations.
       *
       * If a mutation is acknowledged by the backend but fails the precondition check
       * locally, we return an `UnknownDocument` and rely on Watch to send us the
       * updated version.
       *
       * Note that TransformMutations don't create Documents (in the case of being
       * applied to a NoDocument), even though they would on the backend. This is
       * because the client always combines the TransformMutation with a SetMutation
       * or PatchMutation and we only want to apply the transform if the prior
       * mutation resulted in a Document (always true for a SetMutation, but not
       * necessarily for a PatchMutation).
       *
       * ## Subclassing Notes
       *
       * Subclasses of Mutation need to implement applyToRemoteDocument() and
       * applyToLocalView() to implement the actual behavior of applying the mutation
       * to some source document.
       */


      var un = function un() {};
      /**
       * Applies this mutation to the given MaybeDocument or null for the purposes
       * of computing a new remote document. If the input document doesn't match the
       * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
       * returned.
       *
       * @param mutation The mutation to apply.
       * @param maybeDoc The document to mutate. The input document can be null if
       *     the client has no knowledge of the pre-mutation state of the document.
       * @param mutationResult The result of applying the mutation from the backend.
       * @return The mutated document. The returned document may be an
       *     UnknownDocument if the mutation could not be applied to the locally
       *     cached base document.
       */


      function sn(t, e, n) {
        return t instanceof ln ? function (t, e, n) {
          // Unlike applySetMutationToLocalView, if we're applying a mutation to a
          // remote document the server has accepted the mutation so the precondition
          // must have held.
          return new Tn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
          });
        }(t, 0, n) : t instanceof pn ? function (t, e, n) {
          if (!on(t.Ge, e)) // Since the mutation was not rejected, we know that the  precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and return an UnknownDocument with the
            // known updateTime.
            return new An(t.key, n.version);
          var r = dn(t, e);
          return new Tn(t.key, n.version, r, {
            hasCommittedMutations: !0
          });
        }(t, e, n) : t instanceof vn ? function (t, e, n) {
          if (x(null != n.transformResults), !on(t.Ge, e)) // Since the mutation was not rejected, we know that the  precondition
            // matched on the backend. We therefore must not have the expected version
            // of the document in our cache and return an UnknownDocument with the
            // known updateTime.
            return new An(t.key, n.version);

          var r = yn(t, e),
              i =
          /**
          * Creates a list of "transform results" (a transform result is a field value
          * representing the result of applying a transform) for use after a
          * TransformMutation has been acknowledged by the server.
          *
          * @param fieldTransforms The field transforms to apply the result to.
          * @param baseDoc The document prior to applying this mutation batch.
          * @param serverTransformResults The transform results received by the server.
          * @return The transform results list.
          */
          function (t, e, n) {
            var r = [];
            x(t.length === n.length);

            for (var i = 0; i < n.length; i++) {
              var o = t[i],
                  u = o.transform,
                  s = null;
              e instanceof Tn && (s = e.field(o.field)), r.push(Ge(u, s, n[i]));
            }

            return r;
          }(t.fieldTransforms, e, n.transformResults),
              o = n.version,
              u = mn(t, r.data(), i);

          return new Tn(t.key, o, u, {
            hasCommittedMutations: !0
          });
        }(t, e, n) : function (t, e, n) {
          // Unlike applyToLocalView, if we're applying a mutation to a remote
          // document the server has accepted the mutation so the precondition must
          // have held.
          return new Nn(t.key, n.version, {
            hasCommittedMutations: !0
          });
        }(t, 0, n);
      }
      /**
       * Applies this mutation to the given MaybeDocument or null for the purposes
       * of computing the new local view of a document. Both the input and returned
       * documents can be null.
       *
       * @param mutation The mutation to apply.
       * @param maybeDoc The document to mutate. The input document can be null if
       *     the client has no knowledge of the pre-mutation state of the document.
       * @param baseDoc The state of the document prior to this mutation batch. The
       *     input document can be null if the client has no knowledge of the
       *     pre-mutation state of the document.
       * @param localWriteTime A timestamp indicating the local write time of the
       *     batch this mutation is a part of.
       * @return The mutated document. The returned document may be null, but only
       *     if maybeDoc was null and the mutation would not create a new document.
       */


      function an(t, e, n, r) {
        return t instanceof ln ? function (t, e) {
          if (!on(t.Ge, e)) return e;
          var n = fn(e);
          return new Tn(t.key, n, t.value, {
            Je: !0
          });
        }(t, e) : t instanceof pn ? function (t, e) {
          if (!on(t.Ge, e)) return e;
          var n = fn(e),
              r = dn(t, e);
          return new Tn(t.key, n, r, {
            Je: !0
          });
        }(t, e) : t instanceof vn ? function (t, e, n, r) {
          if (!on(t.Ge, e)) return e;

          var i = yn(t, e),
              o = function (t, e, n, r) {
            for (var i = [], o = 0, u = t; o < u.length; o++) {
              var s = u[o],
                  a = s.transform,
                  c = null;
              n instanceof Tn && (c = n.field(s.field)), null === c && r instanceof Tn && ( // If the current document does not contain a value for the mutated
              // field, use the value that existed before applying this mutation
              // batch. This solves an edge case where a PatchMutation clears the
              // values in a nested map before the TransformMutation is applied.
              c = r.field(s.field)), i.push(ze(a, c, e));
            }

            return i;
          }(t.fieldTransforms, n, e, r),
              u = mn(t, i.data(), o);

          return new Tn(t.key, i.version, u, {
            Je: !0
          });
        }(t, e, r, n) : function (t, e) {
          return on(t.Ge, e) ? new Nn(t.key, H.min()) : e;
        }(t, e);
      }
      /**
       * If this mutation is not idempotent, returns the base value to persist with
       * this mutation. If a base value is returned, the mutation is always applied
       * to this base value, even if document has already been updated.
       *
       * The base value is a sparse object that consists of only the document
       * fields for which this mutation contains a non-idempotent transformation
       * (e.g. a numeric increment). The provided value guarantees consistent
       * behavior for non-idempotent transforms and allow us to return the same
       * latency-compensated value even if the backend has already applied the
       * mutation. The base value is null for idempotent mutations, as they can be
       * re-played even if the backend has already applied them.
       *
       * @return a base value to store along with the mutation, or null for
       * idempotent mutations.
       */


      function cn(t, e) {
        return t instanceof vn ? function (t, e) {
          for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r],
                u = e instanceof Tn ? e.field(o.field) : void 0,
                s = Ke(o.transform, u || null);
            null != s && (n = null == n ? new In().set(o.field, s) : n.set(o.field, s));
          }

          return n ? n.Xe() : null;
        }(t, e) : null;
      }

      function hn(t, e) {
        return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ge.isEqual(e.Ge) && (0
        /* Set */
        === t.type ? t.value.isEqual(e.value) : 1
        /* Patch */
        === t.type ? t.data.isEqual(e.data) && t.Qe.isEqual(e.Qe) : 2
        /* Transform */
        !== t.type || V(t.fieldTransforms, t.fieldTransforms, function (t, e) {
          return function (t, e) {
            return t.field.isEqual(e.field) && function (t, e) {
              return t instanceof We && e instanceof We || t instanceof Ye && e instanceof Ye ? V(t.elements, e.elements, Qt) : t instanceof Xe && e instanceof Xe ? Qt(t.We, e.We) : t instanceof Qe && e instanceof Qe;
            }(t.transform, e.transform);
          }(t, e);
        }));
      }
      /**
       * Returns the version from the given document for use as the result of a
       * mutation. Mutations are defined to return the version of the base document
       * only if it is an existing document. Deleted and unknown documents have a
       * post-mutation version of SnapshotVersion.min().
       */


      function fn(t) {
        return t instanceof Tn ? t.version : H.min();
      }
      /**
       * A mutation that creates or replaces the document at the given key with the
       * object value contents.
       */


      var ln =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).key = t, i.value = n, i.Ge = r, i.type = 0
          /* Set */
          , i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(un),
          pn =
      /** @class */
      function (e) {
        function n(t, n, r, i) {
          var o = this;
          return (o = e.call(this) || this).key = t, o.data = n, o.Qe = r, o.Ge = i, o.type = 1
          /* Patch */
          , o;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(un);

      function dn(t, e) {
        return function (t, e) {
          var n = new In(e);
          return t.Qe.fields.forEach(function (e) {
            if (!e.P()) {
              var r = t.data.field(e);
              null !== r ? n.set(e, r) : n["delete"](e);
            }
          }), n.Xe();
        }(t, e instanceof Tn ? e.data() : bn.empty());
      }

      var vn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2
          /* Transform */
          , // NOTE: We set a precondition of exists: true as a safety-check, since we
          // always combine TransformMutations with a SetMutation or PatchMutation which
          // (if successful) should end up with an existing document.
          r.Ge = rn.exists(!0), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(un);

      function yn(t, e) {
        return e;
      }

      function mn(t, e, n) {
        for (var r = new In(e), i = 0; i < t.fieldTransforms.length; i++) {
          var o = t.fieldTransforms[i];
          r.set(o.field, n[i]);
        }

        return r.Xe();
      }
      /** A mutation that deletes the document at the given key. */


      var gn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).key = t, r.Ge = n, r.type = 3
          /* Delete */
          , r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(un),
          wn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).key = t, r.Ge = n, r.type = 4
          /* Verify */
          , r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(un),
          bn =
      /** @class */
      function () {
        function t(t) {
          this.proto = t;
        }

        return t.empty = function () {
          return new t({
            mapValue: {}
          });
        },
        /**
         * Returns the value at the given path or null.
         *
         * @param path the path to search
         * @return The value at the path or if there it doesn't exist.
         */
        t.prototype.field = function (t) {
          if (t.P()) return this.proto;

          for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!ue(e = e.mapValue.fields[t.get(n)])) return null;
          }

          return (e = (e.mapValue.fields || {})[t.k()]) || null;
        }, t.prototype.isEqual = function (t) {
          return Qt(this.proto, t.proto);
        }, t;
      }(),
          In =
      /** @class */
      function () {
        /**
         * @param baseObject The object to mutate.
         */
        function t(t) {
          void 0 === t && (t = bn.empty()), this.Ze = t,
          /** A map that contains the accumulated changes in this builder. */
          this.tn = new Map();
        }
        /**
         * Sets the field to the provided value.
         *
         * @param path The field path to set.
         * @param value The value to set.
         * @return The current Builder instance.
         */


        return t.prototype.set = function (t, e) {
          return this.en(t, e), this;
        },
        /**
         * Removes the field at the specified path. If there is no field at the
         * specified path, nothing is changed.
         *
         * @param path The field path to remove.
         * @return The current Builder instance.
         */
        t.prototype["delete"] = function (t) {
          return this.en(t, null), this;
        },
        /**
         * Adds `value` to the overlay map at `path`. Creates nested map entries if
         * needed.
         */
        t.prototype.en = function (t, e) {
          for (var n = this.tn, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r),
                o = n.get(i);
            o instanceof Map ? // Re-use a previously created map
            n = o : o && 10
            /* ObjectValue */
            === Kt(o) ? ( // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
            o = new Map(), n.set(i, o), n = o);
          }

          n.set(t.k(), e);
        },
        /** Returns an ObjectValue with all mutations applied. */
        t.prototype.Xe = function () {
          var t = this.nn(Z.U(), this.tn);
          return null != t ? new bn(t) : this.Ze;
        },
        /**
         * Applies any overlays from `currentOverlays` that exist at `currentPath`
         * and returns the merged data at `currentPath` (or null if there were no
         * changes).
         *
         * @param currentPath The path at the current nesting level. Can be set to
         * FieldValue.emptyPath() to represent the root.
         * @param currentOverlays The overlays at the current nesting level in the
         * same format as `overlayMap`.
         * @return The merged data at `currentPath` or null if no modifications
         * were applied.
         */
        t.prototype.nn = function (t, e) {
          var n = this,
              r = !1,
              i = this.Ze.field(t),
              o = ue(i) ? // If there is already data at the current path, base our
          Object.assign({}, i.mapValue.fields) : {};
          return e.forEach(function (e, i) {
            if (e instanceof Map) {
              var u = n.nn(t.child(i), e);
              null != u && (o[i] = u, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
          }), r ? {
            mapValue: {
              fields: o
            }
          } : null;
        }, t;
      }();
      /**
       * Returns a FieldMask built from all fields in a MapValue.
       */


      function En(t) {
        var e = [];
        return G(t.fields || {}, function (t, n) {
          var r = new Z([t]);

          if (ue(n)) {
            var i = En(n.mapValue).fields;
            if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
              e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
              // leaf nodes.
              for (var o = 0, u = i; o < u.length; o++) {
                var s = u[o];
                e.push(r.child(s));
              }
          } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            e.push(r);
        }), new tn(e)
        /**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /**
        * The result of a lookup for a given path may be an existing document or a
        * marker that this document does not exist at a given version.
        */
        ;
      }

      var _n = function _n(t, e) {
        this.key = t, this.version = e;
      },
          Tn =
      /** @class */
      function (e) {
        function n(t, n, r, i) {
          var o = this;
          return (o = e.call(this, t, n) || this).sn = r, o.Je = !!i.Je, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.field = function (t) {
          return this.sn.field(t);
        }, n.prototype.data = function () {
          return this.sn;
        }, n.prototype.rn = function () {
          return this.sn.proto;
        }, n.prototype.isEqual = function (t) {
          return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Je === t.Je && this.hasCommittedMutations === t.hasCommittedMutations && this.sn.isEqual(t.sn);
        }, n.prototype.toString = function () {
          return "Document(" + this.key + ", " + this.version + ", " + this.sn.toString() + ", {hasLocalMutations: " + this.Je + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
        }, Object.defineProperty(n.prototype, "hasPendingWrites", {
          get: function get() {
            return this.Je || this.hasCommittedMutations;
          },
          enumerable: !1,
          configurable: !0
        }), n;
      }(_n),
          Nn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.toString = function () {
          return "NoDocument(" + this.key + ", " + this.version + ")";
        }, Object.defineProperty(n.prototype, "hasPendingWrites", {
          get: function get() {
            return this.hasCommittedMutations;
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.isEqual = function (t) {
          return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
        }, n;
      }(_n),
          An =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.toString = function () {
          return "UnknownDocument(" + this.key + ", " + this.version + ")";
        }, Object.defineProperty(n.prototype, "hasPendingWrites", {
          get: function get() {
            return !0;
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.isEqual = function (t) {
          return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
        }, n;
      }(_n),
          Dn =
      /**
           * Initializes a Query with a path and optional additional query constraints.
           * Path must currently be empty if this is a collection group query.
           */
      function Dn(t, e, n, r, i, o
      /* First */
      , u, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === u && (u = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.on = n, this.filters = r, this.limit = i, this.an = o, this.startAt = u, this.endAt = s, this.cn = null, // The corresponding `Target` of this `Query` instance.
        this.un = null, this.startAt, this.endAt;
      };
      /**
       * Represents a document in Firestore with a key, version, data and whether the
       * data has local mutations applied to it.
       */

      /** Creates a new Query instance with the options provided. */


      function Sn(t, e, n, r, i, o, u, s) {
        return new Dn(t, e, n, r, i, o, u, s);
      }
      /** Creates a new Query for a query that matches all documents at `path` */


      function xn(t) {
        return new Dn(t);
      }
      /**
       * Helper to convert a collection group query into a collection query at a
       * specific path. This is used when executing collection group queries, since
       * we have to split the query into a set of collection queries at multiple
       * paths.
       */


      function kn(t) {
        return !tt(t.limit) && "F"
        /* First */
        === t.an;
      }

      function On(t) {
        return !tt(t.limit) && "L"
        /* Last */
        === t.an;
      }

      function Pn(t) {
        return t.on.length > 0 ? t.on[0].field : null;
      }

      function Ln(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.hn()) return r.field;
        }

        return null;
      }
      /**
       * Checks if any of the provided Operators are included in the query and
       * returns the first one that is, or null if none are.
       */

      /**
       * Returns whether the query matches a collection group rather than a specific
       * collection.
       */


      function Vn(t) {
        return null !== t.collectionGroup;
      }
      /**
       * Returns the implicit order by constraint that is used to execute the Query,
       * which can be different from the order by constraints the user provided (e.g.
       * the SDK and backend always orders by `__name__`).
       */


      function Rn(t) {
        var e = k(t);

        if (null === e.cn) {
          e.cn = [];
          var n = Ln(e),
              r = Pn(e);
          if (null !== n && null === r) // In order to implicitly add key ordering, we must also add the
            // inequality filter field for it to be a valid query.
            // Note that the default inequality field and key ordering is ascending.
            n.W() || e.cn.push(new ir(n)), e.cn.push(new ir(Z.j(), "asc"
            /* ASCENDING */
            ));else {
            for (var i = !1, o = 0, u = e.on; o < u.length; o++) {
              var s = u[o];
              e.cn.push(s), s.field.W() && (i = !0);
            }

            if (!i) {
              // The order of the implicit key ordering always matches the last
              // explicit order by
              var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : "asc"
              /* ASCENDING */
              ;
              e.cn.push(new ir(Z.j(), a));
            }
          }
        }

        return e.cn;
      }
      /**
       * Converts this `Query` instance to it's corresponding `Target` representation.
       */


      function Un(t) {
        var e = k(t);
        if (!e.un) if ("F"
        /* First */
        === e.an) e.un = it(e.path, e.collectionGroup, Rn(e), e.filters, e.limit, e.startAt, e.endAt);else {
          for ( // Flip the orderBy directions since we want the last results
          var n = [], r = 0, i = Rn(e); r < i.length; r++) {
            var o = i[r],
                u = "desc"
            /* DESCENDING */
            === o.dir ? "asc"
            /* ASCENDING */
            : "desc"
            /* DESCENDING */
            ;
            n.push(new ir(o.field, u));
          } // We need to swap the cursors to match the now-flipped query ordering.


          var s = e.endAt ? new tr(e.endAt.position, !e.endAt.before) : null,
              a = e.startAt ? new tr(e.startAt.position, !e.startAt.before) : null; // Now return as a LimitType.First query.

          e.un = it(e.path, e.collectionGroup, n, e.filters, e.limit, s, a);
        }
        return e.un;
      }

      function Cn(t, e, n) {
        return new Dn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
      }

      function qn(t, e) {
        return new Dn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, e, t.endAt);
      }

      function Mn(t, e) {
        return new Dn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, e);
      }

      function Fn(t, e) {
        return ut(Un(t), Un(e)) && t.an === e.an;
      } // TODO(b/29183165): This is used to get a unique string from a query to, for
      // example, use as a dictionary key, but the implementation is subject to
      // collisions. Make it collision-free.


      function Bn(t) {
        return ot(Un(t)) + "|lt:" + t.an;
      }

      function jn(t) {
        return "Query(target=" + function (t) {
          var e = t.path.B();
          return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) {
            return (e = t).field.B() + " " + e.op + " " + Jt(e.value);
            /** Returns a debug description for `filter`. */

            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */
          }).join(", ") + "]"), tt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) {
            return (e = t).field.B() + " (" + e.dir + ")";
            var e;
          }).join(", ") + "]"), t.startAt && (e += ", startAt: " + er(t.startAt)), t.endAt && (e += ", endAt: " + er(t.endAt)), "Target(" + e + ")";
        }(Un(t)) + "; limitType=" + t.an + ")";
      }
      /** Returns whether `doc` matches the constraints of `query`. */


      function zn(t, e) {
        return function (t, e) {
          var n = e.key.path;
          return null !== t.collectionGroup ? e.key.J(t.collectionGroup) && t.path.M(n) : $.X(t.path) ? t.path.isEqual(n) : t.path.$(n);
        }(t, e) && function (t, e) {
          for (var n = 0, r = t.on; n < r.length; n++) {
            var i = r[n]; // order by key always matches

            if (!i.field.W() && null === e.field(i.field)) return !1;
          }

          return !0;
        }(t, e) && function (t, e) {
          for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
          }

          return !0;
        }(t, e) && function (t, e) {
          return !(t.startAt && !nr(t.startAt, Rn(t), e)) && (!t.endAt || !nr(t.endAt, Rn(t), e));
        }(t, e);
      }

      function Gn(t) {
        return function (e, n) {
          for (var r = !1, i = 0, o = Rn(t); i < o.length; i++) {
            var u = o[i],
                s = or(u, e, n);
            if (0 !== s) return s;
            r = r || u.field.W();
          }

          return 0;
        };
      }

      var Kn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
        }
        /**
         * Creates a filter based on the provided arguments.
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.create = function (t, e, r) {
          return t.W() ? "in"
          /* IN */
          === e || "not-in"
          /* NOT_IN */
          === e ? this.ln(t, e, r) : new Qn(t, e, r) : "array-contains"
          /* ARRAY_CONTAINS */
          === e ? new Jn(t, r) : "in"
          /* IN */
          === e ? new Xn(t, r) : "not-in"
          /* NOT_IN */
          === e ? new Zn(t, r) : "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          === e ? new $n(t, r) : new n(t, e, r);
        }, n.ln = function (t, e, n) {
          return "in"
          /* IN */
          === e ? new Wn(t, n) : new Hn(t, n);
        }, n.prototype.matches = function (t) {
          var e = t.field(this.field); // Types do not have to match in NOT_EQUAL filters.

          return "!="
          /* NOT_EQUAL */
          === this.op ? null !== e && this._n(Ht(e, this.value)) : null !== e && Kt(this.value) === Kt(e) && this._n(Ht(e, this.value)); // Only compare types with matching backend order (such as double and int).
        }, n.prototype._n = function (t) {
          switch (this.op) {
            case "<"
            /* LESS_THAN */
            :
              return t < 0;

            case "<="
            /* LESS_THAN_OR_EQUAL */
            :
              return t <= 0;

            case "=="
            /* EQUAL */
            :
              return 0 === t;

            case "!="
            /* NOT_EQUAL */
            :
              return 0 !== t;

            case ">"
            /* GREATER_THAN */
            :
              return t > 0;

            case ">="
            /* GREATER_THAN_OR_EQUAL */
            :
              return t >= 0;

            default:
              return S();
          }
        }, n.prototype.hn = function () {
          return ["<"
          /* LESS_THAN */
          , "<="
          /* LESS_THAN_OR_EQUAL */
          , ">"
          /* GREATER_THAN */
          , ">="
          /* GREATER_THAN_OR_EQUAL */
          , "!="
          /* NOT_EQUAL */
          , "not-in"
          /* NOT_IN */
          ].indexOf(this.op) >= 0;
        }, n;
      }(function () {});

      var Qn =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this, t, n, r) || this).key = $.Y(r.referenceValue), i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = $.D(t.key, this.key);
          return this._n(e);
        }, n;
      }(Kn),
          Wn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, "in"
          /* IN */
          , n) || this).keys = Yn("in"
          /* IN */
          , n), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          return this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }, n;
      }(Kn),
          Hn =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t, "not-in"
          /* NOT_IN */
          , n) || this).keys = Yn("not-in"
          /* NOT_IN */
          , n), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          return !this.keys.some(function (e) {
            return e.isEqual(t.key);
          });
        }, n;
      }(Kn);
      /** Filter that matches on key fields within an array. */


      function Yn(t, e) {
        var n;
        return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (t) {
          return $.Y(t.referenceValue);
        });
      }
      /** A Filter that implements the array-contains operator. */


      var Jn =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "array-contains"
          /* ARRAY_CONTAINS */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = t.field(this.field);
          return re(e) && Wt(e.arrayValue, this.value);
        }, n;
      }(Kn),
          Xn =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "in"
          /* IN */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = t.field(this.field);
          return null !== e && Wt(this.value.arrayValue, e);
        }, n;
      }(Kn),
          Zn =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "not-in"
          /* NOT_IN */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          if (Wt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
          })) return !1;
          var e = t.field(this.field);
          return null !== e && !Wt(this.value.arrayValue, e);
        }, n;
      }(Kn),
          $n =
      /** @class */
      function (e) {
        function n(t, n) {
          return e.call(this, t, "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          , n) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.matches = function (t) {
          var e = this,
              n = t.field(this.field);
          return !(!re(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
            return Wt(e.value.arrayValue, t);
          });
        }, n;
      }(Kn),
          tr = function tr(t, e) {
        this.position = t, this.before = e;
      };
      /** A Filter that implements the IN operator. */


      function er(t) {
        // TODO(b/29183165): Make this collision robust.
        return (t.before ? "b" : "a") + ":" + t.position.map(function (t) {
          return Jt(t);
        }).join(",");
      }
      /**
       * Returns true if a document sorts before a bound using the provided sort
       * order.
       */


      function nr(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
              u = t.position[i];
          if (r = o.field.W() ? $.D($.Y(u.referenceValue), n.key) : Ht(u, n.field(o.field)), "desc"
          /* DESCENDING */
          === o.dir && (r *= -1), 0 !== r) break;
        }

        return t.before ? r <= 0 : r < 0;
      }

      function rr(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length) return !1;

        for (var n = 0; n < t.position.length; n++) {
          if (!Qt(t.position[n], e.position[n])) return !1;
        }

        return !0;
      }
      /**
       * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
       */


      var ir = function ir(t, e
      /* ASCENDING */
      ) {
        void 0 === e && (e = "asc"), this.field = t, this.dir = e;
      };

      function or(t, e, n) {
        var r = t.field.W() ? $.D(e.key, n.key) : function (t, e, n) {
          var r = e.field(t),
              i = n.field(t);
          return null !== r && null !== i ? Ht(r, i) : S();
        }(t.field, e, n);

        switch (t.dir) {
          case "asc"
          /* ASCENDING */
          :
            return r;

          case "desc"
          /* DESCENDING */
          :
            return -1 * r;

          default:
            return S();
        }
      }

      function ur(t, e) {
        return t.dir === e.dir && t.field.isEqual(e.field);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var sr = function sr() {
        var t = this;
        this.promise = new Promise(function (e, n) {
          t.resolve = e, t.reject = n;
        });
      },
          ar =
      /** @class */
      function () {
        function t(
        /**
         * The AsyncQueue to run backoff operations on.
         */
        t,
        /**
         * The ID to use when scheduling backoff operations on the AsyncQueue.
         */
        e,
        /**
         * The initial delay (used as the base delay on the first retry attempt).
         * Note that jitter will still be applied, so the actual delay could be as
         * little as 0.5*initialDelayMs.
         */
        n
        /**
         * The multiplier to use to determine the extended base delay after each
         * attempt.
         */
        , r
        /**
         * The maximum base delay after which no further backoff is performed.
         * Note that jitter will still be applied, so the actual delay could be as
         * much as 1.5*maxDelayMs.
         */
        , i) {
          void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.fn = t, this.dn = e, this.wn = n, this.En = r, this.Tn = i, this.In = 0, this.mn = null,
          /** The last backoff attempt, as epoch milliseconds. */
          this.An = Date.now(), this.reset();
        }
        /**
         * Resets the backoff delay.
         *
         * The very next backoffAndWait() will have no delay. If it is called again
         * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
         * subsequent ones will increase according to the backoffFactor.
         */


        return t.prototype.reset = function () {
          this.In = 0;
        },
        /**
         * Resets the backoff delay to the maximum delay (e.g. for use after a
         * RESOURCE_EXHAUSTED error).
         */
        t.prototype.Rn = function () {
          this.In = this.Tn;
        },
        /**
         * Returns a promise that resolves after currentDelayMs, and increases the
         * delay for any subsequent attempts. If there was a pending backoff operation
         * already, it will be canceled.
         */
        t.prototype.Pn = function (t) {
          var e = this; // Cancel any pending backoff operation.

          this.cancel(); // First schedule using the current base (which may be 0 and should be
          // honored as such).

          var n = Math.floor(this.In + this.gn()),
              r = Math.max(0, Date.now() - this.An),
              i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

          i > 0 && T("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.In + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.mn = this.fn.yn(this.dn, i, function () {
            return e.An = Date.now(), t();
          }), // Apply backoff factor to determine next delay and ensure it is within
          // bounds.
          this.In *= this.En, this.In < this.wn && (this.In = this.wn), this.In > this.Tn && (this.In = this.Tn);
        }, t.prototype.Vn = function () {
          null !== this.mn && (this.mn.pn(), this.mn = null);
        }, t.prototype.cancel = function () {
          null !== this.mn && (this.mn.cancel(), this.mn = null);
        },
        /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
        t.prototype.gn = function () {
          return (Math.random() - .5) * this.In;
        }, t;
      }(),
          cr =
      /** @class */
      function () {
        function t(t) {
          var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
          // not the user's raw next() or catch() callbacks.

          this.bn = null, this.vn = null, // When the operation resolves, we'll set result or error and mark isDone.
          this.result = void 0, this.error = void 0, this.Sn = !1, // Set to true when .then() or .catch() are called and prevents additional
          // chaining.
          this.Dn = !1, t(function (t) {
            e.Sn = !0, e.result = t, e.bn && // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.bn(t);
          }, function (t) {
            e.Sn = !0, e.error = t, e.vn && e.vn(t);
          });
        }

        return t.prototype["catch"] = function (t) {
          return this.next(void 0, t);
        }, t.prototype.next = function (e, n) {
          var r = this;
          return this.Dn && S(), this.Dn = !0, this.Sn ? this.error ? this.Cn(n, this.error) : this.Nn(e, this.result) : new t(function (t, i) {
            r.bn = function (n) {
              r.Nn(e, n).next(t, i);
            }, r.vn = function (e) {
              r.Cn(n, e).next(t, i);
            };
          });
        }, t.prototype.xn = function () {
          var t = this;
          return new Promise(function (e, n) {
            t.next(e, n);
          });
        }, t.prototype.Fn = function (e) {
          try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
          } catch (e) {
            return t.reject(e);
          }
        }, t.prototype.Nn = function (e, n) {
          return e ? this.Fn(function () {
            return e(n);
          }) : t.resolve(n);
        }, t.prototype.Cn = function (e, n) {
          return e ? this.Fn(function () {
            return e(n);
          }) : t.reject(n);
        }, t.resolve = function (e) {
          return new t(function (t, n) {
            t(e);
          });
        }, t.reject = function (e) {
          return new t(function (t, n) {
            n(e);
          });
        }, t.On = function ( // Accept all Promise types in waitFor().
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        e) {
          return new t(function (t, n) {
            var r = 0,
                i = 0,
                o = !1;
            e.forEach(function (e) {
              ++r, e.next(function () {
                ++i, o && i === r && t();
              }, function (t) {
                return n(t);
              });
            }), o = !0, i === r && t();
          });
        },
        /**
         * Given an array of predicate functions that asynchronously evaluate to a
         * boolean, implements a short-circuiting `or` between the results. Predicates
         * will be evaluated until one of them returns `true`, then stop. The final
         * result will be whether any of them returned `true`.
         */
        t.kn = function (e) {
          for (var n = t.resolve(!1), r = function r(e) {
            n = n.next(function (n) {
              return n ? t.resolve(n) : e();
            });
          }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
          }

          return n;
        }, t.forEach = function (t, e) {
          var n = this,
              r = [];
          return t.forEach(function (t, i) {
            r.push(e.call(n, t, i));
          }), this.On(r);
        }, t;
      }(),
          hr =
      /** @class */
      function () {
        /*
         * Creates a new SimpleDb wrapper for IndexedDb database `name`.
         *
         * Note that `version` must not be a downgrade. IndexedDB does not support
         * downgrading the schema version. We currently do not support any way to do
         * versioning outside of IndexedDB's versioning mechanism, as only
         * version-upgrade transactions are allowed to do things like create
         * objectstores.
         */
        function t(e, n, r) {
          this.name = e, this.version = n, this.Mn = r, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
          // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
          // whatever reason it's much harder to hit after 12.2 so we only proactively
          // log on 12.2.
          12.2 === t.$n(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getUA"])()) && N("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
        }
        /** Deletes the specified database. */


        return t["delete"] = function (t) {
          return T("SimpleDb", "Removing database:", t), yr(window.indexedDB.deleteDatabase(t)).xn();
        },
        /** Returns true if IndexedDB is available in the current environment. */
        t.Ln = function () {
          if ("undefined" == typeof indexedDB) return !1;
          if (t.Bn()) return !0; // We extensively use indexed array values and compound keys,
          // which IE and Edge do not support. However, they still have indexedDB
          // defined on the window, so we need to check for them here and make sure
          // to return that persistence is not enabled for those browsers.
          // For tracking support of this feature, see here:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
          // Check the UA string to find out the browser.

          var e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getUA"])(),
              n = t.$n(e),
              r = 0 < n && n < 10,
              i = t.qn(e),
              o = 0 < i && i < 4.5; // IE 10
          // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
          // IE 11
          // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
          // Edge
          // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
          // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
          // iOS Safari: Disable for users running iOS version < 10.

          return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || o);
        },
        /**
         * Returns true if the backing IndexedDB store is the Node IndexedDBShim
         * (see https://github.com/axemclion/IndexedDBShim).
         */
        t.Bn = function () {
          var t;
          return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Un);
        },
        /** Helper to get a typed SimpleDbStore from a transaction. */
        t.Kn = function (t, e) {
          return t.store(e);
        }, // visible for testing

        /** Parse User Agent to determine iOS version. Returns -1 if not found. */
        t.$n = function (t) {
          var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
              n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
          return Number(n);
        }, // visible for testing

        /** Parse User Agent to determine Android version. Returns -1 if not found. */
        t.qn = function (t) {
          var e = t.match(/Android ([\d.]+)/i),
              n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
          return Number(n);
        },
        /**
         * Opens the specified database, creating or upgrading it if necessary.
         */
        t.prototype.Qn = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e,
                r = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.db ? [3
                  /*break*/
                  , 2] : (T("SimpleDb", "Opening database:", this.name), e = this, [4
                  /*yield*/
                  , new Promise(function (e, n) {
                    // TODO(mikelehen): Investigate browser compatibility.
                    // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                    // suggests IE9 and older WebKit browsers handle upgrade
                    // differently. They expect setVersion, as described here:
                    // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                    var i = indexedDB.open(r.name, r.version);
                    i.onsuccess = function (t) {
                      var n = t.target.result;
                      e(n);
                    }, i.onblocked = function () {
                      n(new lr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                    }, i.onerror = function (e) {
                      var r = e.target.error;
                      "VersionError" === r.name ? n(new I(b.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new lr(t, r));
                    }, i.onupgradeneeded = function (t) {
                      T("SimpleDb", 'Database "' + r.name + '" requires upgrade from version:', t.oldVersion);
                      var e = t.target.result;
                      r.Mn.createOrUpgrade(e, i.transaction, t.oldVersion, r.version).next(function () {
                        T("SimpleDb", "Database upgrade to version " + r.version + " complete");
                      });
                    };
                  })]);

                case 1:
                  e.db = n.sent(), n.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , (this.Wn && (this.db.onversionchange = function (t) {
                    return r.Wn(t);
                  }), this.db)];
              }
            });
          });
        }, t.prototype.jn = function (t) {
          this.Wn = t, this.db && (this.db.onversionchange = function (e) {
            return t(e);
          });
        }, t.prototype.runTransaction = function (t, r, i, o) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e, u, s, a, c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (h) {
              switch (h.label) {
                case 0:
                  e = "readonly" === r, u = 0, s = function s() {
                    var r, s, c, h, f;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          ++u, n.label = 1;

                        case 1:
                          return n.trys.push([1, 4,, 5]), [4
                          /*yield*/
                          , a.Qn(t)];

                        case 2:
                          // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                          // fire), but still return the original transactionFnResult back to the
                          // caller.
                          return a.db = n.sent(), r = dr.open(a.db, t, e ? "readonly" : "readwrite", i), s = o(r)["catch"](function (t) {
                            // Abort the transaction if there was an error.
                            return r.abort(t), cr.reject(t);
                          }).xn(), c = {}, s["catch"](function () {}), [4
                          /*yield*/
                          , r.Gn];

                        case 3:
                          return [2
                          /*return*/
                          , (c.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                          // fire), but still return the original transactionFnResult back to the
                          // caller.
                          n.sent(), s), c)];

                        case 4:
                          return h = n.sent(), f = "FirebaseError" !== h.name && u < 3, T("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", f), a.close(), f ? [3
                          /*break*/
                          , 5] : [2
                          /*return*/
                          , {
                            value: Promise.reject(h)
                          }];

                        case 5:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  }, a = this, h.label = 1;

                case 1:
                  return [5
                  /*yield**/
                  , s()];

                case 2:
                  if ("object" == typeof (c = h.sent())) return [2
                  /*return*/
                  , c.value];
                  h.label = 3;

                case 3:
                  return [3
                  /*break*/
                  , 1];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.close = function () {
          this.db && this.db.close(), this.db = void 0;
        }, t;
      }(),
          fr =
      /** @class */
      function () {
        function t(t) {
          this.zn = t, this.Hn = !1, this.Yn = null;
        }

        return Object.defineProperty(t.prototype, "Sn", {
          get: function get() {
            return this.Hn;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "Jn", {
          get: function get() {
            return this.Yn;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "cursor", {
          set: function set(t) {
            this.zn = t;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * This function can be called to stop iteration at any point.
         */
        t.prototype.done = function () {
          this.Hn = !0;
        },
        /**
         * This function can be called to skip to that next key, which could be
         * an index or a primary key.
         */
        t.prototype.Xn = function (t) {
          this.Yn = t;
        },
        /**
         * Delete the current cursor value from the object store.
         *
         * NOTE: You CANNOT do this with a keysOnly query.
         */
        t.prototype["delete"] = function () {
          return yr(this.zn["delete"]());
        }, t;
      }(),
          lr =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, b.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n) || this).name = "IndexedDbTransactionError", r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(I);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A helper for running delayed tasks following an exponential backoff curve
       * between attempts.
       *
       * Each delay is made up of a "base" delay which follows the exponential
       * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
       * base delay. This prevents clients from accidentally synchronizing their
       * delays causing spikes of load to the backend.
       */

      /** Verifies whether `e` is an IndexedDbTransactionError. */


      function pr(t) {
        // Use name equality, as instanceof checks on errors don't work with errors
        // that wrap other errors.
        return "IndexedDbTransactionError" === t.name;
      }
      /**
       * Wraps an IDBTransaction and exposes a store() method to get a handle to a
       * specific object store.
       */


      var dr =
      /** @class */
      function () {
        function t(t, e) {
          var n = this;
          this.action = t, this.transaction = e, this.aborted = !1,
          /**
               * A promise that resolves with the result of the IndexedDb transaction.
               */
          this.Zn = new sr(), this.transaction.oncomplete = function () {
            n.Zn.resolve();
          }, this.transaction.onabort = function () {
            e.error ? n.Zn.reject(new lr(t, e.error)) : n.Zn.resolve();
          }, this.transaction.onerror = function (e) {
            var r = gr(e.target.error);
            n.Zn.reject(new lr(t, r));
          };
        }

        return t.open = function (e, n, r, i) {
          try {
            return new t(n, e.transaction(i, r));
          } catch (e) {
            throw new lr(n, e);
          }
        }, Object.defineProperty(t.prototype, "Gn", {
          get: function get() {
            return this.Zn.promise;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.abort = function (t) {
          t && this.Zn.reject(t), this.aborted || (T("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
        },
        /**
         * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
         * operations performed on the SimpleDbStore happen within the context of this
         * transaction and it cannot be used anymore once the transaction is
         * completed.
         *
         * Note that we can't actually enforce that the KeyType and ValueType are
         * correct, but they allow type safety through the rest of the consuming code.
         */
        t.prototype.store = function (t) {
          var e = this.transaction.objectStore(t);
          return new vr(e);
        }, t;
      }(),
          vr =
      /** @class */
      function () {
        function t(t) {
          this.store = t;
        }

        return t.prototype.put = function (t, e) {
          var n;
          return void 0 !== e ? (T("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (T("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), yr(n);
        },
        /**
         * Adds a new value into an Object Store and returns the new key. Similar to
         * IndexedDb's `add()`, this method will fail on primary key collisions.
         *
         * @param value The object to write.
         * @return The key of the value to add.
         */
        t.prototype.add = function (t) {
          return T("SimpleDb", "ADD", this.store.name, t, t), yr(this.store.add(t));
        },
        /**
         * Gets the object with the specified key from the specified store, or null
         * if no object exists with the specified key.
         *
         * @key The key of the object to get.
         * @return The object with the specified key or null if no object exists.
         */
        t.prototype.get = function (t) {
          var e = this; // We're doing an unsafe cast to ValueType.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

          return yr(this.store.get(t)).next(function (n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), T("SimpleDb", "GET", e.store.name, t, n), n;
          });
        }, t.prototype["delete"] = function (t) {
          return T("SimpleDb", "DELETE", this.store.name, t), yr(this.store["delete"](t));
        },
        /**
         * If we ever need more of the count variants, we can add overloads. For now,
         * all we need is to count everything in a store.
         *
         * Returns the number of rows in the store.
         */
        t.prototype.count = function () {
          return T("SimpleDb", "COUNT", this.store.name), yr(this.store.count());
        }, t.prototype.ts = function (t, e) {
          var n = this.cursor(this.options(t, e)),
              r = [];
          return this.es(n, function (t, e) {
            r.push(e);
          }).next(function () {
            return r;
          });
        }, t.prototype.ns = function (t, e) {
          T("SimpleDb", "DELETE ALL", this.store.name);
          var n = this.options(t, e);
          n.ss = !1;
          var r = this.cursor(n);
          return this.es(r, function (t, e, n) {
            return n["delete"]();
          });
        }, t.prototype.rs = function (t, e) {
          var n;
          e ? n = t : (n = {}, e = t);
          var r = this.cursor(n);
          return this.es(r, e);
        },
        /**
         * Iterates over a store, but waits for the given callback to complete for
         * each entry before iterating the next entry. This allows the callback to do
         * asynchronous work to determine if this iteration should continue.
         *
         * The provided callback should return `true` to continue iteration, and
         * `false` otherwise.
         */
        t.prototype.os = function (t) {
          var e = this.cursor({});
          return new cr(function (n, r) {
            e.onerror = function (t) {
              var e = gr(t.target.error);
              r(e);
            }, e.onsuccess = function (e) {
              var r = e.target.result;
              r ? t(r.primaryKey, r.value).next(function (t) {
                t ? r["continue"]() : n();
              }) : n();
            };
          });
        }, t.prototype.es = function (t, e) {
          var n = [];
          return new cr(function (r, i) {
            t.onerror = function (t) {
              i(t.target.error);
            }, t.onsuccess = function (t) {
              var i = t.target.result;

              if (i) {
                var o = new fr(i),
                    u = e(i.primaryKey, i.value, o);

                if (u instanceof cr) {
                  var s = u["catch"](function (t) {
                    return o.done(), cr.reject(t);
                  });
                  n.push(s);
                }

                o.Sn ? r() : null === o.Jn ? i["continue"]() : i["continue"](o.Jn);
              } else r();
            };
          }).next(function () {
            return cr.On(n);
          });
        }, t.prototype.options = function (t, e) {
          var n = void 0;
          return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
          };
        }, t.prototype.cursor = function (t) {
          var e = "next";

          if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.ss ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
          }

          return this.store.openCursor(t.range, e);
        }, t;
      }();
      /**
       * A wrapper around an IDBObjectStore providing an API that:
       *
       * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
       * methods for acting against the object store.
       * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
       * method return a PersistencePromise instead.
       * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
       * intermediate IndexedDB types (IDBCursorWithValue, etc.)
       */

      /**
       * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
       * handlers to resolve / reject the PersistencePromise as appropriate.
       */


      function yr(t) {
        return new cr(function (e, n) {
          t.onsuccess = function (t) {
            var n = t.target.result;
            e(n);
          }, t.onerror = function (t) {
            var e = gr(t.target.error);
            n(e);
          };
        });
      } // Guard so we only report the error once.


      var mr = !1;

      function gr(t) {
        var e = hr.$n(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getUA"])());

        if (e >= 12.2 && e < 13) {
          var n = "An internal error was encountered in the Indexed Database server";

          if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var r = new I("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return mr || (mr = !0, // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout(function () {
              throw r;
            }, 0)), r;
          }
        }

        return t;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** The Platform's 'window' implementation or null if not available. */


      function wr() {
        // `window` is not always available, e.g. in ReactNative and WebWorkers.
        // eslint-disable-next-line no-restricted-globals
        return "undefined" != typeof window ? window : null;
      }
      /** The Platform's 'document' implementation or null if not available. */


      function br() {
        // `document` is not always available, e.g. in ReactNative and WebWorkers.
        // eslint-disable-next-line no-restricted-globals
        return "undefined" != typeof document ? document : null;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents an operation scheduled to be run in the future on an AsyncQueue.
       *
       * It is created via DelayedOperation.createAndSchedule().
       *
       * Supports cancellation (via cancel()) and early execution (via skipDelay()).
       *
       * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
       * in newer versions of TypeScript defines `finally`, which is not available in
       * IE.
       */


      var Ir =
      /** @class */
      function () {
        function t(t, e, n, r, i) {
          this.cs = t, this.dn = e, this.us = n, this.op = r, this.hs = i, this.ls = new sr(), this.then = this.ls.promise.then.bind(this.ls.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
          // and so we attach a dummy catch callback to avoid
          // 'UnhandledPromiseRejectionWarning' log spam.
          this.ls.promise["catch"](function (t) {})
          /**
          * Creates and returns a DelayedOperation that has been scheduled to be
          * executed on the provided asyncQueue after the provided delayMs.
          *
          * @param asyncQueue The queue to schedule the operation on.
          * @param id A Timer ID identifying the type of operation this is.
          * @param delayMs The delay (ms) before the operation should be scheduled.
          * @param op The operation to run.
          * @param removalCallback A callback to be called synchronously once the
          *   operation is executed or canceled, notifying the AsyncQueue to remove it
          *   from its delayedOperations list.
          *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
          *   the DelayedOperation class public.
          */
          ;
        }

        return t._s = function (e, n, r, i, o) {
          var u = new t(e, n, Date.now() + r, i, o);
          return u.start(r), u;
        },
        /**
         * Starts the timer. This is called immediately after construction by
         * createAndSchedule().
         */
        t.prototype.start = function (t) {
          var e = this;
          this.fs = setTimeout(function () {
            return e.ds();
          }, t);
        },
        /**
         * Queues the operation to run immediately (if it hasn't already been run or
         * canceled).
         */
        t.prototype.pn = function () {
          return this.ds();
        },
        /**
         * Cancels the operation if it hasn't already been executed or canceled. The
         * promise will be rejected.
         *
         * As long as the operation has not yet been run, calling cancel() provides a
         * guarantee that the operation will not be run.
         */
        t.prototype.cancel = function (t) {
          null !== this.fs && (this.clearTimeout(), this.ls.reject(new I(b.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
        }, t.prototype.ds = function () {
          var t = this;
          this.cs.ws(function () {
            return null !== t.fs ? (t.clearTimeout(), t.op().then(function (e) {
              return t.ls.resolve(e);
            })) : Promise.resolve();
          });
        }, t.prototype.clearTimeout = function () {
          null !== this.fs && (this.hs(this), clearTimeout(this.fs), this.fs = null);
        }, t;
      }(),
          Er =
      /** @class */
      function () {
        function t() {
          var t = this; // The last promise in the queue.

          this.Es = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
          // retried with backoff.
          this.Ts = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
          // be changed again.
          this.Is = !1, // Operations scheduled to be queued in the future. Operations are
          // automatically removed after they are run or canceled.
          this.As = [], // visible for testing
          this.Rs = null, // Flag set while there's an outstanding AsyncQueue operation, used for
          // assertion sanity-checks.
          this.Ps = !1, // List of TimerIds to fast-forward delays for.
          this.gs = [], // Backoff timer used to schedule retries for retryable operations
          this.ys = new ar(this, "async_queue_retry"
          /* AsyncQueueRetry */
          ), // Visibility handler that triggers an immediate retry of all retryable
          // operations. Meant to speed up recovery when we regain file system access
          // after page comes into foreground.
          this.Vs = function () {
            var e = br();
            e && T("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.ys.Vn();
          };
          var e = br();
          e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Vs);
        }

        return Object.defineProperty(t.prototype, "ps", {
          // Is this AsyncQueue being shut down? If true, this instance will not enqueue
          // any new operations, Promises from enqueue requests will not resolve.
          get: function get() {
            return this.Is;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Adds a new operation to the queue without waiting for it to complete (i.e.
         * we ignore the Promise result).
         */
        t.prototype.ws = function (t) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.enqueue(t);
        },
        /**
         * Regardless if the queue has initialized shutdown, adds a new operation to the
         * queue without waiting for it to complete (i.e. we ignore the Promise result).
         */
        t.prototype.bs = function (t) {
          this.vs(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.Ss(t);
        },
        /**
         * Initialize the shutdown of this queue. Once this method is called, the
         * only possible way to request running an operation is through
         * `enqueueEvenWhileRestricted()`.
         */
        t.prototype.Ds = function () {
          if (!this.Is) {
            this.Is = !0;
            var t = br();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Vs);
          }
        },
        /**
         * Adds a new operation to the queue. Returns a promise that will be resolved
         * when the promise returned by the new operation is (with its value).
         */
        t.prototype.enqueue = function (t) {
          return this.vs(), this.Is ? new Promise(function (t) {}) : this.Ss(t);
        },
        /**
         * Enqueue a retryable operation.
         *
         * A retryable operation is rescheduled with backoff if it fails with a
         * IndexedDbTransactionError (the error type used by SimpleDb). All
         * retryable operations are executed in order and only run if all prior
         * operations were retried successfully.
         */
        t.prototype.Cs = function (t) {
          var e = this;
          this.ws(function () {
            return e.Ts.push(t), e.Ns();
          });
        },
        /**
         * Runs the next operation from the retryable queue. If the operation fails,
         * reschedules with backoff.
         */
        t.prototype.Ns = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t,
                e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  if (0 === this.Ts.length) return [3
                  /*break*/
                  , 5];
                  n.label = 1;

                case 1:
                  return n.trys.push([1, 3,, 4]), [4
                  /*yield*/
                  , this.Ts[0]()];

                case 2:
                  return n.sent(), this.Ts.shift(), this.ys.reset(), [3
                  /*break*/
                  , 4];

                case 3:
                  if (!pr(t = n.sent())) throw t; // Failure will be handled by AsyncQueue

                  return T("AsyncQueue", "Operation failed with retryable error: " + t), [3
                  /*break*/
                  , 4];

                case 4:
                  this.Ts.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
                  // This is necessary to run retryable operations that failed during
                  // their initial attempt since we don't know whether they are already
                  // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                  // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                  // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                  // call scheduled here.
                  // Since `backoffAndRun()` cancels an existing backoff and schedules a
                  // new backoff on every call, there is only ever a single additional
                  // operation in the queue.
                  this.ys.Pn(function () {
                    return e.Ns();
                  }), n.label = 5;

                case 5:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.Ss = function (t) {
          var e = this,
              n = this.Es.then(function () {
            return e.Ps = !0, t()["catch"](function (t) {
              // Re-throw the error so that this.tail becomes a rejected Promise and
              // all further attempts to chain (via .then) will just short-circuit
              // and return the rejected Promise.
              throw e.Rs = t, e.Ps = !1, N("INTERNAL UNHANDLED ERROR: ",
              /**
              * Chrome includes Error.message in Error.stack. Other browsers do not.
              * This returns expected output of message + stack when available.
              * @param error Error or FirestoreError
              */
              function (t) {
                var e = t.message || "";
                return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
              }(t)), t;
            }).then(function (t) {
              return e.Ps = !1, t;
            });
          });
          return this.Es = n, n;
        },
        /**
         * Schedules an operation to be queued on the AsyncQueue once the specified
         * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
         * or fast-forward the operation prior to its running.
         */
        t.prototype.yn = function (t, e, n) {
          var r = this;
          this.vs(), // Fast-forward delays for timerIds that have been overriden.
          this.gs.indexOf(t) > -1 && (e = 0);

          var i = Ir._s(this, t, e, n, function (t) {
            return r.xs(t);
          });

          return this.As.push(i), i;
        }, t.prototype.vs = function () {
          this.Rs && S();
        },
        /**
         * Verifies there's an operation currently in-progress on the AsyncQueue.
         * Unfortunately we can't verify that the running code is in the promise chain
         * of that operation, so this isn't a foolproof check, but it should be enough
         * to catch some bugs.
         */
        t.prototype.Fs = function () {},
        /**
         * Waits until all currently queued tasks are finished executing. Delayed
         * operations are not run.
         */
        t.prototype.Os = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4
                  /*yield*/
                  , t = this.Es];

                case 1:
                  e.sent(), e.label = 2;

                case 2:
                  if (t !== this.Es) return [3
                  /*break*/
                  , 0];
                  e.label = 3;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * For Tests: Determine if a delayed operation with a particular TimerId
         * exists.
         */
        t.prototype.ks = function (t) {
          for (var e = 0, n = this.As; e < n.length; e++) {
            if (n[e].dn === t) return !0;
          }

          return !1;
        },
        /**
         * For Tests: Runs some or all delayed operations early.
         *
         * @param lastTimerId Delayed operations up to and including this TimerId will
         *  be drained. Pass TimerId.All to run all delayed operations.
         * @returns a Promise that resolves once all operations have been run.
         */
        t.prototype.Ms = function (t) {
          var e = this; // Note that draining may generate more delayed ops, so we do that first.

          return this.Os().then(function () {
            // Run ops in the same order they'd run if they ran naturally.
            e.As.sort(function (t, e) {
              return t.us - e.us;
            });

            for (var n = 0, r = e.As; n < r.length; n++) {
              var i = r[n];
              if (i.pn(), "all"
              /* All */
              !== t && i.dn === t) break;
            }

            return e.Os();
          });
        },
        /**
         * For Tests: Skip all subsequent delays for a timer id.
         */
        t.prototype.$s = function (t) {
          this.gs.push(t);
        },
        /** Called once a DelayedOperation is run or canceled. */
        t.prototype.xs = function (t) {
          // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
          var e = this.As.indexOf(t);
          this.As.splice(e, 1);
        }, t;
      }();
      /**
       * Returns a FirestoreError that can be surfaced to the user if the provided
       * error is an IndexedDbTransactionError. Re-throws the error otherwise.
       */


      function _r(t, e) {
        if (N("AsyncQueue", e + ": " + t), pr(t)) return new I(b.UNAVAILABLE, e + ": " + t);
        throw t;
      }

      var Tr = function Tr() {
        this.Ls = void 0, this.listeners = [];
      },
          Nr = function Nr() {
        this.Bs = new Q(function (t) {
          return Bn(t);
        }, Fn), this.onlineState = "Unknown"
        /* Unknown */
        , this.qs = new Set();
      };

      function Ar(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a, c;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                if (e = k(t), i = r.query, o = !1, (u = e.Bs.get(i)) || (o = !0, u = new Tr()), !o) return [3
                /*break*/
                , 4];
                n.label = 1;

              case 1:
                return n.trys.push([1, 3,, 4]), s = u, [4
                /*yield*/
                , e.Us(i)];

              case 2:
                return s.Ls = n.sent(), [3
                /*break*/
                , 4];

              case 3:
                return a = n.sent(), c = _r(a, "Initialization of query '" + jn(r.query) + "' failed"), [2
                /*return*/
                , void r.onError(c)];

              case 4:
                return e.Bs.set(i, u), u.listeners.push(r), // Run global snapshot listeners if a consistent snapshot has been emitted.
                r.Ks(e.onlineState), u.Ls && r.Qs(u.Ls) && kr(e), [2
                /*return*/
                ];
            }
          });
        });
      }

      function Dr(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            return e = k(t), i = r.query, o = !1, (u = e.Bs.get(i)) && (s = u.listeners.indexOf(r)) >= 0 && (u.listeners.splice(s, 1), o = 0 === u.listeners.length), o ? [2
            /*return*/
            , (e.Bs["delete"](i), e.Ws(i))] : [2
            /*return*/
            ];
          });
        });
      }

      function Sr(t, e) {
        for (var n = k(t), r = !1, i = 0, o = e; i < o.length; i++) {
          var u = o[i],
              s = u.query,
              a = n.Bs.get(s);

          if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
              h[c].Qs(u) && (r = !0);
            }

            a.Ls = u;
          }
        }

        r && kr(n);
      }

      function xr(t, e, n) {
        var r = k(t),
            i = r.Bs.get(e);
        if (i) for (var o = 0, u = i.listeners; o < u.length; o++) {
          u[o].onError(n);
        } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.

        r.Bs["delete"](e);
      } // Call all global snapshot listeners that have been set.


      function kr(t) {
        t.qs.forEach(function (t) {
          t.next();
        });
      }
      /**
       * QueryListener takes a series of internal view snapshots and determines
       * when to raise the event.
       *
       * It uses an Observer to dispatch events.
       */


      var Or =
      /** @class */
      function () {
        function t(t, e, n) {
          this.query = t, this.js = e,
          /**
               * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
               * observer. This flag is set to true once we've actually raised an event.
               */
          this.Gs = !1, this.zs = null, this.onlineState = "Unknown"
          /* Unknown */
          , this.options = n || {}
          /**
          * Applies the new ViewSnapshot to this listener, raising a user-facing event
          * if applicable (depending on what changed, whether the user has opted into
          * metadata-only changes, etc.). Returns true if a user-facing event was
          * indeed raised.
          */
          ;
        }

        return t.prototype.Qs = function (t) {
          if (!this.options.includeMetadataChanges) {
            for ( // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
              var i = r[n];
              3
              /* Metadata */
              !== i.type && e.push(i);
            }

            t = new Ot(t.query, t.docs, t.Kt, e, t.Qt, t.fromCache, t.Wt,
            /* excludesMetadataChanges= */
            !0);
          }

          var o = !1;
          return this.Gs ? this.Hs(t) && (this.js.next(t), o = !0) : this.Ys(t, this.onlineState) && (this.Js(t), o = !0), this.zs = t, o;
        }, t.prototype.onError = function (t) {
          this.js.error(t);
        },
        /** Returns whether a snapshot was raised. */
        t.prototype.Ks = function (t) {
          this.onlineState = t;
          var e = !1;
          return this.zs && !this.Gs && this.Ys(this.zs, t) && (this.Js(this.zs), e = !0), e;
        }, t.prototype.Ys = function (t, e) {
          // Always raise the first event when we're synced
          if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
          // or Online if we wait long enough).

          var n = "Offline"
          /* Offline */
          !== e; // Don't raise the event if we're online, aren't synced yet (checked
          // above) and are waiting for a sync.

          return !(this.options.Xs && n || t.docs.P() && "Offline"
          /* Offline */
          !== e); // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Hs = function (t) {
          // We don't need to handle includeDocumentMetadataChanges here because
          // the Metadata only changes have already been stripped out if needed.
          // At this point the only changes we will see are the ones we should
          // propagate.
          if (t.docChanges.length > 0) return !0;
          var e = this.zs && this.zs.hasPendingWrites !== t.hasPendingWrites;
          return !(!t.Wt && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
          // to get here if there were only metadata docChanges and they got
          // stripped out.
        }, t.prototype.Js = function (t) {
          t = Ot.Gt(t.query, t.docs, t.Qt, t.fromCache), this.Gs = !0, this.js.next(t);
        }, t;
      }(),
          Pr =
      /** @class */
      function () {
        function t(t) {
          this.uid = t;
        }

        return t.prototype.Zs = function () {
          return null != this.uid;
        },
        /**
         * Returns a key representing this user, suitable for inclusion in a
         * dictionary.
         */
        t.prototype.ti = function () {
          return this.Zs() ? "uid:" + this.uid : "anonymous-user";
        }, t.prototype.isEqual = function (t) {
          return t.uid === this.uid;
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Simple wrapper around a nullable UID. Mostly exists to make code more
       * readable.
       */

      /** A user with a null UID. */


      Pr.UNAUTHENTICATED = new Pr(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
      // non-FirebaseAuth providers.
      Pr.ei = new Pr("google-credentials-uid"), Pr.ni = new Pr("first-party-uid");
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var Lr = function Lr(t, e) {
        this.user = e, this.type = "OAuth", this.si = {}, // Set the headers using Object Literal notation to avoid minification
        this.si.Authorization = "Bearer " + t;
      },
          Vr =
      /** @class */
      function () {
        function t() {
          /**
           * Stores the listener registered with setChangeListener()
           * This isn't actually necessary since the UID never changes, but we use this
           * to verify the listen contract is adhered to in tests.
           */
          this.ii = null;
        }

        return t.prototype.getToken = function () {
          return Promise.resolve(null);
        }, t.prototype.ri = function () {}, t.prototype.oi = function (t) {
          this.ii = t, // Fire with initial user.
          t(Pr.UNAUTHENTICATED);
        }, t.prototype.ai = function () {
          this.ii = null;
        }, t;
      }(),
          Rr =
      /** @class */
      function () {
        function t(t) {
          var e = this;
          /**
           * The auth token listener registered with FirebaseApp, retained here so we
           * can unregister it.
           */

          this.ci = null,
          /** Tracks the current User. */
          this.currentUser = Pr.UNAUTHENTICATED, this.ui = !1,
          /**
               * Counter used to detect if the token changed while a getToken request was
               * outstanding.
               */
          this.hi = 0,
          /** The listener registered with setChangeListener(). */
          this.ii = null, this.forceRefresh = !1, this.ci = function () {
            e.hi++, e.currentUser = e.li(), e.ui = !0, e.ii && e.ii(e.currentUser);
          }, this.hi = 0, this.auth = t.getImmediate({
            optional: !0
          }), this.auth ? this.auth.addAuthTokenListener(this.ci) : ( // if auth is not available, invoke tokenListener once with null token
          this.ci(null), t.get().then(function (t) {
            e.auth = t, e.ci && // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.ci);
          }, function () {}));
        }

        return t.prototype.getToken = function () {
          var t = this,
              e = this.hi,
              n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
          // can fail (with an ABORTED error) if there is a token change while the
          // request is outstanding.

          return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.hi !== e ? (T("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (x("string" == typeof n.accessToken), new Lr(n.accessToken, t.currentUser)) : null;
          }) : Promise.resolve(null);
        }, t.prototype.ri = function () {
          this.forceRefresh = !0;
        }, t.prototype.oi = function (t) {
          this.ii = t, // Fire the initial event
          this.ui && t(this.currentUser);
        }, t.prototype.ai = function () {
          this.auth && this.auth.removeAuthTokenListener(this.ci), this.ci = null, this.ii = null;
        }, // Auth.getUid() can return null even with a user logged in. It is because
        // getUid() is synchronous, but the auth code populating Uid is asynchronous.
        // This method should only be called in the AuthTokenListener callback
        // to guarantee to get the actual user.
        t.prototype.li = function () {
          var t = this.auth && this.auth.getUid();
          return x(null === t || "string" == typeof t), new Pr(t);
        }, t;
      }(),
          Ur =
      /** @class */
      function () {
        function t(t, e) {
          this._i = t, this.fi = e, this.type = "FirstParty", this.user = Pr.ni;
        }

        return Object.defineProperty(t.prototype, "si", {
          get: function get() {
            var t = {
              "X-Goog-AuthUser": this.fi
            },
                e = this._i.auth.getAuthHeaderValueForFirstParty([]); // Use array notation to prevent minification


            return e && (t.Authorization = e), t;
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }(),
          Cr =
      /** @class */
      function () {
        function t(t, e) {
          this._i = t, this.fi = e;
        }

        return t.prototype.getToken = function () {
          return Promise.resolve(new Ur(this._i, this.fi));
        }, t.prototype.oi = function (t) {
          // Fire with initial uid.
          t(Pr.ni);
        }, t.prototype.ai = function () {}, t.prototype.ri = function () {}, t;
      }(),
          qr =
      /** @class */
      function () {
        /**
         * @param batchId The unique ID of this mutation batch.
         * @param localWriteTime The original write time of this mutation.
         * @param baseMutations Mutations that are used to populate the base
         * values when this mutation is applied locally. This can be used to locally
         * overwrite values that are persisted in the remote document cache. Base
         * mutations are never sent to the backend.
         * @param mutations The user-provided mutations in this mutation batch.
         * User-provided mutations are applied both locally and remotely on the
         * backend.
         */
        function t(t, e, n, r) {
          this.batchId = t, this.di = e, this.baseMutations = n, this.mutations = r
          /**
          * Applies all the mutations in this MutationBatch to the specified document
          * to create a new remote document
          *
          * @param docKey The key of the document to apply mutations to.
          * @param maybeDoc The document to apply mutations to.
          * @param batchResult The result of applying the MutationBatch to the
          * backend.
          */
          ;
        }

        return t.prototype.wi = function (t, e, n) {
          for (var r = n.Ei, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = sn(o, e, r[i]));
          }

          return e;
        },
        /**
         * Computes the local view of a document given all the mutations in this
         * batch.
         *
         * @param docKey The key of the document to apply mutations to.
         * @param maybeDoc The document to apply mutations to.
         */
        t.prototype.Ti = function (t, e) {
          // First, apply the base state. This allows us to apply non-idempotent
          // transform against a consistent set of values.
          for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = an(i, e, e, this.di));
          } // Second, apply all user-provided mutations.


          for (var o = e, u = 0, s = this.mutations; u < s.length; u++) {
            var a = s[u];
            a.key.isEqual(t) && (e = an(a, e, o, this.di));
          }

          return e;
        },
        /**
         * Computes the local view for all provided documents given the mutations in
         * this batch.
         */
        t.prototype.Ii = function (t) {
          var e = this,
              n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
          // directly (as done in `applyToLocalView()`), we can reduce the complexity
          // to O(n).

          return this.mutations.forEach(function (r) {
            var i = e.Ti(r.key, t.get(r.key));
            i && (n = n.ot(r.key, i));
          }), n;
        }, t.prototype.keys = function () {
          return this.mutations.reduce(function (t, e) {
            return t.add(e.key);
          }, At());
        }, t.prototype.isEqual = function (t) {
          return this.batchId === t.batchId && V(this.mutations, t.mutations, function (t, e) {
            return hn(t, e);
          }) && V(this.baseMutations, t.baseMutations, function (t, e) {
            return hn(t, e);
          });
        }, t;
      }(),
          Mr =
      /** @class */
      function () {
        function t(t, e, n,
        /**
         * A pre-computed mapping from each mutated document to the resulting
         * version.
         */
        r) {
          this.batch = t, this.mi = e, this.Ei = n, this.Ai = r
          /**
          * Creates a new MutationBatchResult for the given batch and results. There
          * must be one result for each mutation in the batch. This static factory
          * caches a document=>version mapping (docVersions).
          */
          ;
        }

        return t.from = function (e, n, r) {
          x(e.mutations.length === r.length);

          for (var i = Tt, o = e.mutations, u = 0; u < o.length; u++) {
            i = i.ot(o[u].key, r[u].version);
          }

          return new t(e, n, r, i);
        }, t;
      }(),
          Fr =
      /** @class */
      function () {
        function t() {
          // A mapping of document key to the new cache entry that should be written (or null if any
          // existing cache entry should be removed).
          this.Ri = new Q(function (t) {
            return t.toString();
          }, function (t, e) {
            return t.isEqual(e);
          }), this.Pi = !1;
        }

        return Object.defineProperty(t.prototype, "readTime", {
          get: function get() {
            return this.gi;
          },
          set: function set(t) {
            this.gi = t;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Buffers a `RemoteDocumentCache.addEntry()` call.
         *
         * You can only modify documents that have already been retrieved via
         * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
         */
        t.prototype.yi = function (t, e) {
          this.Vi(), this.readTime = e, this.Ri.set(t.key, t);
        },
        /**
         * Buffers a `RemoteDocumentCache.removeEntry()` call.
         *
         * You can only remove documents that have already been retrieved via
         * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
         */
        t.prototype.pi = function (t, e) {
          this.Vi(), e && (this.readTime = e), this.Ri.set(t, null);
        },
        /**
         * Looks up an entry in the cache. The buffered changes will first be checked,
         * and if no buffered change applies, this will forward to
         * `RemoteDocumentCache.getEntry()`.
         *
         * @param transaction The transaction in which to perform any persistence
         *     operations.
         * @param documentKey The key of the entry to look up.
         * @return The cached Document or NoDocument entry, or null if we have nothing
         * cached.
         */
        t.prototype.bi = function (t, e) {
          this.Vi();
          var n = this.Ri.get(e);
          return void 0 !== n ? cr.resolve(n) : this.vi(t, e);
        },
        /**
         * Looks up several entries in the cache, forwarding to
         * `RemoteDocumentCache.getEntry()`.
         *
         * @param transaction The transaction in which to perform any persistence
         *     operations.
         * @param documentKeys The keys of the entries to look up.
         * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
         *     entry cannot be found, the corresponding key will be mapped to a null
         *     value.
         */
        t.prototype.getEntries = function (t, e) {
          return this.Si(t, e);
        },
        /**
         * Applies buffered changes to the underlying RemoteDocumentCache, using
         * the provided transaction.
         */
        t.prototype.apply = function (t) {
          return this.Vi(), this.Pi = !0, this.Di(t);
        },
        /** Helper to assert this.changes is not null  */
        t.prototype.Vi = function () {}, t;
      }(),
          Br = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
          jr =
      /** @class */
      function () {
        function t() {
          this.Ci = [];
        }

        return t.prototype.Ni = function (t) {
          this.Ci.push(t);
        }, t.prototype.xi = function () {
          this.Ci.forEach(function (t) {
            return t();
          });
        }, t;
      }(),
          zr =
      /** @class */
      function () {
        function t(t, e, n) {
          this.Fi = t, this.Oi = e, this.ki = n
          /**
          * Get the local view of the document identified by `key`.
          *
          * @return Local view of the document or null if we don't have any cached
          * state for it.
          */
          ;
        }

        return t.prototype.Mi = function (t, e) {
          var n = this;
          return this.Oi.$i(t, e).next(function (r) {
            return n.Li(t, e, r);
          });
        },
        /** Internal version of `getDocument` that allows reusing batches. */
        t.prototype.Li = function (t, e, n) {
          return this.Fi.bi(t, e).next(function (t) {
            for (var r = 0, i = n; r < i.length; r++) {
              t = i[r].Ti(e, t);
            }

            return t;
          });
        }, // Returns the view of the given `docs` as they would appear after applying
        // all mutations in the given `batches`.
        t.prototype.Bi = function (t, e, n) {
          var r = It();
          return e.forEach(function (t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
              e = o[i].Ti(t, e);
            }

            r = r.ot(t, e);
          }), r;
        },
        /**
         * Gets the local view of the documents identified by `keys`.
         *
         * If we don't have cached state for a document in `keys`, a NoDocument will
         * be stored for that key in the resulting set.
         */
        t.prototype.qi = function (t, e) {
          var n = this;
          return this.Fi.getEntries(t, e).next(function (e) {
            return n.Ui(t, e);
          });
        },
        /**
         * Similar to `getDocuments`, but creates the local view from the given
         * `baseDocs` without retrieving documents from the local store.
         */
        t.prototype.Ui = function (t, e) {
          var n = this;
          return this.Oi.Ki(t, e).next(function (r) {
            var i = n.Bi(t, e, r),
                o = bt();
            return i.forEach(function (t, e) {
              // TODO(http://b/32275378): Don't conflate missing / deleted.
              e || (e = new Nn(t, H.min())), o = o.ot(t, e);
            }), o;
          });
        },
        /**
         * Performs a query against the local view of all documents.
         *
         * @param transaction The persistence transaction.
         * @param query The query to match documents against.
         * @param sinceReadTime If not set to SnapshotVersion.min(), return only
         *     documents that have been read since this snapshot version (exclusive).
         */
        t.prototype.Qi = function (t, e, n) {
          /**
          * Returns whether the query matches a single document by path (rather than a
          * collection).
          */
          return function (t) {
            return $.X(t.path) && null === t.collectionGroup && 0 === t.filters.length;
          }(e) ? this.Wi(t, e.path) : Vn(e) ? this.ji(t, e, n) : this.Gi(t, e, n);
        }, t.prototype.Wi = function (t, e) {
          // Just do a simple document lookup.
          return this.Mi(t, new $(e)).next(function (t) {
            var e = _t();

            return t instanceof Tn && (e = e.ot(t.key, t)), e;
          });
        }, t.prototype.ji = function (t, e, n) {
          var r = this,
              i = e.collectionGroup,
              o = _t();

          return this.ki.zi(t, i).next(function (u) {
            return cr.forEach(u, function (u) {
              var s = function (t, e) {
                return new Dn(e,
                /*collectionGroup=*/
                null, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, t.endAt);
              }(e, u.child(i));

              return r.Gi(t, s, n).next(function (t) {
                t.forEach(function (t, e) {
                  o = o.ot(t, e);
                });
              });
            }).next(function () {
              return o;
            });
          });
        }, t.prototype.Gi = function (t, e, n) {
          var r,
              i,
              o = this; // Query the remote documents and overlay mutations.

          return this.Fi.Qi(t, e, n).next(function (n) {
            return r = n, o.Oi.Hi(t, e);
          }).next(function (e) {
            return i = e, o.Yi(t, i, r).next(function (t) {
              r = t;

              for (var e = 0, n = i; e < n.length; e++) {
                for (var o = n[e], u = 0, s = o.mutations; u < s.length; u++) {
                  var a = s[u],
                      c = a.key,
                      h = r.get(c),
                      f = an(a, h, h, o.di);
                  r = f instanceof Tn ? r.ot(c, f) : r.remove(c);
                }
              }
            });
          }).next(function () {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach(function (t, n) {
              zn(e, n) || (r = r.remove(t));
            }), r;
          });
        }, t.prototype.Yi = function (t, e, n) {
          for (var r = At(), i = 0, o = e; i < o.length; i++) {
            for (var u = 0, s = o[i].mutations; u < s.length; u++) {
              var a = s[u];
              a instanceof pn && null === n.get(a.key) && (r = r.add(a.key));
            }
          }

          var c = n;
          return this.Fi.getEntries(t, r).next(function (t) {
            return t.forEach(function (t, e) {
              null !== e && e instanceof Tn && (c = c.ot(t, e));
            }), c;
          });
        }, t;
      }(),
          Gr =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.targetId = t, this.fromCache = e, this.Ji = n, this.Xi = r;
        }

        return t.Zi = function (e, n) {
          for (var r = At(), i = At(), o = 0, u = n.docChanges; o < u.length; o++) {
            var s = u[o];

            switch (s.type) {
              case 0
              /* Added */
              :
                r = r.add(s.doc.key);
                break;

              case 1
              /* Removed */
              :
                i = i.add(s.doc.key);
              // do nothing
            }
          }

          return new t(e, n.fromCache, r, i);
        }, t;
      }(),
          Kr =
      /** @class */
      function () {
        function t(t, e) {
          var n = this;
          this.previousValue = t, e && (e.tr = function (t) {
            return n.er(t);
          }, this.nr = function (t) {
            return e.sr(t);
          });
        }

        return t.prototype.er = function (t) {
          return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
        }, t.prototype.next = function () {
          var t = ++this.previousValue;
          return this.nr && this.nr(t), t;
        }, t;
      }();
      /** A CredentialsProvider that always yields an empty token. */


      function Qr(t, e) {
        var n = t[0],
            r = t[1],
            i = e[0],
            o = e[1],
            u = L(n, i);
        return 0 === u ? L(r, o) : u;
      }
      /**
       * Used to calculate the nth sequence number. Keeps a rolling buffer of the
       * lowest n values passed to `addElement`, and finally reports the largest of
       * them in `maxValue`.
       */


      Kr.ir = -1;

      var Wr =
      /** @class */
      function () {
        function t(t) {
          this.rr = t, this.buffer = new mt(Qr), this.ar = 0;
        }

        return t.prototype.cr = function () {
          return ++this.ar;
        }, t.prototype.ur = function (t) {
          var e = [t, this.cr()];
          if (this.buffer.size < this.rr) this.buffer = this.buffer.add(e);else {
            var n = this.buffer.last();
            Qr(e, n) < 0 && (this.buffer = this.buffer["delete"](n).add(e));
          }
        }, Object.defineProperty(t.prototype, "maxValue", {
          get: function get() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }(),
          Hr = {
        hr: !1,
        lr: 0,
        _r: 0,
        dr: 0
      },
          Yr =
      /** @class */
      function () {
        function t( // When we attempt to collect, we will only do so if the cache size is greater than this
        // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
        t, // The percentage of sequence numbers that we will attempt to collect
        e, // A cap on the total number of sequence numbers that will be collected. This prevents
        // us from collecting a huge number of sequence numbers if the cache has grown very large.
        n) {
          this.wr = t, this.Er = e, this.Tr = n;
        }

        return t.Ir = function (e) {
          return new t(e, t.mr, t.Ar);
        }, t;
      }();

      Yr.mr = 10, Yr.Ar = 1e3, Yr.Rr = new Yr(41943040, Yr.mr, Yr.Ar), Yr.Pr = new Yr(-1, 0, 0);
      /**
       * This class is responsible for the scheduling of LRU garbage collection. It handles checking
       * whether or not GC is enabled, as well as which delay to use before the next run.
       */

      var Jr =
      /** @class */
      function () {
        function t(t, e) {
          this.gr = t, this.cs = e, this.yr = !1, this.Vr = null;
        }

        return t.prototype.start = function (t) {
          -1 !== this.gr.params.wr && this.pr(t);
        }, t.prototype.stop = function () {
          this.Vr && (this.Vr.cancel(), this.Vr = null);
        }, Object.defineProperty(t.prototype, "br", {
          get: function get() {
            return null !== this.Vr;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.pr = function (t) {
          var r = this,
              i = this.yr ? 3e5 : 6e4;
          T("LruGarbageCollector", "Garbage collection scheduled in " + i + "ms"), this.Vr = this.cs.yn("lru_garbage_collection"
          /* LruGarbageCollection */
          , i, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    this.Vr = null, this.yr = !0, n.label = 1;

                  case 1:
                    return n.trys.push([1, 3,, 7]), [4
                    /*yield*/
                    , t.vr(this.gr)];

                  case 2:
                    return n.sent(), [3
                    /*break*/
                    , 7];

                  case 3:
                    return pr(e = n.sent()) ? (T("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3
                    /*break*/
                    , 6]) : [3
                    /*break*/
                    , 4];

                  case 4:
                    return [4
                    /*yield*/
                    , mo(e)];

                  case 5:
                    n.sent(), n.label = 6;

                  case 6:
                    return [3
                    /*break*/
                    , 7];

                  case 7:
                    return [4
                    /*yield*/
                    , this.pr(t)];

                  case 8:
                    return n.sent(), [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }, t;
      }(),
          Xr =
      /** @class */
      function () {
        function t(t, e) {
          this.Sr = t, this.params = e
          /** Given a percentile of target to collect, returns the number of targets to collect. */
          ;
        }

        return t.prototype.Dr = function (t, e) {
          return this.Sr.Cr(t).next(function (t) {
            return Math.floor(e / 100 * t);
          });
        },
        /** Returns the nth sequence number, counting in order from the smallest. */
        t.prototype.Nr = function (t, e) {
          var n = this;
          if (0 === e) return cr.resolve(Kr.ir);
          var r = new Wr(e);
          return this.Sr.Ce(t, function (t) {
            return r.ur(t.sequenceNumber);
          }).next(function () {
            return n.Sr.Fr(t, function (t) {
              return r.ur(t);
            });
          }).next(function () {
            return r.maxValue;
          });
        },
        /**
         * Removes targets with a sequence number equal to or less than the given upper bound, and removes
         * document associations with those targets.
         */
        t.prototype.Or = function (t, e, n) {
          return this.Sr.Or(t, e, n);
        },
        /**
         * Removes documents that have a sequence number equal to or less than the upper bound and are not
         * otherwise pinned.
         */
        t.prototype.kr = function (t, e) {
          return this.Sr.kr(t, e);
        }, t.prototype.Mr = function (t, e) {
          var n = this;
          return -1 === this.params.wr ? (T("LruGarbageCollector", "Garbage collection skipped; disabled"), cr.resolve(Hr)) : this.$r(t).next(function (r) {
            return r < n.params.wr ? (T("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.wr), Hr) : n.Lr(t, e);
          });
        }, t.prototype.$r = function (t) {
          return this.Sr.$r(t);
        }, t.prototype.Lr = function (t, e) {
          var n,
              r,
              i,
              o,
              s,
              a,
              c,
              h = this,
              f = Date.now();
          return this.Dr(t, this.params.Er).next(function (e) {
            // Cap at the configured max
            return e > h.params.Tr ? (T("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.Tr + " from " + e), r = h.params.Tr) : r = e, o = Date.now(), h.Nr(t, r);
          }).next(function (r) {
            return n = r, s = Date.now(), h.Or(t, n, e);
          }).next(function (e) {
            return i = e, a = Date.now(), h.kr(t, n);
          }).next(function (t) {
            return c = Date.now(), _() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG && T("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (o - f) + "ms\n\tDetermined least recently used " + r + " in " + (s - o) + "ms\n\tRemoved " + i + " targets in " + (a - s) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), cr.resolve({
              hr: !0,
              lr: r,
              _r: i,
              dr: t
            });
          });
        }, t;
      }();
      /** Implements the steps for LRU garbage collection. */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Encodes a resource path into a IndexedDb-compatible string form.
       */


      function Zr(t) {
        for (var e = "", n = 0; n < t.length; n++) {
          e.length > 0 && (e = ti(e)), e = $r(t.get(n), e);
        }

        return ti(e);
      }
      /** Encodes a single segment of a resource path into the given result */


      function $r(t, e) {
        for (var n = e, r = t.length, i = 0; i < r; i++) {
          var o = t.charAt(i);

          switch (o) {
            case "\0":
              n += "";
              break;

            case "":
              n += "";
              break;

            default:
              n += o;
          }
        }

        return n;
      }
      /** Encodes a path separator into the given result */


      function ti(t) {
        return t + "";
      }
      /**
       * Decodes the given IndexedDb-compatible string form of a resource path into
       * a ResourcePath instance. Note that this method is not suitable for use with
       * decoding resource names from the server; those are One Platform format
       * strings.
       */


      function ei(t) {
        // Event the empty path must encode as a path of at least length 2. A path
        // with exactly 2 must be the empty path.
        var e = t.length;
        if (x(e >= 2), 2 === e) return x("" === t.charAt(0) && "" === t.charAt(1)), J.U(); // Escape characters cannot exist past the second-to-last position in the
        // source value.

        for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
          // The last two characters of a valid encoded path must be a separator, so
          // there must be an end to this segment.
          var u = t.indexOf("", o);

          switch ((u < 0 || u > n) && S(), t.charAt(u + 1)) {
            case "":
              var s = t.substring(o, u),
                  a = void 0;
              0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
              // and \001
              a = s : (a = i += s, i = ""), r.push(a);
              break;

            case "":
              i += t.substring(o, u), i += "\0";
              break;

            case "":
              // The escape character can be used in the output to encode itself.
              i += t.substring(o, u + 1);
              break;

            default:
              S();
          }

          o = u + 2;
        }

        return new J(r);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Serializer for values stored in the LocalStore. */


      var ni = function ni(t) {
        this.Br = t;
      };
      /** Decodes a remote document from storage locally to a Document. */


      function ri(t, e) {
        if (e.document) return function (t, e, n) {
          var r = be(t, e.name),
              i = ye(e.updateTime),
              o = new bn({
            mapValue: {
              fields: e.fields
            }
          });
          return new Tn(r, i, o, {
            hasCommittedMutations: !!n
          });
        }(t.Br, e.document, !!e.hasCommittedMutations);

        if (e.noDocument) {
          var n = $.Z(e.noDocument.path),
              r = ai(e.noDocument.readTime);
          return new Nn(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
          });
        }

        if (e.unknownDocument) {
          var i = $.Z(e.unknownDocument.path),
              o = ai(e.unknownDocument.version);
          return new An(i, o);
        }

        return S();
      }
      /** Encodes a document for storage locally. */


      function ii(t, e, n) {
        var r = oi(n),
            i = e.key.path.F().L();

        if (e instanceof Tn) {
          var o = function (t, e) {
            return {
              name: we(t, e.key),
              fields: e.rn().mapValue.fields,
              updateTime: pe(t, e.version.v())
            };
          }(t.Br, e),
              u = e.hasCommittedMutations;

          return new Vi(
          /* unknownDocument= */
          null,
          /* noDocument= */
          null, o, u, r, i);
        }

        if (e instanceof Nn) {
          var s = e.key.path.L(),
              a = si(e.version),
              c = e.hasCommittedMutations;
          return new Vi(
          /* unknownDocument= */
          null, new Pi(s, a),
          /* document= */
          null, c, r, i);
        }

        if (e instanceof An) {
          var h = e.key.path.L(),
              f = si(e.version);
          return new Vi(new Li(h, f),
          /* noDocument= */
          null,
          /* document= */
          null,
          /* hasCommittedMutations= */
          !0, r, i);
        }

        return S();
      }

      function oi(t) {
        var e = t.v();
        return [e.seconds, e.nanoseconds];
      }

      function ui(t) {
        var e = new W(t[0], t[1]);
        return H.V(e);
      }

      function si(t) {
        var e = t.v();
        return new Di(e.seconds, e.nanoseconds);
      }

      function ai(t) {
        var e = new W(t.seconds, t.nanoseconds);
        return H.V(e);
      }
      /** Encodes a batch of mutations into a DbMutationBatch for local storage. */

      /** Decodes a DbMutationBatch into a MutationBatch */


      function ci(t, e) {
        var n = (e.baseMutations || []).map(function (e) {
          return De(t.Br, e);
        }),
            r = e.mutations.map(function (e) {
          return De(t.Br, e);
        }),
            i = W.fromMillis(e.localWriteTimeMs);
        return new qr(e.batchId, i, n, r);
      }
      /** Decodes a DbTarget into TargetData */


      function hi(t) {
        var e,
            n,
            r = ai(t.readTime),
            i = void 0 !== t.lastLimboFreeSnapshotVersion ? ai(t.lastLimboFreeSnapshotVersion) : H.min();
        return void 0 !== t.query.documents ? (x(1 === (n = t.query).documents.length), e = Un(xn(Ee(n.documents[0])))) : e = ke(t.query), new ht(e, t.targetId, 0
        /* Listen */
        , t.lastListenSequenceNumber, r, i, U.fromBase64String(t.resumeToken))
        /** Encodes TargetData into a DbTarget for storage locally. */
        ;
      }

      function fi(t, e) {
        var n,
            r = si(e.nt),
            i = si(e.lastLimboFreeSnapshotVersion);
        n = st(e.target) ? Se(t.Br, e.target) : xe(t.Br, e.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.

        var o = e.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

        return new Ui(e.targetId, ot(e.target), r, o, e.sequenceNumber, i, n);
      }
      /**
       * A helper function for figuring out what kind of query has been stored.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** A mutation queue for a specific user, backed by IndexedDB. */


      var li =
      /** @class */
      function () {
        function t(
        /**
         * The normalized userId (e.g. null UID => "" userId) used to store /
         * retrieve mutations.
         */
        t, e, n, r) {
          this.userId = t, this.serializer = e, this.ki = n, this.qr = r,
          /**
               * Caches the document keys for pending mutation batches. If the mutation
               * has been removed from IndexedDb, the cached value may continue to
               * be used to retrieve the batch's document keys. To remove a cached value
               * locally, `removeCachedMutationKeys()` should be invoked either directly
               * or through `removeMutationBatches()`.
               *
               * With multi-tab, when the primary client acknowledges or rejects a mutation,
               * this cache is used by secondary clients to invalidate the local
               * view of the documents that were previously affected by the mutation.
               */
          // PORTING NOTE: Multi-tab only.
          this.Ur = {}
          /**
          * Creates a new mutation queue for the given user.
          * @param user The user for which to create a mutation queue.
          * @param serializer The serializer to use when persisting to IndexedDb.
          */
          ;
        }

        return t.Kr = function (e, n, r, i) {
          // TODO(mcg): Figure out what constraints there are on userIDs
          // In particular, are there any reserved characters? are empty ids allowed?
          // For the moment store these together in the same mutations table assuming
          // that empty userIDs aren't allowed.
          return x("" !== e.uid), new t(e.Zs() ? e.uid : "", n, r, i);
        }, t.prototype.Qr = function (t) {
          var e = !0,
              n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
          return vi(t).rs({
            index: ki.userMutationsIndex,
            range: n
          }, function (t, n, r) {
            e = !1, r.done();
          }).next(function () {
            return e;
          });
        }, t.prototype.Wr = function (t, e, n, r) {
          var i = this,
              o = yi(t),
              u = vi(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
          // compound indices that include auto-generated keys correctly. To ensure
          // that the index entry is added correctly in all browsers, we perform two
          // writes: The first write is used to retrieve the next auto-generated Batch
          // ID, and the second write populates the index and stores the actual
          // mutation batch.
          // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
          // We write an empty object to obtain key
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

          return u.add({}).next(function (s) {
            x("number" == typeof s);

            for (var a = new qr(s, e, n, r), c = function (t, e, n) {
              var r = n.baseMutations.map(function (e) {
                return Ae(t.Br, e);
              }),
                  i = n.mutations.map(function (e) {
                return Ae(t.Br, e);
              });
              return new ki(e, n.batchId, n.di.toMillis(), r, i);
            }(i.serializer, i.userId, a), h = [], f = new mt(function (t, e) {
              return L(t.B(), e.B());
            }), l = 0, p = r; l < p.length; l++) {
              var d = p[l],
                  v = Oi.key(i.userId, d.key.path, s);
              f = f.add(d.key.path.F()), h.push(u.put(c)), h.push(o.put(v, Oi.PLACEHOLDER));
            }

            return f.forEach(function (e) {
              h.push(i.ki.jr(t, e));
            }), t.Ni(function () {
              i.Ur[s] = a.keys();
            }), cr.On(h).next(function () {
              return a;
            });
          });
        }, t.prototype.Gr = function (t, e) {
          var n = this;
          return vi(t).get(e).next(function (t) {
            return t ? (x(t.userId === n.userId), ci(n.serializer, t)) : null;
          });
        },
        /**
         * Returns the document keys for the mutation batch with the given batchId.
         * For primary clients, this method returns `null` after
         * `removeMutationBatches()` has been called. Secondary clients return a
         * cached result until `removeCachedMutationKeys()` is invoked.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.zr = function (t, e) {
          var n = this;
          return this.Ur[e] ? cr.resolve(this.Ur[e]) : this.Gr(t, e).next(function (t) {
            if (t) {
              var r = t.keys();
              return n.Ur[e] = r, r;
            }

            return null;
          });
        }, t.prototype.Hr = function (t, e) {
          var n = this,
              r = e + 1,
              i = IDBKeyRange.lowerBound([this.userId, r]),
              o = null;
          return vi(t).rs({
            index: ki.userMutationsIndex,
            range: i
          }, function (t, e, i) {
            e.userId === n.userId && (x(e.batchId >= r), o = ci(n.serializer, e)), i.done();
          }).next(function () {
            return o;
          });
        }, t.prototype.Yr = function (t) {
          var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
              n = -1;
          return vi(t).rs({
            index: ki.userMutationsIndex,
            range: e,
            reverse: !0
          }, function (t, e, r) {
            n = e.batchId, r.done();
          }).next(function () {
            return n;
          });
        }, t.prototype.Jr = function (t) {
          var e = this,
              n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
          return vi(t).ts(ki.userMutationsIndex, n).next(function (t) {
            return t.map(function (t) {
              return ci(e.serializer, t);
            });
          });
        }, t.prototype.$i = function (t, e) {
          var n = this,
              r = Oi.prefixForPath(this.userId, e.path),
              i = IDBKeyRange.lowerBound(r),
              o = []; // Scan the document-mutation index starting with a prefix starting with
          // the given documentKey.

          return yi(t).rs({
            range: i
          }, function (r, i, u) {
            var s = r[0],
                a = r[1],
                c = r[2],
                h = ei(a); // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.

            if (s === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
              return vi(t).get(c).next(function (t) {
                if (!t) throw S();
                x(t.userId === n.userId), o.push(ci(n.serializer, t));
              });
            u.done();
          }).next(function () {
            return o;
          });
        }, t.prototype.Ki = function (t, e) {
          var n = this,
              r = new mt(L),
              i = [];
          return e.forEach(function (e) {
            var o = Oi.prefixForPath(n.userId, e.path),
                u = IDBKeyRange.lowerBound(o),
                s = yi(t).rs({
              range: u
            }, function (t, i, o) {
              var u = t[0],
                  s = t[1],
                  a = t[2],
                  c = ei(s); // Only consider rows matching exactly the specific key of
              // interest. Note that because we order by path first, and we
              // order terminators before path separators, we'll encounter all
              // the index rows for documentKey contiguously. In particular, all
              // the rows for documentKey will occur before any rows for
              // documents nested in a subcollection beneath documentKey so we
              // can stop as soon as we hit any such row.

              u === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            });
            i.push(s);
          }), cr.On(i).next(function () {
            return n.Xr(t, r);
          });
        }, t.prototype.Hi = function (t, e) {
          var n = this,
              r = e.path,
              i = r.length + 1,
              o = Oi.prefixForPath(this.userId, r),
              u = IDBKeyRange.lowerBound(o),
              s = new mt(L);
          return yi(t).rs({
            range: u
          }, function (t, e, o) {
            var u = t[0],
                a = t[1],
                c = t[2],
                h = ei(a);
            u === n.userId && r.M(h) ? // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (s = s.add(c)) : o.done();
          }).next(function () {
            return n.Xr(t, s);
          });
        }, t.prototype.Xr = function (t, e) {
          var n = this,
              r = [],
              i = []; // TODO(rockwood): Implement this using iterate.

          return e.forEach(function (e) {
            i.push(vi(t).get(e).next(function (t) {
              if (null === t) throw S();
              x(t.userId === n.userId), r.push(ci(n.serializer, t));
            }));
          }), cr.On(i).next(function () {
            return r;
          });
        }, t.prototype.Zr = function (t, e) {
          var n = this;
          return di(t.eo, this.userId, e).next(function (r) {
            return t.Ni(function () {
              n.no(e.batchId);
            }), cr.forEach(r, function (e) {
              return n.qr.so(t, e);
            });
          });
        },
        /**
         * Clears the cached keys for a mutation batch. This method should be
         * called by secondary clients after they process mutation updates.
         *
         * Note that this method does not have to be called from primary clients as
         * the corresponding cache entries are cleared when an acknowledged or
         * rejected batch is removed from the mutation queue.
         */
        // PORTING NOTE: Multi-tab only
        t.prototype.no = function (t) {
          delete this.Ur[t];
        }, t.prototype.io = function (t) {
          var e = this;
          return this.Qr(t).next(function (n) {
            if (!n) return cr.resolve(); // Verify that there are no entries in the documentMutations index if
            // the queue is empty.

            var r = IDBKeyRange.lowerBound(Oi.prefixForUser(e.userId)),
                i = [];
            return yi(t).rs({
              range: r
            }, function (t, n, r) {
              if (t[0] === e.userId) {
                var o = ei(t[1]);
                i.push(o);
              } else r.done();
            }).next(function () {
              x(0 === i.length);
            });
          });
        }, t.prototype.ro = function (t, e) {
          return pi(t, this.userId, e);
        }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

        /** Returns the mutation queue's metadata from IndexedDb. */
        t.prototype.oo = function (t) {
          var e = this;
          return mi(t).get(this.userId).next(function (t) {
            return t || new xi(e.userId, -1,
            /*lastStreamToken=*/
            "");
          });
        }, t;
      }();
      /**
       * @return true if the mutation queue for the given user contains a pending
       *         mutation for the given key.
       */


      function pi(t, e, n) {
        var r = Oi.prefixForPath(e, n.path),
            i = r[1],
            o = IDBKeyRange.lowerBound(r),
            u = !1;
        return yi(t).rs({
          range: o,
          ss: !0
        }, function (t, n, r) {
          var o = t[0],
              s = t[1];
          t[2];
          o === e && s === i && (u = !0), r.done();
        }).next(function () {
          return u;
        });
      }
      /** Returns true if any mutation queue contains the given document. */

      /**
       * Delete a mutation batch and the associated document mutations.
       * @return A PersistencePromise of the document mutations that were removed.
       */


      function di(t, e, n) {
        var r = t.store(ki.store),
            i = t.store(Oi.store),
            o = [],
            u = IDBKeyRange.only(n.batchId),
            s = 0,
            a = r.rs({
          range: u
        }, function (t, e, n) {
          return s++, n["delete"]();
        });
        o.push(a.next(function () {
          x(1 === s);
        }));

        for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
          var l = f[h],
              p = Oi.key(e, l.key.path, n.batchId);
          o.push(i["delete"](p)), c.push(l.key);
        }

        return cr.On(o).next(function () {
          return c;
        });
      }
      /**
       * Helper to get a typed SimpleDbStore for the mutations object store.
       */


      function vi(t) {
        return Zi.Kn(t, ki.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the mutationQueues object store.
       */


      function yi(t) {
        return Zi.Kn(t, Oi.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the mutationQueues object store.
       */


      function mi(t) {
        return Zi.Kn(t, xi.store);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * The RemoteDocumentCache for IndexedDb. To construct, invoke
       * `newIndexedDbRemoteDocumentCache()`.
       */


      var gi =
      /** @class */
      function () {
        /**
         * @param serializer The document serializer.
         * @param indexManager The query indexes that need to be maintained.
         */
        function t(t, e) {
          this.serializer = t, this.ki = e
          /**
          * Adds the supplied entries to the cache.
          *
          * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
          * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
          */
          ;
        }

        return t.prototype.yi = function (t, e, n) {
          return Ii(t).put(Ei(e), n);
        },
        /**
         * Removes a document from the cache.
         *
         * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
         * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
         */
        t.prototype.pi = function (t, e) {
          var n = Ii(t),
              r = Ei(e);
          return n["delete"](r);
        },
        /**
         * Updates the current cache size.
         *
         * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
         * cache's metadata.
         */
        t.prototype.updateMetadata = function (t, e) {
          var n = this;
          return this.getMetadata(t).next(function (r) {
            return r.byteSize += e, n.ao(t, r);
          });
        }, t.prototype.bi = function (t, e) {
          var n = this;
          return Ii(t).get(Ei(e)).next(function (t) {
            return n.co(t);
          });
        },
        /**
         * Looks up an entry in the cache.
         *
         * @param documentKey The key of the entry to look up.
         * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
         */
        t.prototype.uo = function (t, e) {
          var n = this;
          return Ii(t).get(Ei(e)).next(function (t) {
            var e = n.co(t);
            return e ? {
              ho: e,
              size: _i(t)
            } : null;
          });
        }, t.prototype.getEntries = function (t, e) {
          var n = this,
              r = It();
          return this.lo(t, e, function (t, e) {
            var i = n.co(e);
            r = r.ot(t, i);
          }).next(function () {
            return r;
          });
        },
        /**
         * Looks up several entries in the cache.
         *
         * @param documentKeys The set of keys entries to look up.
         * @return A map of MaybeDocuments indexed by key (if a document cannot be
         *     found, the key will be mapped to null) and a map of sizes indexed by
         *     key (zero if the key cannot be found).
         */
        t.prototype._o = function (t, e) {
          var n = this,
              r = It(),
              i = new dt($.D);
          return this.lo(t, e, function (t, e) {
            var o = n.co(e);
            o ? (r = r.ot(t, o), i = i.ot(t, _i(e))) : (r = r.ot(t, null), i = i.ot(t, 0));
          }).next(function () {
            return {
              fo: r,
              "do": i
            };
          });
        }, t.prototype.lo = function (t, e, n) {
          if (e.P()) return cr.resolve();

          var r = IDBKeyRange.bound(e.first().path.L(), e.last().path.L()),
              i = e._t(),
              o = i.It();

          return Ii(t).rs({
            range: r
          }, function (t, e, r) {
            // Go through keys not found in cache.
            for (var u = $.Z(t); o && $.D(o, u) < 0;) {
              n(o, null), o = i.It();
            }

            o && o.isEqual(u) && ( // Key found in cache.
            n(o, e), o = i.At() ? i.It() : null), // Skip to the next key (if there is one).
            o ? r.Xn(o.path.L()) : r.done();
          }).next(function () {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (; o;) {
              n(o, null), o = i.At() ? i.It() : null;
            }
          });
        }, t.prototype.Qi = function (t, e, n) {
          var r = this,
              i = _t(),
              o = e.path.length + 1,
              u = {};

          if (n.isEqual(H.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var s = e.path.L();
            u.range = IDBKeyRange.lowerBound(s);
          } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.L(),
                c = oi(n);
            u.range = IDBKeyRange.lowerBound([a, c],
            /* open= */
            !0), u.index = Vi.collectionReadTimeIndex;
          }

          return Ii(t).rs(u, function (t, n, u) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
              var s = ri(r.serializer, n);
              e.path.M(s.key.path) ? s instanceof Tn && zn(e, s) && (i = i.ot(s.key, s)) : u.done();
            }
          }).next(function () {
            return i;
          });
        }, t.prototype.wo = function (t) {
          return new wi(this, !!t && t.Eo);
        }, t.prototype.To = function (t) {
          return this.getMetadata(t).next(function (t) {
            return t.byteSize;
          });
        }, t.prototype.getMetadata = function (t) {
          return bi(t).get(Ri.key).next(function (t) {
            return x(!!t), t;
          });
        }, t.prototype.ao = function (t, e) {
          return bi(t).put(Ri.key, e);
        },
        /**
         * Decodes `remoteDoc` and returns the document (or null, if the document
         * corresponds to the format used for sentinel deletes).
         */
        t.prototype.co = function (t) {
          if (t) {
            var e = ri(this.serializer, t);
            return e instanceof Nn && e.version.isEqual(H.min()) ? null : e;
          }

          return null;
        }, t;
      }(),
          wi =
      /** @class */
      function (e) {
        /**
         * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
         * @param trackRemovals Whether to create sentinel deletes that can be tracked by
         * `getNewDocumentChanges()`.
         */
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).Io = t, r.Eo = n, // A map of document sizes prior to applying the changes in this buffer.
          r.mo = new Q(function (t) {
            return t.toString();
          }, function (t, e) {
            return t.isEqual(e);
          }), r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Di = function (t) {
          var e = this,
              n = [],
              r = 0,
              i = new mt(function (t, e) {
            return L(t.B(), e.B());
          });
          return this.Ri.forEach(function (o, u) {
            var s = e.mo.get(o);

            if (u) {
              var a = ii(e.Io.serializer, u, e.readTime);
              i = i.add(o.path.F());

              var c = _i(a);

              r += c - s, n.push(e.Io.yi(t, o, a));
            } else if (r -= s, e.Eo) {
              // In order to track removals, we store a "sentinel delete" in the
              // RemoteDocumentCache. This entry is represented by a NoDocument
              // with a version of 0 and ignored by `maybeDecodeDocument()` but
              // preserved in `getNewDocumentChanges()`.
              var h = ii(e.Io.serializer, new Nn(o, H.min()), e.readTime);
              n.push(e.Io.yi(t, o, h));
            } else n.push(e.Io.pi(t, o));
          }), i.forEach(function (r) {
            n.push(e.Io.ki.jr(t, r));
          }), n.push(this.Io.updateMetadata(t, r)), cr.On(n);
        }, n.prototype.vi = function (t, e) {
          var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

          return this.Io.uo(t, e).next(function (t) {
            return null === t ? (n.mo.set(e, 0), null) : (n.mo.set(e, t.size), t.ho);
          });
        }, n.prototype.Si = function (t, e) {
          var n = this; // Record the size of everything we load from the cache so we can compute
          // a delta later.

          return this.Io._o(t, e).next(function (t) {
            var e = t.fo; // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.

            return t["do"].forEach(function (t, e) {
              n.mo.set(t, e);
            }), e;
          });
        }, n;
      }(Fr);
      /**
       * Creates a new IndexedDbRemoteDocumentCache.
       *
       * @param serializer The document serializer.
       * @param indexManager The query indexes that need to be maintained.
       */

      /**
       * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
       *
       * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
       * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
       * when we apply the changes.
       */


      function bi(t) {
        return Zi.Kn(t, Ri.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
       */


      function Ii(t) {
        return Zi.Kn(t, Vi.store);
      }

      function Ei(t) {
        return t.path.L();
      }
      /**
       * Retrusn an approximate size for the given document.
       */


      function _i(t) {
        var e;
        if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
          if (!t.noDocument) throw S();
          e = t.noDocument;
        }
        return JSON.stringify(e).length;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * An in-memory implementation of IndexManager.
       */


      var Ti =
      /** @class */
      function () {
        function t() {
          this.Ao = new Ni();
        }

        return t.prototype.jr = function (t, e) {
          return this.Ao.add(e), cr.resolve();
        }, t.prototype.zi = function (t, e) {
          return cr.resolve(this.Ao.getEntries(e));
        }, t;
      }(),
          Ni =
      /** @class */
      function () {
        function t() {
          this.index = {};
        } // Returns false if the entry already existed.


        return t.prototype.add = function (t) {
          var e = t.k(),
              n = t.F(),
              r = this.index[e] || new mt(J.D),
              i = !r.has(n);
          return this.index[e] = r.add(n), i;
        }, t.prototype.has = function (t) {
          var e = t.k(),
              n = t.F(),
              r = this.index[e];
          return r && r.has(n);
        }, t.prototype.getEntries = function (t) {
          return (this.index[t] || new mt(J.D)).L();
        }, t;
      }(),
          Ai =
      /** @class */
      function () {
        function t(t) {
          this.serializer = t;
        }
        /**
         * Performs database creation and schema upgrades.
         *
         * Note that in production, this method is only ever used to upgrade the schema
         * to SCHEMA_VERSION. Different values of toVersion are only used for testing
         * and local feature development.
         */


        return t.prototype.createOrUpgrade = function (t, e, n, r) {
          var i = this;
          x(n < r && n >= 0 && r <= 10);
          var o = new dr("createOrUpgrade", e);
          n < 1 && r >= 1 && (function (t) {
            t.createObjectStore(Si.store);
          }(t), function (t) {
            t.createObjectStore(xi.store, {
              keyPath: xi.keyPath
            }), t.createObjectStore(ki.store, {
              keyPath: ki.keyPath,
              autoIncrement: !0
            }).createIndex(ki.userMutationsIndex, ki.userMutationsKeyPath, {
              unique: !0
            }), t.createObjectStore(Oi.store);
          }(t), Fi(t), function (t) {
            t.createObjectStore(Vi.store);
          }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
          // migration 3 unconditionally clears it.

          var u = cr.resolve();
          return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
          // potentially have corrupt data.
          0 !== n && (function (t) {
            t.deleteObjectStore(Ci.store), t.deleteObjectStore(Ui.store), t.deleteObjectStore(qi.store);
          }(t), Fi(t)), u = u.next(function () {
            /**
            * Creates the target global singleton row.
            *
            * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
            */
            return function (t) {
              var e = t.store(qi.store),
                  n = new qi(
              /*highestTargetId=*/
              0,
              /*lastListenSequenceNumber=*/
              0, H.min().v(),
              /*targetCount=*/
              0);
              return e.put(qi.key, n);
            }(o);
          })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
          // mutation batch IDs (this was previously ensured internally by the
          // client). To migrate to the new schema, we have to read all mutations
          // and write them back out. We preserve the existing batch IDs to guarantee
          // consistency with other object stores. Any further mutation batch IDs will
          // be auto-generated.
          u = u.next(function () {
            return function (t, e) {
              return e.store(ki.store).ts().next(function (n) {
                t.deleteObjectStore(ki.store), t.createObjectStore(ki.store, {
                  keyPath: ki.keyPath,
                  autoIncrement: !0
                }).createIndex(ki.userMutationsIndex, ki.userMutationsKeyPath, {
                  unique: !0
                });
                var r = e.store(ki.store),
                    i = n.map(function (t) {
                  return r.put(t);
                });
                return cr.On(i);
              });
            }(t, o);
          })), u = u.next(function () {
            !function (t) {
              t.createObjectStore(Bi.store, {
                keyPath: Bi.keyPath
              });
            }(t);
          })), n < 5 && r >= 5 && (u = u.next(function () {
            return i.removeAcknowledgedMutations(o);
          })), n < 6 && r >= 6 && (u = u.next(function () {
            return function (t) {
              t.createObjectStore(Ri.store);
            }(t), i.addDocumentGlobal(o);
          })), n < 7 && r >= 7 && (u = u.next(function () {
            return i.ensureSequenceNumbers(o);
          })), n < 8 && r >= 8 && (u = u.next(function () {
            return i.createCollectionParentIndex(t, o);
          })), n < 9 && r >= 9 && (u = u.next(function () {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function (t) {
              t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function (t) {
              var e = t.objectStore(Vi.store);
              e.createIndex(Vi.readTimeIndex, Vi.readTimeIndexPath, {
                unique: !1
              }), e.createIndex(Vi.collectionReadTimeIndex, Vi.collectionReadTimeIndexPath, {
                unique: !1
              });
            }(e);
          })), n < 10 && r >= 10 && (u = u.next(function () {
            return i.rewriteCanonicalIds(o);
          })), u;
        }, t.prototype.addDocumentGlobal = function (t) {
          var e = 0;
          return t.store(Vi.store).rs(function (t, n) {
            e += _i(n);
          }).next(function () {
            var n = new Ri(e);
            return t.store(Ri.store).put(Ri.key, n);
          });
        }, t.prototype.removeAcknowledgedMutations = function (t) {
          var e = this,
              n = t.store(xi.store),
              r = t.store(ki.store);
          return n.ts().next(function (n) {
            return cr.forEach(n, function (n) {
              var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
              return r.ts(ki.userMutationsIndex, i).next(function (r) {
                return cr.forEach(r, function (r) {
                  x(r.userId === n.userId);
                  var i = ci(e.serializer, r);
                  return di(t, n.userId, i).next(function () {});
                });
              });
            });
          });
        },
        /**
         * Ensures that every document in the remote document cache has a corresponding sentinel row
         * with a sequence number. Missing rows are given the most recently used sequence number.
         */
        t.prototype.ensureSequenceNumbers = function (t) {
          var e = t.store(Ci.store),
              n = t.store(Vi.store);
          return t.store(qi.store).get(qi.key).next(function (t) {
            var r = [];
            return n.rs(function (n, i) {
              var o = new J(n),
                  u = function (t) {
                return [0, Zr(t)];
              }(o);

              r.push(e.get(u).next(function (n) {
                return n ? cr.resolve() : function (n) {
                  return e.put(new Ci(0, Zr(n), t.highestListenSequenceNumber));
                }(o);
              }));
            }).next(function () {
              return cr.On(r);
            });
          });
        }, t.prototype.createCollectionParentIndex = function (t, e) {
          // Create the index.
          t.createObjectStore(Mi.store, {
            keyPath: Mi.keyPath
          });

          var n = e.store(Mi.store),
              r = new Ni(),
              i = function i(t) {
            if (r.add(t)) {
              var e = t.k(),
                  i = t.F();
              return n.put({
                collectionId: e,
                parent: Zr(i)
              });
            }
          }; // Helper to add an index entry iff we haven't already written it.
          // Index existing remote documents.


          return e.store(Vi.store).rs({
            ss: !0
          }, function (t, e) {
            var n = new J(t);
            return i(n.F());
          }).next(function () {
            return e.store(Oi.store).rs({
              ss: !0
            }, function (t, e) {
              t[0];
              var n = t[1],
                  r = (t[2], ei(n));
              return i(r.F());
            });
          });
        }, t.prototype.rewriteCanonicalIds = function (t) {
          var e = this,
              n = t.store(Ui.store);
          return n.rs(function (t, r) {
            var i = hi(r),
                o = fi(e.serializer, i);
            return n.put(o);
          });
        }, t;
      }(),
          Di = function Di(t, e) {
        this.seconds = t, this.nanoseconds = e;
      },
          Si = function Si(t,
      /** Whether to allow shared access from multiple tabs. */
      e, n) {
        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
      };
      /**
       * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
       * Also used for in-memory caching by IndexedDbIndexManager and initial index population
       * in indexeddb_schema.ts
       */

      /**
       * Name of the IndexedDb object store.
       *
       * Note that the name 'owner' is chosen to ensure backwards compatibility with
       * older clients that only supported single locked access to the persistence
       * layer.
       */


      Si.store = "owner",
      /**
           * The key string used for the single object that exists in the
           * DbPrimaryClient store.
           */
      Si.key = "owner";

      var xi = function xi(
      /**
           * The normalized user ID to which this queue belongs.
           */
      t,
      /**
           * An identifier for the highest numbered batch that has been acknowledged
           * by the server. All MutationBatches in this queue with batchIds less
           * than or equal to this value are considered to have been acknowledged by
           * the server.
           *
           * NOTE: this is deprecated and no longer used by the code.
           */
      e,
      /**
           * A stream token that was previously sent by the server.
           *
           * See StreamingWriteRequest in datastore.proto for more details about
           * usage.
           *
           * After sending this token, earlier tokens may not be used anymore so
           * only a single stream token is retained.
           *
           * NOTE: this is deprecated and no longer used by the code.
           */
      n) {
        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
      };
      /** Name of the IndexedDb object store.  */


      xi.store = "mutationQueues",
      /** Keys are automatically assigned via the userId property. */
      xi.keyPath = "userId";
      /**
       * An object to be stored in the 'mutations' store in IndexedDb.
       *
       * Represents a batch of user-level mutations intended to be sent to the server
       * in a single write. Each user-level batch gets a separate DbMutationBatch
       * with a new batchId.
       */

      var ki = function ki(
      /**
           * The normalized user ID to which this batch belongs.
           */
      t,
      /**
           * An identifier for this batch, allocated using an auto-generated key.
           */
      e,
      /**
           * The local write time of the batch, stored as milliseconds since the
           * epoch.
           */
      n,
      /**
           * A list of "mutations" that represent a partial base state from when this
           * write batch was initially created. During local application of the write
           * batch, these baseMutations are applied prior to the real writes in order
           * to override certain document fields from the remote document cache. This
           * is necessary in the case of non-idempotent writes (e.g. `increment()`
           * transforms) to make sure that the local view of the modified documents
           * doesn't flicker if the remote document cache receives the result of the
           * non-idempotent write before the write is removed from the queue.
           *
           * These mutations are never sent to the backend.
           */
      r,
      /**
           * A list of mutations to apply. All mutations will be applied atomically.
           *
           * Mutations are serialized via toMutation().
           */
      i) {
        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
      };
      /** Name of the IndexedDb object store.  */


      ki.store = "mutations",
      /** Keys are automatically assigned via the userId, batchId properties. */
      ki.keyPath = "batchId",
      /** The index name for lookup of mutations by user. */
      ki.userMutationsIndex = "userMutationsIndex",
      /** The user mutations index is keyed by [userId, batchId] pairs. */
      ki.userMutationsKeyPath = ["userId", "batchId"];

      var Oi =
      /** @class */
      function () {
        function t() {}
        /**
         * Creates a [userId] key for use in the DbDocumentMutations index to iterate
         * over all of a user's document mutations.
         */


        return t.prefixForUser = function (t) {
          return [t];
        },
        /**
         * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
         * index to iterate over all at document mutations for a given path or lower.
         */
        t.prefixForPath = function (t, e) {
          return [t, Zr(e)];
        },
        /**
         * Creates a full index key of [userId, encodedPath, batchId] for inserting
         * and deleting into the DbDocumentMutations index.
         */
        t.key = function (t, e, n) {
          return [t, Zr(e), n];
        }, t;
      }();

      Oi.store = "documentMutations",
      /**
           * Because we store all the useful information for this store in the key,
           * there is no useful information to store as the value. The raw (unencoded)
           * path cannot be stored because IndexedDb doesn't store prototype
           * information.
           */
      Oi.PLACEHOLDER = new Oi();

      var Pi = function Pi(t, e) {
        this.path = t, this.readTime = e;
      },
          Li = function Li(t, e) {
        this.path = t, this.version = e;
      },
          Vi = // TODO: We are currently storing full document keys almost three times
      // (once as part of the primary key, once - partly - as `parentPath` and once
      // inside the encoded documents). During our next migration, we should
      // rewrite the primary key as parentPath + document ID which would allow us
      // to drop one value.
      function Vi(
      /**
           * Set to an instance of DbUnknownDocument if the data for a document is
           * not known, but it is known that a document exists at the specified
           * version (e.g. it had a successful update applied to it)
           */
      t,
      /**
           * Set to an instance of a DbNoDocument if it is known that no document
           * exists.
           */
      e,
      /**
           * Set to an instance of a Document if there's a cached version of the
           * document.
           */
      n,
      /**
           * Documents that were written to the remote document store based on
           * a write acknowledgment are marked with `hasCommittedMutations`. These
           * documents are potentially inconsistent with the backend's copy and use
           * the write's commit version as their document version.
           */
      r,
      /**
           * When the document was read from the backend. Undefined for data written
           * prior to schema version 9.
           */
      i,
      /**
           * The path of the collection this document is part of. Undefined for data
           * written prior to schema version 9.
           */
      o) {
        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
      };
      /**
       * Represents a document that is known to exist but whose data is unknown.
       * Stored in IndexedDb as part of a DbRemoteDocument object.
       */


      Vi.store = "remoteDocuments",
      /**
           * An index that provides access to all entries sorted by read time (which
           * corresponds to the last modification time of each row).
           *
           * This index is used to provide a changelog for Multi-Tab.
           */
      Vi.readTimeIndex = "readTimeIndex", Vi.readTimeIndexPath = "readTime",
      /**
           * An index that provides access to documents in a collection sorted by read
           * time.
           *
           * This index is used to allow the RemoteDocumentCache to fetch newly changed
           * documents in a collection.
           */
      Vi.collectionReadTimeIndex = "collectionReadTimeIndex", Vi.collectionReadTimeIndexPath = ["parentPath", "readTime"];
      /**
       * Contains a single entry that has metadata about the remote document cache.
       */

      var Ri =
      /**
           * @param byteSize Approximately the total size in bytes of all the documents in the document
           * cache.
           */
      function Ri(t) {
        this.byteSize = t;
      };

      Ri.store = "remoteDocumentGlobal", Ri.key = "remoteDocumentGlobalKey";

      var Ui = function Ui(
      /**
           * An auto-generated sequential numeric identifier for the query.
           *
           * Queries are stored using their canonicalId as the key, but these
           * canonicalIds can be quite long so we additionally assign a unique
           * queryId which can be used by referenced data structures (e.g.
           * indexes) to minimize the on-disk cost.
           */
      t,
      /**
           * The canonical string representing this query. This is not unique.
           */
      e,
      /**
           * The last readTime received from the Watch Service for this query.
           *
           * This is the same value as TargetChange.read_time in the protos.
           */
      n,
      /**
           * An opaque, server-assigned token that allows watching a query to be
           * resumed after disconnecting without retransmitting all the data
           * that matches the query. The resume token essentially identifies a
           * point in time from which the server should resume sending results.
           *
           * This is related to the snapshotVersion in that the resumeToken
           * effectively also encodes that value, but the resumeToken is opaque
           * and sometimes encodes additional information.
           *
           * A consequence of this is that the resumeToken should be used when
           * asking the server to reason about where this client is in the watch
           * stream, but the client should use the snapshotVersion for its own
           * purposes.
           *
           * This is the same value as TargetChange.resume_token in the protos.
           */
      r,
      /**
           * A sequence number representing the last time this query was
           * listened to, used for garbage collection purposes.
           *
           * Conventionally this would be a timestamp value, but device-local
           * clocks are unreliable and they must be able to create new listens
           * even while disconnected. Instead this should be a monotonically
           * increasing number that's incremented on each listen call.
           *
           * This is different from the queryId since the queryId is an
           * immutable identifier assigned to the Query on first use while
           * lastListenSequenceNumber is updated every time the query is
           * listened to.
           */
      i,
      /**
           * Denotes the maximum snapshot version at which the associated query view
           * contained no limbo documents.  Undefined for data written prior to
           * schema version 9.
           */
      o,
      /**
           * The query for this target.
           *
           * Because canonical ids are not unique we must store the actual query. We
           * use the proto to have an object we can persist without having to
           * duplicate translation logic to and from a `Query` object.
           */
      u) {
        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = u;
      };

      Ui.store = "targets",
      /** Keys are automatically assigned via the targetId property. */
      Ui.keyPath = "targetId",
      /** The name of the queryTargets index. */
      Ui.queryTargetsIndexName = "queryTargetsIndex",
      /**
           * The index of all canonicalIds to the targets that they match. This is not
           * a unique mapping because canonicalId does not promise a unique name for all
           * possible queries, so we append the targetId to make the mapping unique.
           */
      Ui.queryTargetsKeyPath = ["canonicalId", "targetId"];
      /**
       * An object representing an association between a target and a document, or a
       * sentinel row marking the last sequence number at which a document was used.
       * Each document cached must have a corresponding sentinel row before lru
       * garbage collection is enabled.
       *
       * The target associations and sentinel rows are co-located so that orphaned
       * documents and their sequence numbers can be identified efficiently via a scan
       * of this store.
       */

      var Ci = function Ci(
      /**
           * The targetId identifying a target or 0 for a sentinel row.
           */
      t,
      /**
           * The path to the document, as encoded in the key.
           */
      e,
      /**
           * If this is a sentinel row, this should be the sequence number of the last
           * time the document specified by `path` was used. Otherwise, it should be
           * `undefined`.
           */
      n) {
        this.targetId = t, this.path = e, this.sequenceNumber = n;
      };
      /** Name of the IndexedDb object store.  */


      Ci.store = "targetDocuments",
      /** Keys are automatically assigned via the targetId, path properties. */
      Ci.keyPath = ["targetId", "path"],
      /** The index name for the reverse index. */
      Ci.documentTargetsIndex = "documentTargetsIndex",
      /** We also need to create the reverse index for these properties. */
      Ci.documentTargetsKeyPath = ["path", "targetId"];
      /**
       * A record of global state tracked across all Targets, tracked separately
       * to avoid the need for extra indexes.
       *
       * This should be kept in-sync with the proto used in the iOS client.
       */

      var qi = function qi(
      /**
           * The highest numbered target id across all targets.
           *
           * See DbTarget.targetId.
           */
      t,
      /**
           * The highest numbered lastListenSequenceNumber across all targets.
           *
           * See DbTarget.lastListenSequenceNumber.
           */
      e,
      /**
           * A global snapshot version representing the last consistent snapshot we
           * received from the backend. This is monotonically increasing and any
           * snapshots received from the backend prior to this version (e.g. for
           * targets resumed with a resumeToken) should be suppressed (buffered)
           * until the backend has caught up to this snapshot version again. This
           * prevents our cache from ever going backwards in time.
           */
      n,
      /**
           * The number of targets persisted.
           */
      r) {
        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
      };
      /**
       * The key string used for the single object that exists in the
       * DbTargetGlobal store.
       */


      qi.key = "targetGlobalKey", qi.store = "targetGlobal";
      /**
       * An object representing an association between a Collection id (e.g. 'messages')
       * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
       * This is used to efficiently find all collections to query when performing
       * a Collection Group query.
       */

      var Mi = function Mi(
      /**
           * The collectionId (e.g. 'messages')
           */
      t,
      /**
           * The path to the parent (either a document location or an empty path for
           * a root-level collection).
           */
      e) {
        this.collectionId = t, this.parent = e;
      };
      /** Name of the IndexedDb object store. */


      function Fi(t) {
        t.createObjectStore(Ci.store, {
          keyPath: Ci.keyPath
        }).createIndex(Ci.documentTargetsIndex, Ci.documentTargetsKeyPath, {
          unique: !0
        }), // NOTE: This is unique only because the TargetId is the suffix.
        t.createObjectStore(Ui.store, {
          keyPath: Ui.keyPath
        }).createIndex(Ui.queryTargetsIndexName, Ui.queryTargetsKeyPath, {
          unique: !0
        }), t.createObjectStore(qi.store);
      }

      Mi.store = "collectionParents",
      /** Keys are automatically assigned via the collectionId, parent properties. */
      Mi.keyPath = ["collectionId", "parent"];

      var Bi = function Bi( // Note: Previous schema versions included a field
      // "lastProcessedDocumentChangeId". Don't use anymore.

      /** The auto-generated client id assigned at client startup. */
      t,
      /** The last time this state was updated. */
      e,
      /** Whether the client's network connection is enabled. */
      n,
      /** Whether this client is running in a foreground tab. */
      r) {
        this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
      };
      /** Name of the IndexedDb object store. */


      Bi.store = "clientMetadata",
      /** Keys are automatically assigned via the clientId properties. */
      Bi.keyPath = "clientId";

      var ji = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([xi.store, ki.store, Oi.store, Vi.store, Ui.store, Si.store, qi.store, Ci.store], [Bi.store]), [Ri.store]), [Mi.store]),
          zi =
      /** @class */
      function () {
        function t() {
          /**
           * An in-memory copy of the index entries we've already written since the SDK
           * launched. Used to avoid re-writing the same entry repeatedly.
           *
           * This is *NOT* a complete cache of what's in persistence and so can never be used to
           * satisfy reads.
           */
          this.Ro = new Ni();
        }
        /**
         * Adds a new entry to the collection parent index.
         *
         * Repeated calls for the same collectionPath should be avoided within a
         * transaction as IndexedDbIndexManager only caches writes once a transaction
         * has been committed.
         */


        return t.prototype.jr = function (t, e) {
          var n = this;

          if (!this.Ro.has(e)) {
            var r = e.k(),
                i = e.F();
            t.Ni(function () {
              // Add the collection to the in memory cache only if the transaction was
              // successfully committed.
              n.Ro.add(e);
            });
            var o = {
              collectionId: r,
              parent: Zr(i)
            };
            return Gi(t).put(o);
          }

          return cr.resolve();
        }, t.prototype.zi = function (t, e) {
          var n = [],
              r = IDBKeyRange.bound([e, ""], [R(e), ""],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0);
          return Gi(t).ts(r).next(function (t) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
              // as we're running in a real browser), but there's a bug in
              // indexeddbshim that breaks our range in our tests running in node:
              // https://github.com/axemclion/IndexedDBShim/issues/334

              if (o.collectionId !== e) break;
              n.push(ei(o.parent));
            }

            return n;
          });
        }, t;
      }(); // V2 is no longer usable (see comment at top of file)
      // Visible for testing

      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A persisted implementation of IndexManager.
       */

      /**
       * Helper to get a typed SimpleDbStore for the collectionParents
       * document store.
       */


      function Gi(t) {
        return Zi.Kn(t, Mi.store);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Offset to ensure non-overlapping target ids. */

      /**
       * Generates monotonically increasing target IDs for sending targets to the
       * watch stream.
       *
       * The client constructs two generators, one for the target cache, and one for
       * for the sync engine (to generate limbo documents targets). These
       * generators produce non-overlapping IDs (by using even and odd IDs
       * respectively).
       *
       * By separating the target ID space, the query cache can generate target IDs
       * that persist across client restarts, while sync engine can independently
       * generate in-memory target IDs that are transient and can be reused after a
       * restart.
       */


      var Ki =
      /** @class */
      function () {
        function t(t) {
          this.Po = t;
        }

        return t.prototype.next = function () {
          return this.Po += 2, this.Po;
        }, t.yo = function () {
          // The target cache generator must return '2' in its first call to `next()`
          // as there is no differentiation in the protocol layer between an unset
          // number and the number '0'. If we were to sent a target with target ID
          // '0', the backend would consider it unset and replace it with its own ID.
          return new t(0);
        }, t.Vo = function () {
          // Sync engine assigns target IDs for limbo document detection.
          return new t(-1);
        }, t;
      }(),
          Qi =
      /** @class */
      function () {
        function t(t, e) {
          this.qr = t, this.serializer = e;
        } // PORTING NOTE: We don't cache global metadata for the target cache, since
        // some of it (in particular `highestTargetId`) can be modified by secondary
        // tabs. We could perhaps be more granular (and e.g. still cache
        // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
        // to IndexedDb whenever we need to read metadata. We can revisit if it turns
        // out to have a meaningful performance impact.


        return t.prototype.po = function (t) {
          var e = this;
          return this.bo(t).next(function (n) {
            var r = new Ki(n.highestTargetId);
            return n.highestTargetId = r.next(), e.vo(t, n).next(function () {
              return n.highestTargetId;
            });
          });
        }, t.prototype.So = function (t) {
          return this.bo(t).next(function (t) {
            return H.V(new W(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
          });
        }, t.prototype.Do = function (t) {
          return this.bo(t).next(function (t) {
            return t.highestListenSequenceNumber;
          });
        }, t.prototype.Co = function (t, e, n) {
          var r = this;
          return this.bo(t).next(function (i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.v()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.vo(t, i);
          });
        }, t.prototype.No = function (t, e) {
          var n = this;
          return this.xo(t, e).next(function () {
            return n.bo(t).next(function (r) {
              return r.targetCount += 1, n.Fo(e, r), n.vo(t, r);
            });
          });
        }, t.prototype.Oo = function (t, e) {
          return this.xo(t, e);
        }, t.prototype.ko = function (t, e) {
          var n = this;
          return this.Mo(t, e.targetId).next(function () {
            return Wi(t)["delete"](e.targetId);
          }).next(function () {
            return n.bo(t);
          }).next(function (e) {
            return x(e.targetCount > 0), e.targetCount -= 1, n.vo(t, e);
          });
        },
        /**
         * Drops any targets with sequence number less than or equal to the upper bound, excepting those
         * present in `activeTargetIds`. Document associations for the removed targets are also removed.
         * Returns the number of targets removed.
         */
        t.prototype.Or = function (t, e, n) {
          var r = this,
              i = 0,
              o = [];
          return Wi(t).rs(function (u, s) {
            var a = hi(s);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.ko(t, a)));
          }).next(function () {
            return cr.On(o);
          }).next(function () {
            return i;
          });
        },
        /**
         * Call provided function with each `TargetData` that we have cached.
         */
        t.prototype.Ce = function (t, e) {
          return Wi(t).rs(function (t, n) {
            var r = hi(n);
            e(r);
          });
        }, t.prototype.bo = function (t) {
          return Hi(t).get(qi.key).next(function (t) {
            return x(null !== t), t;
          });
        }, t.prototype.vo = function (t, e) {
          return Hi(t).put(qi.key, e);
        }, t.prototype.xo = function (t, e) {
          return Wi(t).put(fi(this.serializer, e));
        },
        /**
         * In-place updates the provided metadata to account for values in the given
         * TargetData. Saving is done separately. Returns true if there were any
         * changes to the metadata.
         */
        t.prototype.Fo = function (t, e) {
          var n = !1;
          return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
        }, t.prototype.$o = function (t) {
          return this.bo(t).next(function (t) {
            return t.targetCount;
          });
        }, t.prototype.Lo = function (t, e) {
          // Iterating by the canonicalId may yield more than one result because
          // canonicalId values are not required to be unique per target. This query
          // depends on the queryTargets index to be efficient.
          var n = ot(e),
              r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
              i = null;
          return Wi(t).rs({
            range: r,
            index: Ui.queryTargetsIndexName
          }, function (t, n, r) {
            var o = hi(n); // After finding a potential match, check that the target is
            // actually equal to the requested target.

            ut(e, o.target) && (i = o, r.done());
          }).next(function () {
            return i;
          });
        }, t.prototype.Bo = function (t, e, n) {
          var r = this,
              i = [],
              o = Yi(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
          // IndexedDb.

          return e.forEach(function (e) {
            var u = Zr(e.path);
            i.push(o.put(new Ci(n, u))), i.push(r.qr.qo(t, n, e));
          }), cr.On(i);
        }, t.prototype.Uo = function (t, e, n) {
          var r = this,
              i = Yi(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
          // IndexedDb.

          return cr.forEach(e, function (e) {
            var o = Zr(e.path);
            return cr.On([i["delete"]([n, o]), r.qr.Ko(t, n, e)]);
          });
        }, t.prototype.Mo = function (t, e) {
          var n = Yi(t),
              r = IDBKeyRange.bound([e], [e + 1],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0);
          return n["delete"](r);
        }, t.prototype.Qo = function (t, e) {
          var n = IDBKeyRange.bound([e], [e + 1],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0),
              r = Yi(t),
              i = At();
          return r.rs({
            range: n,
            ss: !0
          }, function (t, e, n) {
            var r = ei(t[1]),
                o = new $(r);
            i = i.add(o);
          }).next(function () {
            return i;
          });
        }, t.prototype.ro = function (t, e) {
          var n = Zr(e.path),
              r = IDBKeyRange.bound([n], [R(n)],
          /*lowerOpen=*/
          !1,
          /*upperOpen=*/
          !0),
              i = 0;
          return Yi(t).rs({
            index: Ci.documentTargetsIndex,
            ss: !0,
            range: r
          }, function (t, e, n) {
            var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.

            t[1];
            0 !== r && (i++, n.done());
          }).next(function () {
            return i > 0;
          });
        },
        /**
         * Looks up a TargetData entry by target ID.
         *
         * @param targetId The target ID of the TargetData entry to look up.
         * @return The cached TargetData entry, or null if the cache has no entry for
         * the target.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.Ue = function (t, e) {
          return Wi(t).get(e).next(function (t) {
            return t ? hi(t) : null;
          });
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Helper to get a typed SimpleDbStore for the queries object store.
       */


      function Wi(t) {
        return Zi.Kn(t, Ui.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the target globals object store.
       */


      function Hi(t) {
        return Zi.Kn(t, qi.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the document target object store.
       */


      function Yi(t) {
        return Zi.Kn(t, Ci.store);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Ji = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
          Xi =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this) || this).eo = t, r.Wo = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(jr),
          Zi =
      /** @class */
      function () {
        function t(
        /**
         * Whether to synchronize the in-memory state of multiple tabs and share
         * access to local persistence.
         */
        e, n, r, i, o, u, s, a, c,
        /**
         * If set to true, forcefully obtains database access. Existing tabs will
         * no longer be able to access IndexedDB.
         */
        h) {
          if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.fn = o, this.window = u, this.document = s, this.jo = c, this.Go = h, this.zo = null, this.Ho = !1, this.isPrimary = !1, this.networkEnabled = !0,
          /** Our window.unload handler, if registered. */
          this.Yo = null, this.inForeground = !1,
          /** Our 'visibilitychange' listener if registered. */
          this.Jo = null,
          /** The client metadata refresh task. */
          this.Xo = null,
          /** The last time we garbage collected the client metadata object store. */
          this.Zo = Number.NEGATIVE_INFINITY,
          /** A listener to notify on primary state changes. */
          this.ta = function (t) {
            return Promise.resolve();
          }, !t.Ln()) throw new I(b.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
          this.qr = new eo(this, i), this.ea = n + "main", this.serializer = new ni(a), this.na = new hr(this.ea, 10, new Ai(this.serializer)), this.sa = new Qi(this.qr, this.serializer), this.ki = new zi(), this.Fi = function (t, e) {
            return new gi(t, e);
          }(this.serializer, this.ki), this.window && this.window.localStorage ? this.ia = this.window.localStorage : (this.ia = null, !1 === h && N("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
        }

        return t.Kn = function (t, e) {
          if (t instanceof Xi) return hr.Kn(t.eo, e);
          throw S();
        },
        /**
         * Attempt to start IndexedDb persistence.
         *
         * @return {Promise<void>} Whether persistence was enabled.
         */
        t.prototype.start = function () {
          var t = this; // NOTE: This is expected to fail sometimes (in the case of another tab
          // already having the persistence lock), so it's the first thing we should
          // do.

          return this.ra().then(function () {
            if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
              // obtain the primary lease.
              throw new I(b.FAILED_PRECONDITION, Ji);
            return t.oa(), t.aa(), t.ca(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
              return t.sa.Do(e);
            });
          }).then(function (e) {
            t.zo = new Kr(e, t.jo);
          }).then(function () {
            t.Ho = !0;
          })["catch"](function (e) {
            return t.na && t.na.close(), Promise.reject(e);
          });
        },
        /**
         * Registers a listener that gets called when the primary state of the
         * instance changes. Upon registering, this listener is invoked immediately
         * with the current primary state.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.ua = function (t) {
          var r = this;
          return this.ta = function (i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                return this.br ? [2
                /*return*/
                , t(i)] : [2
                /*return*/
                ];
              });
            });
          }, t(this.isPrimary);
        },
        /**
         * Registers a listener that gets called when the database receives a
         * version change event indicating that it has deleted.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.ha = function (t) {
          var r = this;
          this.na.jn(function (i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null === i.newVersion ? [4
                    /*yield*/
                    , t()] : [3
                    /*break*/
                    , 2];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        },
        /**
         * Adjusts the current network state in the client's metadata, potentially
         * affecting the primary lease.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.la = function (t) {
          var r = this;
          this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
          // lease update will be propagated via `primaryStateListener`.
          this.fn.ws(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.br ? [4
                    /*yield*/
                    , this.ra()] : [3
                    /*break*/
                    , 2];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }));
        },
        /**
         * Updates the client metadata in IndexedDb and attempts to either obtain or
         * extend the primary lease for the local client. Asynchronously notifies the
         * primary state listener if the client either newly obtained or released its
         * primary lease.
         */
        t.prototype.ra = function () {
          var t = this;
          return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
            return to(e).put(new Bi(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
              if (t.isPrimary) return t._a(e).next(function (e) {
                e || (t.isPrimary = !1, t.fn.Cs(function () {
                  return t.ta(!1);
                }));
              });
            }).next(function () {
              return t.fa(e);
            }).next(function (n) {
              return t.isPrimary && !n ? t.da(e).next(function () {
                return !1;
              }) : !!n && t.wa(e).next(function () {
                return !0;
              });
            });
          })["catch"](function (e) {
            if (pr(e)) // Proceed with the existing state. Any subsequent access to
              // IndexedDB will verify the lease.
              return T("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return T("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
            /* isPrimary= */
            !1;
          }).then(function (e) {
            t.isPrimary !== e && t.fn.Cs(function () {
              return t.ta(e);
            }), t.isPrimary = e;
          });
        }, t.prototype._a = function (t) {
          var e = this;
          return $i(t).get(Si.key).next(function (t) {
            return cr.resolve(e.Ea(t));
          });
        }, t.prototype.Ta = function (t) {
          return to(t)["delete"](this.clientId);
        },
        /**
         * If the garbage collection threshold has passed, prunes the
         * RemoteDocumentChanges and the ClientMetadata store based on the last update
         * time of all clients.
         */
        t.prototype.Ia = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e,
                r,
                i,
                o,
                u = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return !this.isPrimary || this.ma(this.Zo, 18e5) ? [3
                  /*break*/
                  , 2] : (this.Zo = Date.now(), [4
                  /*yield*/
                  , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (e) {
                    var n = t.Kn(e, Bi.store);
                    return n.ts().next(function (t) {
                      var e = u.Aa(t, 18e5),
                          r = t.filter(function (t) {
                        return -1 === e.indexOf(t);
                      }); // Delete metadata for clients that are no longer considered active.

                      return cr.forEach(r, function (t) {
                        return n["delete"](t.clientId);
                      }).next(function () {
                        return r;
                      });
                    });
                  })["catch"](function () {
                    return [];
                  })]);

                case 1:
                  // Delete potential leftover entries that may continue to mark the
                  // inactive clients as zombied in LocalStorage.
                  // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                  // the client atomically, but we can't. So we opt to delete the IndexedDb
                  // entries first to avoid potentially reviving a zombied client.
                  if (e = n.sent(), this.ia) for (r = 0, i = e; r < i.length; r++) {
                    o = i[r], this.ia.removeItem(this.Ra(o.clientId));
                  }
                  n.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * Schedules a recurring timer to update the client metadata and to either
         * extend or acquire the primary lease if the client is eligible.
         */
        t.prototype.ca = function () {
          var t = this;
          this.Xo = this.fn.yn("client_metadata_refresh"
          /* ClientMetadataRefresh */
          , 4e3, function () {
            return t.ra().then(function () {
              return t.Ia();
            }).then(function () {
              return t.ca();
            });
          });
        },
        /** Checks whether `client` is the local client. */
        t.prototype.Ea = function (t) {
          return !!t && t.ownerId === this.clientId;
        },
        /**
         * Evaluate the state of all active clients and determine whether the local
         * client is or can act as the holder of the primary lease. Returns whether
         * the client is eligible for the lease, but does not actually acquire it.
         * May return 'false' even if there is no active leaseholder and another
         * (foreground) client should become leaseholder instead.
         */
        t.prototype.fa = function (t) {
          var e = this;
          return this.Go ? cr.resolve(!0) : $i(t).get(Si.key).next(function (n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.ma(n.leaseTimestampMs, 5e3) && !e.Pa(n.ownerId)) {
              if (e.Ea(n) && e.networkEnabled) return !0;

              if (!e.Ea(n)) {
                if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
                  // not opted into multi-tab synchronization. If this happens at
                  // client startup, we reject the Promise returned by
                  // `enablePersistence()` and the user can continue to use Firestore
                  // with in-memory persistence.
                  // If this fails during a lease refresh, we will instead block the
                  // AsyncQueue from executing further operations. Note that this is
                  // acceptable since mixing & matching different `synchronizeTabs`
                  // settings is not supported.
                  // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                  // no longer be turned off.
                  throw new I(b.FAILED_PRECONDITION, Ji);
                return !1;
              }
            }

            return !(!e.networkEnabled || !e.inForeground) || to(t).ts().next(function (t) {
              return void 0 === e.Aa(t, 5e3).find(function (t) {
                if (e.clientId !== t.clientId) {
                  var n = !e.networkEnabled && t.networkEnabled,
                      r = !e.inForeground && t.inForeground,
                      i = e.networkEnabled === t.networkEnabled;
                  if (n || r && i) return !0;
                }

                return !1;
              });
            });
          }).next(function (t) {
            return e.isPrimary !== t && T("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
          });
        }, t.prototype.ga = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                  // has obtained the primary lease.
                  // The shutdown() operations are idempotent and can be called even when
                  // start() aborted (e.g. because it couldn't acquire the persistence lease).
                  return this.Ho = !1, this.ya(), this.Xo && (this.Xo.cancel(), this.Xo = null), this.Va(), this.pa(), [4
                  /*yield*/
                  , this.na.runTransaction("shutdown", "readwrite", [Si.store, Bi.store], function (e) {
                    var n = new Xi(e, Kr.ir);
                    return t.da(n).next(function () {
                      return t.Ta(n);
                    });
                  })];

                case 1:
                  // The shutdown() operations are idempotent and can be called even when
                  // start() aborted (e.g. because it couldn't acquire the persistence lease).
                  // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                  // has obtained the primary lease.
                  return e.sent(), this.na.close(), // Remove the entry marking the client as zombied from LocalStorage since
                  // we successfully deleted its metadata from IndexedDb.
                  this.ba(), [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * Returns clients that are not zombied and have an updateTime within the
         * provided threshold.
         */
        t.prototype.Aa = function (t, e) {
          var n = this;
          return t.filter(function (t) {
            return n.ma(t.updateTimeMs, e) && !n.Pa(t.clientId);
          });
        },
        /**
         * Returns the IDs of the clients that are currently active. If multi-tab
         * is not supported, returns an array that only contains the local client's
         * ID.
         *
         * PORTING NOTE: This is only used for Web multi-tab.
         */
        t.prototype.va = function () {
          var t = this;
          return this.runTransaction("getActiveClients", "readonly", function (e) {
            return to(e).ts().next(function (e) {
              return t.Aa(e, 18e5).map(function (t) {
                return t.clientId;
              });
            });
          });
        }, Object.defineProperty(t.prototype, "br", {
          get: function get() {
            return this.Ho;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.Sa = function (t) {
          return li.Kr(t, this.serializer, this.ki, this.qr);
        }, t.prototype.Da = function () {
          return this.sa;
        }, t.prototype.Ca = function () {
          return this.Fi;
        }, t.prototype.Na = function () {
          return this.ki;
        }, t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          T("IndexedDbPersistence", "Starting transaction:", t);
          var i,
              o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
          // are the only reader/writer.

          return this.na.runTransaction(t, o, ji, function (o) {
            return i = new Xi(o, r.zo ? r.zo.next() : Kr.ir), "readwrite-primary" === e ? r._a(i).next(function (t) {
              return !!t || r.fa(i);
            }).next(function (e) {
              if (!e) throw N("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.fn.Cs(function () {
                return r.ta(!1);
              }), new I(b.FAILED_PRECONDITION, Br);
              return n(i);
            }).next(function (t) {
              return r.wa(i).next(function () {
                return t;
              });
            }) : r.xa(i).next(function () {
              return n(i);
            });
          }).then(function (t) {
            return i.xi(), t;
          });
        },
        /**
         * Verifies that the current tab is the primary leaseholder or alternatively
         * that the leaseholder has opted into multi-tab synchronization.
         */
        // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
        // be turned off.
        t.prototype.xa = function (t) {
          var e = this;
          return $i(t).get(Si.key).next(function (t) {
            if (null !== t && e.ma(t.leaseTimestampMs, 5e3) && !e.Pa(t.ownerId) && !e.Ea(t) && !(e.Go || e.allowTabSynchronization && t.allowTabSynchronization)) throw new I(b.FAILED_PRECONDITION, Ji);
          });
        },
        /**
         * Obtains or extends the new primary lease for the local client. This
         * method does not verify that the client is eligible for this lease.
         */
        t.prototype.wa = function (t) {
          var e = new Si(this.clientId, this.allowTabSynchronization, Date.now());
          return $i(t).put(Si.key, e);
        }, t.Ln = function () {
          return hr.Ln();
        },
        /** Checks the primary lease and removes it if we are the current primary. */
        t.prototype.da = function (t) {
          var e = this,
              n = $i(t);
          return n.get(Si.key).next(function (t) {
            return e.Ea(t) ? (T("IndexedDbPersistence", "Releasing primary lease."), n["delete"](Si.key)) : cr.resolve();
          });
        },
        /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
        t.prototype.ma = function (t, e) {
          var n = Date.now();
          return !(t < n - e || t > n && (N("Detected an update time that is in the future: " + t + " > " + n), 1));
        }, t.prototype.oa = function () {
          var t = this;
          null !== this.document && "function" == typeof this.document.addEventListener && (this.Jo = function () {
            t.fn.ws(function () {
              return t.inForeground = "visible" === t.document.visibilityState, t.ra();
            });
          }, this.document.addEventListener("visibilitychange", this.Jo), this.inForeground = "visible" === this.document.visibilityState);
        }, t.prototype.Va = function () {
          this.Jo && (this.document.removeEventListener("visibilitychange", this.Jo), this.Jo = null);
        },
        /**
         * Attaches a window.unload handler that will synchronously write our
         * clientId to a "zombie client id" location in LocalStorage. This can be used
         * by tabs trying to acquire the primary lease to determine that the lease
         * is no longer valid even if the timestamp is recent. This is particularly
         * important for the refresh case (so the tab correctly re-acquires the
         * primary lease). LocalStorage is used for this rather than IndexedDb because
         * it is a synchronous API and so can be used reliably from  an unload
         * handler.
         */
        t.prototype.aa = function () {
          var t,
              e = this;
          "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Yo = function () {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.ya(), e.fn.ws(function () {
              return e.ga();
            });
          }, this.window.addEventListener("unload", this.Yo));
        }, t.prototype.pa = function () {
          this.Yo && (this.window.removeEventListener("unload", this.Yo), this.Yo = null);
        },
        /**
         * Returns whether a client is "zombied" based on its LocalStorage entry.
         * Clients become zombied when their tab closes without running all of the
         * cleanup logic in `shutdown()`.
         */
        t.prototype.Pa = function (t) {
          var e;

          try {
            var n = null !== (null === (e = this.ia) || void 0 === e ? void 0 : e.getItem(this.Ra(t)));
            return T("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n;
          } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return N("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
          }
        },
        /**
         * Record client as zombied (a client that had its tab closed). Zombied
         * clients are ignored during primary tab selection.
         */
        t.prototype.ya = function () {
          if (this.ia) try {
            this.ia.setItem(this.Ra(this.clientId), String(Date.now()));
          } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            N("Failed to set zombie client id.", t);
          }
        },
        /** Removes the zombied client entry if it exists. */
        t.prototype.ba = function () {
          if (this.ia) try {
            this.ia.removeItem(this.Ra(this.clientId));
          } catch (t) {// Ignore
          }
        }, t.prototype.Ra = function (t) {
          return "firestore_zombie_" + this.persistenceKey + "_" + t;
        }, t;
      }();
      /**
       * Oldest acceptable age in milliseconds for client metadata before the client
       * is considered inactive and its associated data is garbage collected.
       */

      /**
       * Helper to get a typed SimpleDbStore for the primary client object store.
       */


      function $i(t) {
        return Zi.Kn(t, Si.store);
      }
      /**
       * Helper to get a typed SimpleDbStore for the client metadata object store.
       */


      function to(t) {
        return Zi.Kn(t, Bi.store);
      }
      /** Provides LRU functionality for IndexedDB persistence. */


      var eo =
      /** @class */
      function () {
        function t(t, e) {
          this.db = t, this.gr = new Xr(this, e);
        }

        return t.prototype.Cr = function (t) {
          var e = this.Fa(t);
          return this.db.Da().$o(t).next(function (t) {
            return e.next(function (e) {
              return t + e;
            });
          });
        }, t.prototype.Fa = function (t) {
          var e = 0;
          return this.Fr(t, function (t) {
            e++;
          }).next(function () {
            return e;
          });
        }, t.prototype.Ce = function (t, e) {
          return this.db.Da().Ce(t, e);
        }, t.prototype.Fr = function (t, e) {
          return this.Oa(t, function (t, n) {
            return e(n);
          });
        }, t.prototype.qo = function (t, e, n) {
          return no(t, n);
        }, t.prototype.Ko = function (t, e, n) {
          return no(t, n);
        }, t.prototype.Or = function (t, e, n) {
          return this.db.Da().Or(t, e, n);
        }, t.prototype.so = function (t, e) {
          return no(t, e);
        },
        /**
         * Returns true if anything would prevent this document from being garbage
         * collected, given that the document in question is not present in any
         * targets and has a sequence number less than or equal to the upper bound for
         * the collection run.
         */
        t.prototype.ka = function (t, e) {
          return function (t, e) {
            var n = !1;
            return mi(t).os(function (r) {
              return pi(t, r, e).next(function (t) {
                return t && (n = !0), cr.resolve(!t);
              });
            }).next(function () {
              return n;
            });
          }(t, e);
        }, t.prototype.kr = function (t, e) {
          var n = this,
              r = this.db.Ca().wo(),
              i = [],
              o = 0;
          return this.Oa(t, function (u, s) {
            if (s <= e) {
              var a = n.ka(t, u).next(function (e) {
                if (!e) // Our size accounting requires us to read all documents before
                  // removing them.
                  return o++, r.bi(t, u).next(function () {
                    return r.pi(u), Yi(t)["delete"]([0, Zr(u.path)]);
                  });
              });
              i.push(a);
            }
          }).next(function () {
            return cr.On(i);
          }).next(function () {
            return r.apply(t);
          }).next(function () {
            return o;
          });
        }, t.prototype.removeTarget = function (t, e) {
          var n = e.st(t.Wo);
          return this.db.Da().Oo(t, n);
        }, t.prototype.Ma = function (t, e) {
          return no(t, e);
        },
        /**
         * Call provided function for each document in the cache that is 'orphaned'. Orphaned
         * means not a part of any target, so the only entry in the target-document index for
         * that document will be the sentinel row (targetId 0), which will also have the sequence
         * number for the last time the document was accessed.
         */
        t.prototype.Oa = function (t, e) {
          var n,
              r = Yi(t),
              i = Kr.ir;
          return r.rs({
            index: Ci.documentTargetsIndex
          }, function (t, r) {
            var o = t[0],
                u = (t[1], r.path),
                s = r.sequenceNumber;
            0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== Kr.ir && e(new $(ei(n)), i), // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = s, n = u) : // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = Kr.ir;
          }).next(function () {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== Kr.ir && e(new $(ei(n)), i);
          });
        }, t.prototype.$r = function (t) {
          return this.db.Ca().To(t);
        }, t;
      }();

      function no(t, e) {
        return Yi(t).put(
        /**
        * @return A value suitable for writing a sentinel row in the target-document
        * store.
        */
        function (t, e) {
          return new Ci(0, Zr(t.path), e);
        }(e, t.Wo));
      }
      /**
       * Generates a string used as a prefix when storing data in IndexedDB and
       * LocalStorage.
       */


      function ro(t, e) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var n = t.projectId;
        return t.I || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
        /**
        * Implements `LocalStore` interface.
        *
        * Note: some field defined in this class might have public access level, but
        * the class is not exported so they are only accessible from this module.
        * This is useful to implement optional features (like bundles) in free
        * functions, such that they are tree-shakeable.
        */
        ;
      }

      var io =
      /** @class */
      function () {
        function t(
        /** Manages our in-memory or durable persistence. */
        t, e, n) {
          this.persistence = t, this.$a = e,
          /**
               * Maps a targetID to data about its target.
               *
               * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
               * of `applyRemoteEvent()` idempotent.
               */
          this.La = new dt(L),
          /** Maps a target to its targetID. */
          // TODO(wuandy): Evaluate if TargetId can be part of Target.
          this.Ba = new Q(function (t) {
            return ot(t);
          }, ut),
          /**
               * The read time of the last entry processed by `getNewDocumentChanges()`.
               *
               * PORTING NOTE: This is only used for multi-tab synchronization.
               */
          this.qa = H.min(), this.Oi = t.Sa(n), this.Ua = t.Ca(), this.sa = t.Da(), this.Ka = new zr(this.Ua, this.Oi, this.persistence.Na()), this.$a.Qa(this.Ka);
        }

        return t.prototype.vr = function (t) {
          var e = this;
          return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
            return t.Mr(n, e.La);
          });
        }, t;
      }();
      /**
       * Tells the LocalStore that the currently authenticated user has changed.
       *
       * In response the local store switches the mutation queue to the new user and
       * returns any resulting document changes.
       */
      // PORTING NOTE: Android and iOS only return the documents affected by the
      // change.


      function oo(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = k(t), i = e.Oi, o = e.Ka, [4
                /*yield*/
                , e.persistence.runTransaction("Handle user change", "readonly", function (t) {
                  // Swap out the mutation queue, grabbing the pending mutation batches
                  // before and after.
                  var n;
                  return e.Oi.Jr(t).next(function (u) {
                    return n = u, i = e.persistence.Sa(r), // Recreate our LocalDocumentsView using the new
                    // MutationQueue.
                    o = new zr(e.Ua, i, e.persistence.Na()), i.Jr(t);
                  }).next(function (e) {
                    for (var r = [], i = [], u = At(), s = 0, a = n // Union the old/new changed keys.
                    ; s < a.length; s++) {
                      var c = a[s];
                      r.push(c.batchId);

                      for (var h = 0, f = c.mutations; h < f.length; h++) {
                        var l = f[h];
                        u = u.add(l.key);
                      }
                    }

                    for (var p = 0, d = e; p < d.length; p++) {
                      var v = d[p];
                      i.push(v.batchId);

                      for (var y = 0, m = v.mutations; y < m.length; y++) {
                        var g = m[y];
                        u = u.add(g.key);
                      }
                    } // Return the set of all (potentially) changed documents and the list
                    // of mutation batch IDs that were affected by change.


                    return o.qi(t, u).next(function (t) {
                      return {
                        Wa: t,
                        ja: r,
                        Ga: i
                      };
                    });
                  });
                })];

              case 1:
                return u = n.sent(), [2
                /*return*/
                , (e.Oi = i, e.Ka = o, e.$a.Qa(e.Ka), u)];
            }
          });
        });
      }
      /* Accepts locally generated Mutations and commit them to storage. */

      /**
       * Acknowledges the given batch.
       *
       * On the happy path when a batch is acknowledged, the local store will
       *
       *  + remove the batch from the mutation queue;
       *  + apply the changes to the remote document cache;
       *  + recalculate the latency compensated view implied by those changes (there
       *    may be mutations in the queue that affect the documents but haven't been
       *    acknowledged yet); and
       *  + give the changed documents back the sync engine
       *
       * @returns The resulting (modified) documents.
       */


      function uo(t, e) {
        var n = k(t);
        return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
          var r = e.batch.keys(),
              i = n.Ua.wo({
            Eo: !0
          });
          return function (t, e, n, r) {
            var i = n.batch,
                o = i.keys(),
                u = cr.resolve();
            return o.forEach(function (t) {
              u = u.next(function () {
                return r.bi(e, t);
              }).next(function (e) {
                var o = e,
                    u = n.Ai.get(t);
                x(null !== u), (!o || o.version.u(u) < 0) && (o = i.wi(t, o, n)) && // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                r.yi(o, n.mi);
              });
            }), u.next(function () {
              return t.Oi.Zr(e, i);
            });
          }(n, t, e, i).next(function () {
            return i.apply(t);
          }).next(function () {
            return n.Oi.io(t);
          }).next(function () {
            return n.Ka.qi(t, r);
          });
        });
      }
      /**
       * Removes mutations from the MutationQueue for the specified batch;
       * LocalDocuments will be recalculated.
       *
       * @returns The resulting modified documents.
       */

      /**
       * Returns the last consistent snapshot processed (used by the RemoteStore to
       * determine whether to buffer incoming snapshots from the backend).
       */


      function so(t) {
        var e = k(t);
        return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
          return e.sa.So(t);
        });
      }
      /**
       * Updates the "ground-state" (remote) documents. We assume that the remote
       * event reflects any write batches that have been acknowledged or rejected
       * (i.e. we do not re-apply local mutations to updates from this event).
       *
       * LocalDocuments are re-calculated if there are remaining mutations in the
       * queue.
       */


      function ao(t, e) {
        var n = k(t),
            r = e.nt,
            i = n.La;
        return n.persistence.runTransaction("Apply remote event", "readwrite-primary", function (t) {
          var o = n.Ua.wo({
            Eo: !0
          }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

          i = n.La;
          var u = [];
          e.zt.forEach(function (e, o) {
            var s = i.get(o);

            if (s) {
              // Only update the remote keys if the target is still active. This
              // ensures that we can persist the updated target data along with
              // the updated assignment.
              u.push(n.sa.Uo(t, e.se, o).next(function () {
                return n.sa.Bo(t, e.ee, o);
              }));
              var a = e.resumeToken; // Update the resume token if the change includes one.

              if (a.o() > 0) {
                var c = s.it(a, r).st(t.Wo);
                i = i.ot(o, c), // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).

                /**
                * Returns true if the newTargetData should be persisted during an update of
                * an active target. TargetData should always be persisted when a target is
                * being released and should not call this function.
                *
                * While the target is active, TargetData updates can be omitted when nothing
                * about the target has changed except metadata like the resume token or
                * snapshot version. Occasionally it's worth the extra write to prevent these
                * values from getting too stale after a crash, but this doesn't have to be
                * too frequent.
                */
                function (t, e, n) {
                  // Always persist target data if we don't already have a resume token.
                  return x(e.resumeToken.o() > 0), 0 === t.resumeToken.o() || // Don't allow resume token changes to be buffered indefinitely. This
                  // allows us to be reasonably up-to-date after a crash and avoids needing
                  // to loop over all active queries on shutdown. Especially in the browser
                  // we may not get time to do anything interesting while the current tab is
                  // closing.
                  e.nt.p() - t.nt.p() >= 3e8 || n.ee.size + n.ne.size + n.se.size > 0;
                }(s, c, e) && u.push(n.sa.Oo(t, c));
              }
            }
          });
          var s = bt(),
              a = At(); // HACK: The only reason we allow a null snapshot version is so that we
          // can synthesize remote events when we get permission denied errors while
          // trying to resolve the state of a locally cached document that is in
          // limbo.

          if (e.Yt.forEach(function (t, e) {
            a = a.add(t);
          }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
          // documents in advance in a single call.
          u.push(o.getEntries(t, a).next(function (i) {
            e.Yt.forEach(function (a, c) {
              var h = i.get(a); // Note: The order of the steps below is important, since we want
              // to ensure that rejected limbo resolutions (which fabricate
              // NoDocuments with SnapshotVersion.min()) never add documents to
              // cache.

              c instanceof Nn && c.version.isEqual(H.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
              // events. We remove these documents from cache since we lost
              // access.
              o.pi(a, r), s = s.ot(a, c)) : null == h || c.version.u(h.version) > 0 || 0 === c.version.u(h.version) && h.hasPendingWrites ? (o.yi(c, r), s = s.ot(a, c)) : T("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version), e.Jt.has(a) && u.push(n.persistence.qr.Ma(t, a));
            });
          })), !r.isEqual(H.min())) {
            var c = n.sa.So(t).next(function (e) {
              return n.sa.Co(t, t.Wo, r);
            });
            u.push(c);
          }

          return cr.On(u).next(function () {
            return o.apply(t);
          }).next(function () {
            return n.Ka.Ui(t, s);
          });
        }).then(function (t) {
          return n.La = i, t;
        });
      }
      /**
       * Gets the mutation batch after the passed in batchId in the mutation queue
       * or null if empty.
       * @param afterBatchId If provided, the batch to search after.
       * @returns The next mutation or null if there wasn't one.
       */


      function co(t, e) {
        var n = k(t);
        return n.persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
          return void 0 === e && (e = -1), n.Oi.Hr(t, e);
        });
      }
      /**
       * Reads the current value of a Document with a given key or null if not
       * found - used for testing.
       */

      /**
       * Assigns the given target an internal ID so that its results can be pinned so
       * they don't get GC'd. A target must be allocated in the local store before
       * the store can be used to manage its view.
       *
       * Allocating an already allocated `Target` will return the existing `TargetData`
       * for that `Target`.
       */


      function ho(t, e) {
        var n = k(t);
        return n.persistence.runTransaction("Allocate target", "readwrite", function (t) {
          var r;
          return n.sa.Lo(t, e).next(function (i) {
            return i ? ( // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, cr.resolve(r)) : n.sa.po(t).next(function (i) {
              return r = new ht(e, i, 0
              /* Listen */
              , t.Wo), n.sa.No(t, r).next(function () {
                return r;
              });
            });
          });
        }).then(function (t) {
          // If Multi-Tab is enabled, the existing target data may be newer than
          // the in-memory data
          var r = n.La.get(t.targetId);
          return (null === r || t.nt.u(r.nt) > 0) && (n.La = n.La.ot(t.targetId, t), n.Ba.set(e, t.targetId)), t;
        });
      }
      /**
       * Returns the TargetData as seen by the LocalStore, including updates that may
       * have not yet been persisted to the TargetCache.
       */
      // Visible for testing.

      /**
       * Unpins all the documents associated with the given target. If
       * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
       * directly removes the associated target data from the target cache.
       *
       * Releasing a non-existing `Target` is a no-op.
       */
      // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.


      function fo(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = k(t), o = e.La.get(r), u = i ? "readwrite" : "readwrite-primary", n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 5]), i ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , e.persistence.runTransaction("Release target", u, function (t) {
                  return e.persistence.qr.removeTarget(t, o);
                })];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [3
                /*break*/
                , 5];

              case 4:
                if (!pr(s = n.sent())) throw s; // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.

                return T("LocalStore", "Failed to update sequence numbers for target " + r + ": " + s), [3
                /*break*/
                , 5];

              case 5:
                return e.La = e.La.remove(r), e.Ba["delete"](o.target), [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Runs the specified query against the local store and returns the results,
       * potentially taking advantage of query data from previous executions (such
       * as the set of remote keys).
       *
       * @param usePreviousResults Whether results from previous executions can
       * be used to optimize this query execution.
       */


      function lo(t, e, n) {
        var r = k(t),
            i = H.min(),
            o = At();
        return r.persistence.runTransaction("Execute query", "readonly", function (t) {
          return function (t, e, n) {
            var r = k(t),
                i = r.Ba.get(n);
            return void 0 !== i ? cr.resolve(r.La.get(i)) : r.sa.Lo(e, n);
          }(r, t, Un(e)).next(function (e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.sa.Qo(t, e.targetId).next(function (t) {
              o = t;
            });
          }).next(function () {
            return r.$a.Qi(t, e, n ? i : H.min(), n ? o : At());
          }).next(function (t) {
            return {
              documents: t,
              za: o
            };
          });
        });
      } // PORTING NOTE: Multi-Tab only.


      function po(t, e) {
        var n = k(t),
            r = k(n.sa),
            i = n.La.get(e);
        return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) {
          return r.Ue(t, e).next(function (t) {
            return t ? t.target : null;
          });
        });
      }
      /**
       * Returns the set of documents that have been updated since the last call.
       * If this is the first call, returns the set of changes since client
       * initialization. Further invocations will return document that have changed
       * since the prior call.
       */
      // PORTING NOTE: Multi-Tab only.


      function vo(t) {
        var e = k(t);
        return e.persistence.runTransaction("Get new document changes", "readonly", function (t) {
          return function (t, e, n) {
            var r = k(t),
                i = bt(),
                o = oi(n),
                u = Ii(e),
                s = IDBKeyRange.lowerBound(o, !0);
            return u.rs({
              index: Vi.readTimeIndex,
              range: s
            }, function (t, e) {
              // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
              // the documents directly since we want to keep sentinel deletes.
              var n = ri(r.serializer, e);
              i = i.ot(n.key, n), o = e.readTime;
            }).next(function () {
              return {
                Ha: i,
                readTime: ui(o)
              };
            });
          }(e.Ua, t, e.qa);
        }).then(function (t) {
          var n = t.Ha,
              r = t.readTime;
          return e.qa = r, n;
        });
      }
      /**
       * Reads the newest document change from persistence and moves the internal
       * synchronization marker forward so that calls to `getNewDocumentChanges()`
       * only return changes that happened after client initialization.
       */
      // PORTING NOTE: Multi-Tab only.


      function yo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            return [2
            /*return*/
            , (e = k(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
              return function (t) {
                var e = Ii(t),
                    n = H.min(); // If there are no existing entries, we return SnapshotVersion.min().

                return e.rs({
                  index: Vi.readTimeIndex,
                  reverse: !0
                }, function (t, e, r) {
                  e.readTime && (n = ui(e.readTime)), r.done();
                }).next(function () {
                  return n;
                });
              }(t);
            }).then(function (t) {
              e.qa = t;
            })];
          });
        });
      }
      /**
       * Verifies the error thrown by a LocalStore operation. If a LocalStore
       * operation fails because the primary lease has been taken by another client,
       * we ignore the error (the persistence layer will immediately call
       * `applyPrimaryLease` to propagate the primary state change). All other errors
       * are re-thrown.
       *
       * @param err An error returned by a LocalStore operation.
       * @return A Promise that resolves after we recovered, or the original error.
       */


      function mo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            if (t.code !== b.FAILED_PRECONDITION || t.message !== Br) throw t;
            return T("LocalStore", "Unexpectedly lost primary lease"), [2
            /*return*/
            ];
          });
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A PersistentStream is an abstract base class that represents a streaming RPC
       * to the Firestore backend. It's built on top of the connections own support
       * for streaming RPCs, and adds several critical features for our clients:
       *
       *   - Exponential backoff on failure
       *   - Authentication via CredentialsProvider
       *   - Dispatching all callbacks into the shared worker queue
       *   - Closing idle streams after 60 seconds of inactivity
       *
       * Subclasses of PersistentStream implement serialization of models to and
       * from the JSON representation of the protocol buffers for a specific
       * streaming RPC.
       *
       * ## Starting and Stopping
       *
       * Streaming RPCs are stateful and need to be start()ed before messages can
       * be sent and received. The PersistentStream will call the onOpen() function
       * of the listener once the stream is ready to accept requests.
       *
       * Should a start() fail, PersistentStream will call the registered onClose()
       * listener with a FirestoreError indicating what went wrong.
       *
       * A PersistentStream can be started and stopped repeatedly.
       *
       * Generic types:
       *  SendType: The type of the outgoing message of the underlying
       *    connection stream
       *  ReceiveType: The type of the incoming message of the underlying
       *    connection stream
       *  ListenerType: The type of the listener that will be used for callbacks
       */


      var go =
      /** @class */
      function () {
        function t(t, e, n, r, i, o) {
          this.fn = t, this.Ya = n, this.Ja = r, this.Xa = i, this.listener = o, this.state = 0
          /* Initial */
          ,
          /**
               * A close count that's incremented every time the stream is closed; used by
               * getCloseGuardedDispatcher() to invalidate callbacks that happen after
               * close.
               */
          this.Za = 0, this.tc = null, this.stream = null, this.ys = new ar(t, e)
          /**
          * Returns true if start() has been called and no error has occurred. True
          * indicates the stream is open or in the process of opening (which
          * encompasses respecting backoff, getting auth tokens, and starting the
          * actual RPC). Use isOpen() to determine if the stream is open and ready for
          * outbound requests.
          */
          ;
        }

        return t.prototype.ec = function () {
          return 1
          /* Starting */
          === this.state || 2
          /* Open */
          === this.state || 4
          /* Backoff */
          === this.state;
        },
        /**
         * Returns true if the underlying RPC is open (the onOpen() listener has been
         * called) and the stream is ready for outbound requests.
         */
        t.prototype.nc = function () {
          return 2
          /* Open */
          === this.state;
        },
        /**
         * Starts the RPC. Only allowed if isStarted() returns false. The stream is
         * not immediately ready for use: onOpen() will be invoked when the RPC is
         * ready for outbound requests, at which point isOpen() will return true.
         *
         * When start returns, isStarted() will return true.
         */
        t.prototype.start = function () {
          3
          /* Error */
          !== this.state ? this.auth() : this.sc();
        },
        /**
         * Stops the RPC. This call is idempotent and allowed regardless of the
         * current isStarted() state.
         *
         * When stop returns, isStarted() and isOpen() will both return false.
         */
        t.prototype.stop = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.ec() ? [4
                  /*yield*/
                  , this.close(0
                  /* Initial */
                  )] : [3
                  /*break*/
                  , 2];

                case 1:
                  t.sent(), t.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * After an error the stream will usually back off on the next attempt to
         * start it. If the error warrants an immediate restart of the stream, the
         * sender can use this to indicate that the receiver should not back off.
         *
         * Each error will call the onClose() listener. That function can decide to
         * inhibit backoff if required.
         */
        t.prototype.ic = function () {
          this.state = 0
          /* Initial */
          , this.ys.reset();
        },
        /**
         * Marks this stream as idle. If no further actions are performed on the
         * stream for one minute, the stream will automatically close itself and
         * notify the stream's onClose() handler with Status.OK. The stream will then
         * be in a !isStarted() state, requiring the caller to start the stream again
         * before further use.
         *
         * Only streams that are in state 'Open' can be marked idle, as all other
         * states imply pending network operations.
         */
        t.prototype.rc = function () {
          var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
          // running a timer (in which case the previous idle timeout still applies).

          this.nc() && null === this.tc && (this.tc = this.fn.yn(this.Ya, 6e4, function () {
            return t.oc();
          }));
        },
        /** Sends a message to the underlying stream. */
        t.prototype.ac = function (t) {
          this.cc(), this.stream.send(t);
        },
        /** Called by the idle timer when the stream should close due to inactivity. */
        t.prototype.oc = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              return this.nc() ? [2
              /*return*/
              , this.close(0
              /* Initial */
              )] : [2
              /*return*/
              ];
            });
          });
        },
        /** Marks the stream as active again. */
        t.prototype.cc = function () {
          this.tc && (this.tc.cancel(), this.tc = null);
        },
        /**
         * Closes the stream and cleans up as necessary:
         *
         * * closes the underlying GRPC stream;
         * * calls the onClose handler with the given 'error';
         * * sets internal stream state to 'finalState';
         * * adjusts the backoff timer based on the error
         *
         * A new stream can be opened by calling start().
         *
         * @param finalState the intended state of the stream after closing.
         * @param error the error the connection was closed with.
         */
        t.prototype.close = function (t, r) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  // Notify the listener that the stream closed.
                  // Cancel any outstanding timers (they're guaranteed not to execute).
                  return this.cc(), this.ys.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
                  // underlying stream), guaranteeing they won't execute.
                  this.Za++, 3
                  /* Error */
                  !== t ? // If this is an intentional close ensure we don't delay our next connection attempt.
                  this.ys.reset() : r && r.code === b.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                  N(r.toString()), N("Using maximum backoff delay to prevent overloading the backend."), this.ys.Rn()) : r && r.code === b.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                  // just expired.
                  this.Xa.ri(), // Clean up the underlying stream because we are no longer interested in events.
                  null !== this.stream && (this.uc(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
                  // inhibit backoff or otherwise manipulate the state in its non-started state.
                  this.state = t, [4
                  /*yield*/
                  , this.listener.hc(r)];

                case 1:
                  // Cancel any outstanding timers (they're guaranteed not to execute).
                  // Notify the listener that the stream closed.
                  return e.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        },
        /**
         * Can be overridden to perform additional cleanup before the stream is closed.
         * Calling super.tearDown() is not required.
         */
        t.prototype.uc = function () {}, t.prototype.auth = function () {
          var t = this;
          this.state = 1
          /* Starting */
          ;
          var e = this.lc(this.Za),
              n = this.Za; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

          this.Xa.getToken().then(function (e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Za === n && // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t._c(e);
          }, function (n) {
            e(function () {
              var e = new I(b.UNKNOWN, "Fetching auth token failed: " + n.message);
              return t.fc(e);
            });
          });
        }, t.prototype._c = function (t) {
          var e = this,
              n = this.lc(this.Za);
          this.stream = this.dc(t), this.stream.wc(function () {
            n(function () {
              return e.state = 2
              /* Open */
              , e.listener.wc();
            });
          }), this.stream.hc(function (t) {
            n(function () {
              return e.fc(t);
            });
          }), this.stream.onMessage(function (t) {
            n(function () {
              return e.onMessage(t);
            });
          });
        }, t.prototype.sc = function () {
          var t = this;
          this.state = 4
          /* Backoff */
          , this.ys.Pn(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                return this.state = 0
                /* Initial */
                , this.start(), [2
                /*return*/
                ];
              });
            });
          });
        }, // Visible for tests
        t.prototype.fc = function (t) {
          // In theory the stream could close cleanly, however, in our current model
          // we never expect this to happen because if we stop a stream ourselves,
          // this callback will never be called. To prevent cases where we retry
          // without a backoff accidentally, we set the stream to error in all cases.
          return T("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
          /* Error */
          , t);
        },
        /**
         * Returns a "dispatcher" function that dispatches operations onto the
         * AsyncQueue but only runs them if closeCount remains unchanged. This allows
         * us to turn auth / stream callbacks into no-ops if the stream is closed /
         * re-opened, etc.
         */
        t.prototype.lc = function (t) {
          var e = this;
          return function (n) {
            e.fn.ws(function () {
              return e.Za === t ? n() : (T("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
            });
          };
        }, t;
      }(),
          wo =
      /** @class */
      function (e) {
        function n(t, n, r, i, o) {
          var u = this;
          return (u = e.call(this, t, "listen_stream_connection_backoff"
          /* ListenStreamConnectionBackoff */
          , "listen_stream_idle"
          /* ListenStreamIdle */
          , n, r, o) || this).serializer = i, u;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.dc = function (t) {
          return this.Ja.Ec("Listen", t);
        }, n.prototype.onMessage = function (t) {
          // A successful response means the stream is healthy
          this.ys.reset();

          var e = function (t, e) {
            var n;

            if ("targetChange" in e) {
              e.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
              // if unset

              var r = function (t) {
                return "NO_CHANGE" === t ? 0
                /* NoChange */
                : "ADD" === t ? 1
                /* Added */
                : "REMOVE" === t ? 2
                /* Removed */
                : "CURRENT" === t ? 3
                /* Current */
                : "RESET" === t ? 4
                /* Reset */
                : S();
              }(e.targetChange.targetChangeType || "NO_CHANGE"),
                  i = e.targetChange.targetIds || [],
                  o = function (t, e) {
                return t.Ke ? (x(void 0 === e || "string" == typeof e), U.fromBase64String(e || "")) : (x(void 0 === e || e instanceof Uint8Array), U.fromUint8Array(e || new Uint8Array()));
              }(t, e.targetChange.resumeToken),
                  u = e.targetChange.cause,
                  s = u && function (t) {
                var e = void 0 === t.code ? b.UNKNOWN : pt(t.code);
                return new I(e, t.message || "");
              }(u);

              n = new Ut(r, i, o, s || null);
            } else if ("documentChange" in e) {
              e.documentChange;
              var a = e.documentChange;
              a.document, a.document.name, a.document.updateTime;
              var c = be(t, a.document.name),
                  h = ye(a.document.updateTime),
                  f = new bn({
                mapValue: {
                  fields: a.document.fields
                }
              }),
                  l = new Tn(c, h, f, {}),
                  p = a.targetIds || [],
                  d = a.removedTargetIds || [];
              n = new Vt(p, d, l.key, l);
            } else if ("documentDelete" in e) {
              e.documentDelete;
              var v = e.documentDelete;
              v.document;
              var y = be(t, v.document),
                  m = v.readTime ? ye(v.readTime) : H.min(),
                  g = new Nn(y, m),
                  w = v.removedTargetIds || [];
              n = new Vt([], w, g.key, g);
            } else if ("documentRemove" in e) {
              e.documentRemove;
              var E = e.documentRemove;
              E.document;

              var _ = be(t, E.document),
                  T = E.removedTargetIds || [];

              n = new Vt([], T, _, null);
            } else {
              if (!("filter" in e)) return S();
              e.filter;
              var N = e.filter;
              N.targetId;
              var A = N.count || 0,
                  D = new ft(A),
                  k = N.targetId;
              n = new Rt(k, D);
            }

            return n;
          }(this.serializer, t),
              n = function (t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return H.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? H.min() : e.readTime ? ye(e.readTime) : H.min();
          }(t);

          return this.listener.Tc(e, n);
        },
        /**
         * Registers interest in the results of the given target. If the target
         * includes a resumeToken it will be included in the request. Results that
         * affect the target will be streamed back as WatchChange messages that
         * reference the targetId.
         */
        n.prototype.Ic = function (t) {
          var e = {};
          e.database = _e(this.serializer), e.addTarget = function (t, e) {
            var n,
                r = e.target;
            return (n = st(r) ? {
              documents: Se(t, r)
            } : {
              query: xe(t, r)
            }).targetId = e.targetId, e.resumeToken.o() > 0 && (n.resumeToken = de(t, e.resumeToken)), n;
          }(this.serializer, t);

          var n = function (t, e) {
            var n = function (t, e) {
              switch (e) {
                case 0
                /* Listen */
                :
                  return null;

                case 1
                /* ExistenceFilterMismatch */
                :
                  return "existence-filter-mismatch";

                case 2
                /* LimboResolution */
                :
                  return "limbo-document";

                default:
                  return S();
              }
            }(0, e.et);

            return null == n ? null : {
              "goog-listen-tags": n
            };
          }(this.serializer, t);

          n && (e.labels = n), this.ac(e);
        },
        /**
         * Unregisters interest in the results of the target associated with the
         * given targetId.
         */
        n.prototype.mc = function (t) {
          var e = {};
          e.database = _e(this.serializer), e.removeTarget = t, this.ac(e);
        }, n;
      }(go),
          bo =
      /** @class */
      function (e) {
        function n(t, n, r, i, o) {
          var u = this;
          return (u = e.call(this, t, "write_stream_connection_backoff"
          /* WriteStreamConnectionBackoff */
          , "write_stream_idle"
          /* WriteStreamIdle */
          , n, r, o) || this).serializer = i, u.Ac = !1, u;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "Rc", {
          /**
           * Tracks whether or not a handshake has been successfully exchanged and
           * the stream is ready to accept mutations.
           */
          get: function get() {
            return this.Ac;
          },
          enumerable: !1,
          configurable: !0
        }), // Override of PersistentStream.start
        n.prototype.start = function () {
          this.Ac = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
        }, n.prototype.uc = function () {
          this.Ac && this.Pc([]);
        }, n.prototype.dc = function (t) {
          return this.Ja.Ec("Write", t);
        }, n.prototype.onMessage = function (t) {
          if ( // Always capture the last stream token.
          x(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Ac) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.ys.reset();

            var e = function (t, e) {
              return t && t.length > 0 ? (x(void 0 !== e), t.map(function (t) {
                return function (t, e) {
                  // NOTE: Deletes don't have an updateTime.
                  var n = t.updateTime ? ye(t.updateTime) : ye(e);
                  n.isEqual(H.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
                  // deletes of non-existing documents (rather than null). This breaks the
                  // test "get deleted doc while offline with source=cache" as NoDocuments
                  // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                  // TODO(#2149): Remove this when Emulator is fixed
                  n = ye(e));
                  var r = null;
                  return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new nn(n, r);
                }(t, e);
              })) : [];
            }(t.writeResults, t.commitTime),
                n = ye(t.commitTime);

            return this.listener.gc(n, e);
          } // The first response is always the handshake response


          return x(!t.writeResults || 0 === t.writeResults.length), this.Ac = !0, this.listener.yc();
        },
        /**
         * Sends an initial streamToken to the server, performing the handshake
         * required to make the StreamingWrite RPC work. Subsequent
         * calls should wait until onHandshakeComplete was called.
         */
        n.prototype.Vc = function () {
          // TODO(dimond): Support stream resumption. We intentionally do not set the
          // stream token on the handshake, ignoring any stream token we might have.
          var t = {};
          t.database = _e(this.serializer), this.ac(t);
        },
        /** Sends a group of mutations to the Firestore backend to apply. */
        n.prototype.Pc = function (t) {
          var e = this,
              n = {
            streamToken: this.lastStreamToken,
            writes: t.map(function (t) {
              return Ae(e.serializer, t);
            })
          };
          this.ac(n);
        }, n;
      }(go),
          Io =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          return (i = e.call(this) || this).credentials = t, i.Ja = n, i.serializer = r, i.bc = !1, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.vc = function () {
          if (this.bc) throw new I(b.FAILED_PRECONDITION, "The client has already been terminated.");
        },
        /** Gets an auth token and invokes the provided RPC. */
        n.prototype.Sc = function (t, e, n) {
          var r = this;
          return this.vc(), this.credentials.getToken().then(function (i) {
            return r.Ja.Sc(t, e, n, i);
          })["catch"](function (t) {
            throw t.code === b.UNAUTHENTICATED && r.credentials.ri(), t;
          });
        },
        /** Gets an auth token and invokes the provided RPC with streamed results. */
        n.prototype.Dc = function (t, e, n) {
          var r = this;
          return this.vc(), this.credentials.getToken().then(function (i) {
            return r.Ja.Dc(t, e, n, i);
          })["catch"](function (t) {
            throw t.code === b.UNAUTHENTICATED && r.credentials.ri(), t;
          });
        }, n.prototype.terminate = function () {
          this.bc = !1;
        }, n;
      }(function () {}),
          Eo =
      /** @class */
      function () {
        function t(t, e) {
          this.cs = t, this.Cc = e,
          /** The current OnlineState. */
          this.state = "Unknown"
          /* Unknown */
          ,
          /**
               * A count of consecutive failures to open the stream. If it reaches the
               * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
               * Offline.
               */
          this.Nc = 0,
          /**
               * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
               * transition from OnlineState.Unknown to OnlineState.Offline without waiting
               * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
               */
          this.xc = null,
          /**
               * Whether the client should log a warning message if it fails to connect to
               * the backend (initially true, cleared after a successful stream, or if we've
               * logged the message already).
               */
          this.Fc = !0
          /**
          * Called by RemoteStore when a watch stream is started (including on each
          * backoff attempt).
          *
          * If this is the first attempt, it sets the OnlineState to Unknown and starts
          * the onlineStateTimer.
          */
          ;
        }

        return t.prototype.Oc = function () {
          var t = this;
          0 === this.Nc && (this.kc("Unknown"
          /* Unknown */
          ), this.xc = this.cs.yn("online_state_timeout"
          /* OnlineStateTimeout */
          , 1e4, function () {
            return t.xc = null, t.Mc("Backend didn't respond within 10 seconds."), t.kc("Offline"
            /* Offline */
            ), Promise.resolve();
          }));
        },
        /**
         * Updates our OnlineState as appropriate after the watch stream reports a
         * failure. The first failure moves us to the 'Unknown' state. We then may
         * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
         * actually transition to the 'Offline' state.
         */
        t.prototype.$c = function (t) {
          "Online"
          /* Online */
          === this.state ? this.kc("Unknown"
          /* Unknown */
          ) : (this.Nc++, this.Nc >= 1 && (this.Lc(), this.Mc("Connection failed 1 times. Most recent error: " + t.toString()), this.kc("Offline"
          /* Offline */
          )));
        },
        /**
         * Explicitly sets the OnlineState to the specified state.
         *
         * Note that this resets our timers / failure counters, etc. used by our
         * Offline heuristics, so must not be used in place of
         * handleWatchStreamStart() and handleWatchStreamFailure().
         */
        t.prototype.set = function (t) {
          this.Lc(), this.Nc = 0, "Online"
          /* Online */
          === t && ( // We've connected to watch at least once. Don't warn the developer
          // about being offline going forward.
          this.Fc = !1), this.kc(t);
        }, t.prototype.kc = function (t) {
          t !== this.state && (this.state = t, this.Cc(t));
        }, t.prototype.Mc = function (t) {
          var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
          this.Fc ? (N(e), this.Fc = !1) : T("OnlineStateTracker", e);
        }, t.prototype.Lc = function () {
          null !== this.xc && (this.xc.cancel(), this.xc = null);
        }, t;
      }(),
          _o = function _o(
      /**
           * The local store, used to fill the write pipeline with outbound mutations.
           */
      t,
      /** The client-side proxy for interacting with the backend. */
      r, i, o, u) {
        var s = this;
        this.Bc = t, this.qc = r, this.cs = i, this.Uc = {},
        /**
                 * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
                 * LocalStore via fillWritePipeline() and have or will send to the write
                 * stream.
                 *
                 * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
                 * restart the write stream. When the stream is established the writes in the
                 * pipeline will be sent in order.
                 *
                 * Writes remain in writePipeline until they are acknowledged by the backend
                 * and thus will automatically be re-sent if the stream is interrupted /
                 * restarted before they're acknowledged.
                 *
                 * Write responses from the backend are linked to their originating request
                 * purely based on order, and so we can just shift() writes from the front of
                 * the writePipeline as we receive responses.
                 */
        this.Kc = [],
        /**
                 * A mapping of watched targets that the client cares about tracking and the
                 * user has explicitly called a 'listen' for this target.
                 *
                 * These targets may or may not have been sent to or acknowledged by the
                 * server. On re-establishing the listen stream, these targets should be sent
                 * to the server. The targets removed with unlistens are removed eagerly
                 * without waiting for confirmation from the listen stream.
                 */
        this.Qc = new Map(),
        /**
                 * A set of reasons for why the RemoteStore may be offline. If empty, the
                 * RemoteStore may start its network connections.
                 */
        this.Wc = new Set(),
        /**
                 * Event handlers that get called when the network is disabled or enabled.
                 *
                 * PORTING NOTE: These functions are used on the Web client to create the
                 * underlying streams (to support tree-shakeable streams). On Android and iOS,
                 * the streams are created during construction of RemoteStore.
                 */
        this.jc = [], this.Gc = u, this.Gc.zc(function (t) {
          i.ws(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(s, void 0, void 0, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                switch (t.label) {
                  case 0:
                    return Po(this) ? (T("RemoteStore", "Restarting streams for network reachability change."), [4
                    /*yield*/
                    , function (t) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var e;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (e = k(t)).Wc.add(4
                              /* ConnectivityChange */
                              ), [4
                              /*yield*/
                              , No(e)];

                            case 1:
                              return n.sent(), e.Hc.set("Unknown"
                              /* Unknown */
                              ), e.Wc["delete"](4
                              /* ConnectivityChange */
                              ), [4
                              /*yield*/
                              , To(e)];

                            case 2:
                              return n.sent(), [2
                              /*return*/
                              ];
                          }
                        });
                      });
                    }(this)]) : [3
                    /*break*/
                    , 2];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
        }), this.Hc = new Eo(i, o);
      };
      /**
       * A PersistentStream that implements the Listen RPC.
       *
       * Once the Listen stream has called the onOpen() listener, any number of
       * listen() and unlisten() calls can be made to control what changes will be
       * sent from the server for ListenResponses.
       */


      function To(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                if (!Po(t)) return [3
                /*break*/
                , 4];
                e = 0, r = t.jc, n.label = 1;

              case 1:
                return e < r.length ? [4
                /*yield*/
                , (0, r[e])(
                /* enabled= */
                !0)] : [3
                /*break*/
                , 4];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return e++, [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Temporarily disables the network. The network can be re-enabled using
       * enableNetwork().
       */


      function No(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = 0, r = t.jc, n.label = 1;

              case 1:
                return e < r.length ? [4
                /*yield*/
                , (0, r[e])(
                /* enabled= */
                !1)] : [3
                /*break*/
                , 4];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return e++, [3
                /*break*/
                , 1];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Starts new listen for the given target. Uses resume token if provided. It
       * is a no-op if the target of given `TargetData` is already being listened to.
       */


      function Ao(t, e) {
        var n = k(t);
        n.Qc.has(e.targetId) || ( // Mark this as something the client is currently listening for.
        n.Qc.set(e.targetId, e), Oo(n) ? // The listen will be sent in onWatchStreamOpen
        ko(n) : Wo(n).nc() && So(n, e));
      }
      /**
       * Removes the listen from server. It is a no-op if the given target id is
       * not being listened to.
       */


      function Do(t, e) {
        var n = k(t),
            r = Wo(n);
        n.Qc["delete"](e), r.nc() && xo(n, e), 0 === n.Qc.size && (r.nc() ? r.rc() : Po(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        n.Hc.set("Unknown"
        /* Unknown */
        ));
      }
      /**
       * We need to increment the the expected number of pending responses we're due
       * from watch so we wait for the ack to process any messages from this target.
       */


      function So(t, e) {
        t.Yc.me(e.targetId), Wo(t).Ic(e)
        /**
        * We need to increment the expected number of pending responses we're due
        * from watch so we wait for the removal on the server before we process any
        * messages from this target.
        */
        ;
      }

      function xo(t, e) {
        t.Yc.me(e), Wo(t).mc(e);
      }

      function ko(t) {
        t.Yc = new qt({
          qe: function qe(e) {
            return t.Uc.qe(e);
          },
          Ue: function Ue(e) {
            return t.Qc.get(e) || null;
          }
        }), Wo(t).start(), t.Hc.Oc()
        /**
        * Returns whether the watch stream should be started because it's necessary
        * and has not yet been started.
        */
        ;
      }

      function Oo(t) {
        return Po(t) && !Wo(t).ec() && t.Qc.size > 0;
      }

      function Po(t) {
        return 0 === k(t).Wc.size;
      }

      function Lo(t) {
        t.Yc = void 0;
      }

      function Vo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            return t.Qc.forEach(function (e, n) {
              So(t, e);
            }), [2
            /*return*/
            ];
          });
        });
      }

      function Ro(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            return Lo(t), // If we still need the watch stream, retry the connection.
            Oo(t) ? (t.Hc.$c(r), ko(t)) : // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.Hc.set("Unknown"
            /* Unknown */
            ), [2
            /*return*/
            ];
          });
        });
      }

      function Uo(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (a) {
            switch (a.label) {
              case 0:
                if (t.Hc.set("Online"
                /* Online */
                ), !(r instanceof Ut && 2
                /* Removed */
                === r.state && r.cause)) // Mark the client as online since we got a message from the server
                  return [3
                  /*break*/
                  , 6];
                a.label = 1;

              case 1:
                return a.trys.push([1, 3,, 5]), [4
                /*yield*/
                ,
                /** Handles an error on a target */
                function (t, r) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var e, i, o, u;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          e = r.cause, i = 0, o = r.targetIds, n.label = 1;

                        case 1:
                          return i < o.length ? (u = o[i], t.Qc.has(u) ? [4
                          /*yield*/
                          , t.Uc.Jc(u, e)] : [3
                          /*break*/
                          , 3]) : [3
                          /*break*/
                          , 5];

                        case 2:
                          n.sent(), t.Qc["delete"](u), t.Yc.removeTarget(u), n.label = 3;

                        case 3:
                          n.label = 4;

                        case 4:
                          return i++, [3
                          /*break*/
                          , 1];

                        case 5:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(t, r)];

              case 2:
                return a.sent(), [3
                /*break*/
                , 5];

              case 3:
                return o = a.sent(), T("RemoteStore", "Failed to remove targets %s: %s ", r.targetIds.join(","), o), [4
                /*yield*/
                , Co(t, o)];

              case 4:
                return a.sent(), [3
                /*break*/
                , 5];

              case 5:
                return [3
                /*break*/
                , 13];

              case 6:
                if (r instanceof Vt ? t.Yc.be(r) : r instanceof Rt ? t.Yc.Oe(r) : t.Yc.De(r), i.isEqual(H.min())) return [3
                /*break*/
                , 13];
                a.label = 7;

              case 7:
                return a.trys.push([7, 11,, 13]), [4
                /*yield*/
                , so(t.Bc)];

              case 8:
                return u = a.sent(), i.u(u) >= 0 ? [4
                /*yield*/
                ,
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function (t, e) {
                  var n = t.Yc.$e(e); // Update in-memory resume tokens. LocalStore will update the
                  // persistent view of these when applying the completed RemoteEvent.

                  return n.zt.forEach(function (n, r) {
                    if (n.resumeToken.o() > 0) {
                      var i = t.Qc.get(r); // A watched target might have been removed already.

                      i && t.Qc.set(r, i.it(n.resumeToken, e));
                    }
                  }), // Re-establish listens for the targets that have been invalidated by
                  // existence filter mismatches.
                  n.Ht.forEach(function (e) {
                    var n = t.Qc.get(e);

                    if (n) {
                      // Clear the resume token for the target, since we're in a known mismatch
                      // state.
                      t.Qc.set(e, n.it(U.h, n.nt)), // Cause a hard reset by unwatching and rewatching immediately, but
                      // deliberately don't send a resume token so that we get a full update.
                      xo(t, e); // Mark the target we send as being on behalf of an existence filter
                      // mismatch, but don't actually retain that in listenTargets. This ensures
                      // that we flag the first re-listen this way without impacting future
                      // listens of this target (that might happen e.g. on reconnect).

                      var r = new ht(n.target, e, 1
                      /* ExistenceFilterMismatch */
                      , n.sequenceNumber);
                      So(t, r);
                    }
                  }), t.Uc.Xc(n);
                }(t, i)] : [3
                /*break*/
                , 10];
              // We have received a target change with a global snapshot if the snapshot
              // version is not equal to SnapshotVersion.min().

              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                a.sent(), a.label = 10;

              case 10:
                return [3
                /*break*/
                , 13];

              case 11:
                return T("RemoteStore", "Failed to raise snapshot:", s = a.sent()), [4
                /*yield*/
                , Co(t, s)];

              case 12:
                return a.sent(), [3
                /*break*/
                , 13];

              case 13:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Recovery logic for IndexedDB errors that takes the network offline until
       * `op` succeeds. Retries are scheduled with backoff using
       * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
       * validated via a generic operation.
       *
       * The returned Promise is resolved once the network is disabled and before
       * any retry attempt.
       */


      function Co(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var o = this;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
            switch (u.label) {
              case 0:
                if (!pr(r)) throw r; // Disable network and raise offline snapshots

                return t.Wc.add(1
                /* IndexedDbFailed */
                ), [4
                /*yield*/
                , No(t)];

              case 1:
                // Disable network and raise offline snapshots
                return u.sent(), t.Hc.set("Offline"
                /* Offline */
                ), i || ( // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                i = function i() {
                  return so(t.Bc);
                }), // Probe IndexedDB periodically and re-enable network
                t.cs.Cs(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return T("RemoteStore", "Retrying IndexedDB access"), [4
                          /*yield*/
                          , i()];

                        case 1:
                          return e.sent(), t.Wc["delete"](1
                          /* IndexedDbFailed */
                          ), [4
                          /*yield*/
                          , To(t)];

                        case 2:
                          return e.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }), [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Executes `op`. If `op` fails, takes the network offline until `op`
       * succeeds. Returns after the first attempt.
       */


      function qo(t, e) {
        return e()["catch"](function (n) {
          return Co(t, n, e);
        });
      }

      function Mo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r, i, o, u;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = k(t), r = Ho(e), i = e.Kc.length > 0 ? e.Kc[e.Kc.length - 1].batchId : -1, n.label = 1;

              case 1:
                if (!
                /**
                * Returns true if we can add to the write pipeline (i.e. the network is
                * enabled and the write pipeline is not full).
                */
                function (t) {
                  return Po(t) && t.Kc.length < 10;
                }
                /**
                * Queues additional writes to be sent to the write stream, sending them
                * immediately if the write stream is established.
                */
                (e)) return [3
                /*break*/
                , 7];
                n.label = 2;

              case 2:
                return n.trys.push([2, 4,, 6]), [4
                /*yield*/
                , co(e.Bc, i)];

              case 3:
                return null === (o = n.sent()) ? (0 === e.Kc.length && r.rc(), [3
                /*break*/
                , 7]) : (i = o.batchId, function (t, e) {
                  t.Kc.push(e);
                  var n = Ho(t);
                  n.nc() && n.Rc && n.Pc(e.mutations);
                }(e, o), [3
                /*break*/
                , 6]);

              case 4:
                return u = n.sent(), [4
                /*yield*/
                , Co(e, u)];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [3
                /*break*/
                , 1];

              case 7:
                return Fo(e) && Bo(e), [2
                /*return*/
                ];
            }
          });
        });
      }

      function Fo(t) {
        return Po(t) && !Ho(t).ec() && t.Kc.length > 0;
      }

      function Bo(t) {
        Ho(t).start();
      }

      function jo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            return Ho(t).Vc(), [2
            /*return*/
            ];
          });
        });
      }

      function zo(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            // Send the write pipeline now that the stream is established.
            for (e = Ho(t), r = 0, i = t.Kc; r < i.length; r++) {
              o = i[r], e.Pc(o.mutations);
            }

            return [2
            /*return*/
            ];
          });
        });
      }

      function Go(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = t.Kc.shift(), o = Mr.from(e, r, i), [4
                /*yield*/
                , qo(t, function () {
                  return t.Uc.Zc(o);
                })];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return n.sent(), [4
                /*yield*/
                , Mo(t)];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return n.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }

      function Ko(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
            switch (i.label) {
              case 0:
                return r && Ho(t).Rc ? [4
                /*yield*/
                , function (t, r) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var e, i;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return lt(i = r.code) && i !== b.ABORTED ? (e = t.Kc.shift(), // In this case it's also unlikely that the server itself is melting
                          // down -- this was just a bad request so inhibit backoff on the next
                          // restart.
                          Ho(t).ic(), [4
                          /*yield*/
                          , qo(t, function () {
                            return t.Uc.tu(e.batchId, r);
                          })]) : [3
                          /*break*/
                          , 3];

                        case 1:
                          // It's possible that with the completion of this mutation
                          // another slot has freed up.
                          return n.sent(), [4
                          /*yield*/
                          , Mo(t)];

                        case 2:
                          // In this case it's also unlikely that the server itself is melting
                          // down -- this was just a bad request so inhibit backoff on the next
                          // restart.
                          // It's possible that with the completion of this mutation
                          // another slot has freed up.
                          n.sent(), n.label = 3;

                        case 3:
                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(t, r)] : [3
                /*break*/
                , 2];
              // This error affects the actual write.

              case 1:
                // This error affects the actual write.
                i.sent(), i.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return Fo(t) && Bo(t), [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Toggles the network state when the client gains or loses its primary lease.
       */


      function Qo(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = k(t), r ? (e.Wc["delete"](2
                /* IsSecondary */
                ), [4
                /*yield*/
                , To(e)]) : [3
                /*break*/
                , 2];

              case 1:
                return n.sent(), [3
                /*break*/
                , 5];

              case 2:
                return (i = r) ? [3
                /*break*/
                , 4] : (e.Wc.add(2
                /* IsSecondary */
                ), [4
                /*yield*/
                , No(e)]);

              case 3:
                n.sent(), i = e.Hc.set("Unknown"
                /* Unknown */
                ), n.label = 4;

              case 4:
                i, n.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * If not yet initialized, registers the WatchStream and its network state
       * callback with `remoteStoreImpl`. Returns the existing stream if one is
       * already available.
       *
       * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
       * This is not done on Web to allow it to be tree-shaken.
       */


      function Wo(t) {
        var r = this;
        return t.eu || ( // Create stream (but note that it is not started yet).
        t.eu = function (t, e, n) {
          var r = k(t);
          return r.vc(), new wo(e, r.Ja, r.credentials, r.serializer, n);
        }(t.qc, t.cs, {
          wc: Vo.bind(null, t),
          hc: Ro.bind(null, t),
          Tc: Uo.bind(null, t)
        }), t.jc.push(function (i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return i ? (t.eu.ic(), Oo(t) ? ko(t) : t.Hc.set("Unknown"
                  /* Unknown */
                  ), [3
                  /*break*/
                  , 3]) : [3
                  /*break*/
                  , 1];

                case 1:
                  return [4
                  /*yield*/
                  , t.eu.stop()];

                case 2:
                  e.sent(), Lo(t), e.label = 3;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        })), t.eu
        /**
        * If not yet initialized, registers the WriteStream and its network state
        * callback with `remoteStoreImpl`. Returns the existing stream if one is
        * already available.
        *
        * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
        * This is not done on Web to allow it to be tree-shaken.
        */
        ;
      }

      function Ho(t) {
        var r = this;
        return t.nu || ( // Create stream (but note that it is not started yet).
        t.nu = function (t, e, n) {
          var r = k(t);
          return r.vc(), new bo(e, r.Ja, r.credentials, r.serializer, n);
        }(t.qc, t.cs, {
          wc: jo.bind(null, t),
          hc: Ko.bind(null, t),
          yc: zo.bind(null, t),
          gc: Go.bind(null, t)
        }), t.jc.push(function (i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return i ? (t.nu.ic(), [4
                  /*yield*/
                  , Mo(t)]) : [3
                  /*break*/
                  , 2];

                case 1:
                  // This will start the write stream if necessary.
                  return e.sent(), [3
                  /*break*/
                  , 4];

                case 2:
                  return [4
                  /*yield*/
                  , t.nu.stop()];

                case 3:
                  e.sent(), t.Kc.length > 0 && (T("RemoteStore", "Stopping write stream with " + t.Kc.length + " pending writes"), t.Kc = []), e.label = 4;

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        })), t.nu
        /**
        * @license
        * Copyright 2017 Google LLC
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        *   http://www.apache.org/licenses/LICENSE-2.0
        *
        * Unless required by applicable law or agreed to in writing, software
        * distributed under the License is distributed on an "AS IS" BASIS,
        * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        * See the License for the specific language governing permissions and
        * limitations under the License.
        */

        /**
        * A collection of references to a document from some kind of numbered entity
        * (either a target ID or batch ID). As references are added to or removed from
        * the set corresponding events are emitted to a registered garbage collector.
        *
        * Each reference is represented by a DocumentReference object. Each of them
        * contains enough information to uniquely identify the reference. They are all
        * stored primarily in a set sorted by key. A document is considered garbage if
        * there's no references in that set (this can be efficiently checked thanks to
        * sorting by key).
        *
        * ReferenceSet also keeps a secondary set that contains references sorted by
        * IDs. This one is used to efficiently implement removal of all references by
        * some target ID.
        */
        ;
      }

      var Yo =
      /** @class */
      function () {
        function t() {
          // A set of outstanding references to a document sorted by key.
          this.su = new mt(Jo.iu), // A set of outstanding references to a document sorted by target id.
          this.ru = new mt(Jo.ou)
          /** Returns true if the reference set contains no references. */
          ;
        }

        return t.prototype.P = function () {
          return this.su.P();
        },
        /** Adds a reference to the given document key for the given ID. */
        t.prototype.qo = function (t, e) {
          var n = new Jo(t, e);
          this.su = this.su.add(n), this.ru = this.ru.add(n);
        },
        /** Add references to the given document keys for the given ID. */
        t.prototype.au = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.qo(t, e);
          });
        },
        /**
         * Removes a reference to the given document key for the given
         * ID.
         */
        t.prototype.Ko = function (t, e) {
          this.cu(new Jo(t, e));
        }, t.prototype.uu = function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return n.Ko(t, e);
          });
        },
        /**
         * Clears all references with a given ID. Calls removeRef() for each key
         * removed.
         */
        t.prototype.hu = function (t) {
          var e = this,
              n = new $(new J([])),
              r = new Jo(n, t),
              i = new Jo(n, t + 1),
              o = [];
          return this.ru.xt([r, i], function (t) {
            e.cu(t), o.push(t.key);
          }), o;
        }, t.prototype.lu = function () {
          var t = this;
          this.su.forEach(function (e) {
            return t.cu(e);
          });
        }, t.prototype.cu = function (t) {
          this.su = this.su["delete"](t), this.ru = this.ru["delete"](t);
        }, t.prototype._u = function (t) {
          var e = new $(new J([])),
              n = new Jo(e, t),
              r = new Jo(e, t + 1),
              i = At();
          return this.ru.xt([n, r], function (t) {
            i = i.add(t.key);
          }), i;
        }, t.prototype.ro = function (t) {
          var e = new Jo(t, 0),
              n = this.su.Ot(e);
          return null !== n && t.isEqual(n.key);
        }, t;
      }(),
          Jo =
      /** @class */
      function () {
        function t(t, e) {
          this.key = t, this.fu = e
          /** Compare by key then by ID */
          ;
        }

        return t.iu = function (t, e) {
          return $.D(t.key, e.key) || L(t.fu, e.fu);
        },
        /** Compare by ID then by key */
        t.ou = function (t, e) {
          return L(t.fu, e.fu) || $.D(t.key, e.key);
        }, t;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // The format of the LocalStorage key that stores the client state is:
      //     firestore_clients_<persistence_prefix>_<instance_key>

      /** Assembles the key for a client state in WebStorage */


      function Xo(t, e) {
        return "firestore_clients_" + t + "_" + e;
      } // The format of the WebStorage key that stores the mutation state is:
      //     firestore_mutations_<persistence_prefix>_<batch_id>
      //     (for unauthenticated users)
      // or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
      // 'user_uid' is last to avoid needing to escape '_' characters that it might
      // contain.

      /** Assembles the key for a mutation batch in WebStorage */


      function Zo(t, e, n) {
        var r = "firestore_mutations_" + t + "_" + n;
        return e.Zs() && (r += "_" + e.uid), r;
      } // The format of the WebStorage key that stores a query target's metadata is:
      //     firestore_targets_<persistence_prefix>_<target_id>

      /** Assembles the key for a query state in WebStorage */


      function $o(t, e) {
        return "firestore_targets_" + t + "_" + e;
      } // The WebStorage prefix that stores the primary tab's online state. The
      // format of the key is:
      //     firestore_online_state_<persistence_prefix>

      /**
       * Holds the state of a mutation batch, including its user ID, batch ID and
       * whether the batch is 'pending', 'acknowledged' or 'rejected'.
       */
      // Visible for testing


      var tu =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.user = t, this.batchId = e, this.state = n, this.error = r
          /**
          * Parses a MutationMetadata from its JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.du = function (e, n, r) {
          var i = JSON.parse(r),
              o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
              u = void 0;
          return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (u = new I(i.error.code, i.error.message)), o ? new t(e, n, i.state, u) : (N("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
        }, t.prototype.wu = function () {
          var t = {
            state: this.state,
            updateTimeMs: Date.now()
          };
          return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
          }), JSON.stringify(t);
        }, t;
      }(),
          eu =
      /** @class */
      function () {
        function t(t, e, n) {
          this.targetId = t, this.state = e, this.error = n
          /**
          * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.du = function (e, n) {
          var r = JSON.parse(n),
              i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
              o = void 0;
          return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new I(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (N("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
        }, t.prototype.wu = function () {
          var t = {
            state: this.state,
            updateTimeMs: Date.now()
          };
          return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
          }), JSON.stringify(t);
        }, t;
      }(),
          nu =
      /** @class */
      function () {
        function t(t, e) {
          this.clientId = t, this.activeTargetIds = e
          /**
          * Parses a RemoteClientState from the JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.du = function (e, n) {
          for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = St(), u = 0; i && u < r.activeTargetIds.length; ++u) {
            i = nt(r.activeTargetIds[u]), o = o.add(r.activeTargetIds[u]);
          }

          return i ? new t(e, o) : (N("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
        }, t;
      }(),
          ru =
      /** @class */
      function () {
        function t(t, e) {
          this.clientId = t, this.onlineState = e
          /**
          * Parses a SharedOnlineState from its JSON representation in WebStorage.
          * Logs a warning and returns null if the format of the data is not valid.
          */
          ;
        }

        return t.du = function (e) {
          var n = JSON.parse(e);
          return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (N("SharedClientState", "Failed to parse online state: " + e), null);
        }, t;
      }(),
          iu =
      /** @class */
      function () {
        function t() {
          this.activeTargetIds = St();
        }

        return t.prototype.Eu = function (t) {
          this.activeTargetIds = this.activeTargetIds.add(t);
        }, t.prototype.Tu = function (t) {
          this.activeTargetIds = this.activeTargetIds["delete"](t);
        },
        /**
         * Converts this entry into a JSON-encoded format we can use for WebStorage.
         * Does not encode `clientId` as it is part of the key in WebStorage.
         */
        t.prototype.wu = function () {
          var t = {
            activeTargetIds: this.activeTargetIds.L(),
            updateTimeMs: Date.now()
          };
          return JSON.stringify(t);
        }, t;
      }(),
          ou =
      /** @class */
      function () {
        function t(t, e, n, r, i) {
          this.window = t, this.fn = e, this.persistenceKey = n, this.Iu = r, this.mu = null, this.Cc = null, this.tr = null, this.Au = this.Ru.bind(this), this.Pu = new dt(L), this.br = !1,
          /**
               * Captures WebStorage events that occur before `start()` is called. These
               * events are replayed once `WebStorageSharedClientState` is started.
               */
          this.gu = []; // Escape the special characters mentioned here:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

          var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          this.storage = this.window.localStorage, this.currentUser = i, this.yu = Xo(this.persistenceKey, this.Iu), this.Vu =
          /** Assembles the key for the current sequence number. */
          function (t) {
            return "firestore_sequence_number_" + t;
          }(this.persistenceKey), this.Pu = this.Pu.ot(this.Iu, new iu()), this.pu = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.bu = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.vu = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Su =
          /** Assembles the key for the online state of the primary tab. */
          function (t) {
            return "firestore_online_state_" + t;
          }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
          // storage observer during initialization. This ensures that we collect
          // events before other components populate their initial state (during their
          // respective start() calls). Otherwise, we might for example miss a
          // mutation that is added after LocalStore's start() processed the existing
          // mutations but before we observe WebStorage events.
          this.window.addEventListener("storage", this.Au);
        }
        /** Returns 'true' if WebStorage is available in the current environment. */


        return t.Ln = function (t) {
          return !(!t || !t.localStorage);
        }, t.prototype.start = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t,
                e,
                r,
                i,
                o,
                u,
                s,
                a,
                c,
                h,
                f,
                l = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.mu.va()];

                case 1:
                  for (t = n.sent(), e = 0, r = t; e < r.length; e++) {
                    (i = r[e]) !== this.Iu && (o = this.getItem(Xo(this.persistenceKey, i))) && (u = nu.du(i, o)) && (this.Pu = this.Pu.ot(u.clientId, u));
                  }

                  for (this.Du(), (s = this.storage.getItem(this.Su)) && (a = this.Cu(s)) && this.Nu(a), c = 0, h = this.gu; c < h.length; c++) {
                    f = h[c], this.Ru(f);
                  }

                  return this.gu = [], // Register a window unload hook to remove the client metadata entry from
                  // WebStorage even if `shutdown()` was not called.
                  this.window.addEventListener("unload", function () {
                    return l.ga();
                  }), this.br = !0, [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.sr = function (t) {
          this.setItem(this.Vu, JSON.stringify(t));
        }, t.prototype.xu = function () {
          return this.Fu(this.Pu);
        }, t.prototype.Ou = function (t) {
          var e = !1;
          return this.Pu.forEach(function (n, r) {
            r.activeTargetIds.has(t) && (e = !0);
          }), e;
        }, t.prototype.ku = function (t) {
          this.Mu(t, "pending");
        }, t.prototype.$u = function (t, e, n) {
          this.Mu(t, e, n), // Once a final mutation result is observed by other clients, they no longer
          // access the mutation's metadata entry. Since WebStorage replays events
          // in order, it is safe to delete the entry right after updating it.
          this.Lu(t);
        }, t.prototype.Bu = function (t) {
          var e = "not-current"; // Lookup an existing query state if the target ID was already registered
          // by another tab

          if (this.Ou(t)) {
            var n = this.storage.getItem($o(this.persistenceKey, t));

            if (n) {
              var r = eu.du(t, n);
              r && (e = r.state);
            }
          }

          return this.qu.Eu(t), this.Du(), e;
        }, t.prototype.Uu = function (t) {
          this.qu.Tu(t), this.Du();
        }, t.prototype.Ku = function (t) {
          return this.qu.activeTargetIds.has(t);
        }, t.prototype.Qu = function (t) {
          this.removeItem($o(this.persistenceKey, t));
        }, t.prototype.Wu = function (t, e, n) {
          this.ju(t, e, n);
        }, t.prototype.Gu = function (t, e, n) {
          var r = this;
          e.forEach(function (t) {
            r.Lu(t);
          }), this.currentUser = t, n.forEach(function (t) {
            r.ku(t);
          });
        }, t.prototype.zu = function (t) {
          this.Hu(t);
        }, t.prototype.ga = function () {
          this.br && (this.window.removeEventListener("storage", this.Au), this.removeItem(this.yu), this.br = !1);
        }, t.prototype.getItem = function (t) {
          var e = this.storage.getItem(t);
          return T("SharedClientState", "READ", t, e), e;
        }, t.prototype.setItem = function (t, e) {
          T("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
        }, t.prototype.removeItem = function (t) {
          T("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
        }, t.prototype.Ru = function (t) {
          var r = this,
              i = t; // Note: The function is typed to take Event to be interface-compatible with
          // `Window.addEventListener`.

          if (i.storageArea === this.storage) {
            if (T("SharedClientState", "EVENT", i.key, i.newValue), i.key === this.yu) return void N("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.fn.Cs(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                var t, e, r, o, u, s;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  if (this.br) {
                    if (null !== i.key) if (this.pu.test(i.key)) {
                      if (null == i.newValue) return t = this.Yu(i.key), [2
                      /*return*/
                      , this.Ju(t, null)];
                      if (e = this.Xu(i.key, i.newValue)) return [2
                      /*return*/
                      , this.Ju(e.clientId, e)];
                    } else if (this.bu.test(i.key)) {
                      if (null !== i.newValue && (r = this.Zu(i.key, i.newValue))) return [2
                      /*return*/
                      , this.th(r)];
                    } else if (this.vu.test(i.key)) {
                      if (null !== i.newValue && (o = this.eh(i.key, i.newValue))) return [2
                      /*return*/
                      , this.nh(o)];
                    } else if (i.key === this.Su) {
                      if (null !== i.newValue && (u = this.Cu(i.newValue))) return [2
                      /*return*/
                      , this.Nu(u)];
                    } else i.key === this.Vu && (s = function (t) {
                      var e = Kr.ir;
                      if (null != t) try {
                        var n = JSON.parse(t);
                        x("number" == typeof n), e = n;
                      } catch (t) {
                        N("SharedClientState", "Failed to read sequence number from WebStorage", t);
                      }
                      return e;
                    }(i.newValue)) !== Kr.ir && this.tr(s);
                  } else this.gu.push(i);

                  return [2
                  /*return*/
                  ];
                });
              });
            });
          }
        }, Object.defineProperty(t.prototype, "qu", {
          get: function get() {
            return this.Pu.get(this.Iu);
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.Du = function () {
          this.setItem(this.yu, this.qu.wu());
        }, t.prototype.Mu = function (t, e, n) {
          var r = new tu(this.currentUser, t, e, n),
              i = Zo(this.persistenceKey, this.currentUser, t);
          this.setItem(i, r.wu());
        }, t.prototype.Lu = function (t) {
          var e = Zo(this.persistenceKey, this.currentUser, t);
          this.removeItem(e);
        }, t.prototype.Hu = function (t) {
          var e = {
            clientId: this.Iu,
            onlineState: t
          };
          this.storage.setItem(this.Su, JSON.stringify(e));
        }, t.prototype.ju = function (t, e, n) {
          var r = $o(this.persistenceKey, t),
              i = new eu(t, e, n);
          this.setItem(r, i.wu());
        },
        /**
         * Parses a client state key in WebStorage. Returns null if the key does not
         * match the expected key format.
         */
        t.prototype.Yu = function (t) {
          var e = this.pu.exec(t);
          return e ? e[1] : null;
        },
        /**
         * Parses a client state in WebStorage. Returns 'null' if the value could not
         * be parsed.
         */
        t.prototype.Xu = function (t, e) {
          var n = this.Yu(t);
          return nu.du(n, e);
        },
        /**
         * Parses a mutation batch state in WebStorage. Returns 'null' if the value
         * could not be parsed.
         */
        t.prototype.Zu = function (t, e) {
          var n = this.bu.exec(t),
              r = Number(n[1]),
              i = void 0 !== n[2] ? n[2] : null;
          return tu.du(new Pr(i), r, e);
        },
        /**
         * Parses a query target state from WebStorage. Returns 'null' if the value
         * could not be parsed.
         */
        t.prototype.eh = function (t, e) {
          var n = this.vu.exec(t),
              r = Number(n[1]);
          return eu.du(r, e);
        },
        /**
         * Parses an online state from WebStorage. Returns 'null' if the value
         * could not be parsed.
         */
        t.prototype.Cu = function (t) {
          return ru.du(t);
        }, t.prototype.th = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              return t.user.uid === this.currentUser.uid ? [2
              /*return*/
              , this.mu.sh(t.batchId, t.state, t.error)] : (T("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2
              /*return*/
              ]);
            });
          });
        }, t.prototype.nh = function (t) {
          return this.mu.ih(t.targetId, t.state, t.error);
        }, t.prototype.Ju = function (t, e) {
          var n = this,
              r = e ? this.Pu.ot(t, e) : this.Pu.remove(t),
              i = this.Fu(this.Pu),
              o = this.Fu(r),
              u = [],
              s = [];
          return o.forEach(function (t) {
            i.has(t) || u.push(t);
          }), i.forEach(function (t) {
            o.has(t) || s.push(t);
          }), this.mu.rh(u, s).then(function () {
            n.Pu = r;
          });
        }, t.prototype.Nu = function (t) {
          // We check whether the client that wrote this online state is still active
          // by comparing its client ID to the list of clients kept active in
          // IndexedDb. If a client does not update their IndexedDb client state
          // within 5 seconds, it is considered inactive and we don't emit an online
          // state event.
          this.Pu.get(t.clientId) && this.Cc(t.onlineState);
        }, t.prototype.Fu = function (t) {
          var e = St();
          return t.forEach(function (t, n) {
            e = e.kt(n.activeTargetIds);
          }), e;
        }, t;
      }(),
          uu =
      /** @class */
      function () {
        function t() {
          this.oh = new iu(), this.ah = {}, this.Cc = null, this.tr = null;
        }

        return t.prototype.ku = function (t) {// No op.
        }, t.prototype.$u = function (t, e, n) {// No op.
        }, t.prototype.Bu = function (t) {
          return this.oh.Eu(t), this.ah[t] || "not-current";
        }, t.prototype.Wu = function (t, e, n) {
          this.ah[t] = e;
        }, t.prototype.Uu = function (t) {
          this.oh.Tu(t);
        }, t.prototype.Ku = function (t) {
          return this.oh.activeTargetIds.has(t);
        }, t.prototype.Qu = function (t) {
          delete this.ah[t];
        }, t.prototype.xu = function () {
          return this.oh.activeTargetIds;
        }, t.prototype.Ou = function (t) {
          return this.oh.activeTargetIds.has(t);
        }, t.prototype.start = function () {
          return this.oh = new iu(), Promise.resolve();
        }, t.prototype.Gu = function (t, e, n) {// No op.
        }, t.prototype.zu = function (t) {// No op.
        }, t.prototype.ga = function () {}, t.prototype.sr = function (t) {}, t;
      }(),
          su = function su(t) {
        this.key = t;
      },
          au = function au(t) {
        this.key = t;
      },
          cu =
      /** @class */
      function () {
        function t(t,
        /** Documents included in the remote target */
        e) {
          this.query = t, this.uh = e, this.hh = null,
          /**
               * A flag whether the view is current with the backend. A view is considered
               * current after it has seen the current flag from the backend and did not
               * lose consistency within the watch stream (e.g. because of an existence
               * filter mismatch).
               */
          this.te = !1,
          /** Documents in the view but not in the remote target */
          this.lh = At(),
          /** Document Keys that have local changes */
          this.Qt = At(), this._h = Gn(t), this.fh = new xt(this._h);
        }

        return Object.defineProperty(t.prototype, "dh", {
          /**
           * The set of remote documents that the server has told us belongs to the target associated with
           * this view.
           */
          get: function get() {
            return this.uh;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Iterates over a set of doc changes, applies the query limit, and computes
         * what the new results should be, what the changes were, and whether we may
         * need to go back to the local cache for more results. Does not make any
         * changes to the view.
         * @param docChanges The doc changes to apply to this view.
         * @param previousChanges If this is being called with a refill, then start
         *        with this set of docs and changes instead of the current view.
         * @return a new set of docs, changes, and refill flag.
         */
        t.prototype.wh = function (t, e) {
          var n = this,
              r = e ? e.Eh : new kt(),
              i = e ? e.fh : this.fh,
              o = e ? e.Qt : this.Qt,
              u = i,
              s = !1,
              a = kn(this.query) && i.size === this.query.limit ? i.last() : null,
              c = On(this.query) && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

          if (t.ht(function (t, e) {
            var h = i.get(t),
                f = e instanceof Tn ? e : null;
            f && (f = zn(n.query, f) ? f : null);
            var l = !!h && n.Qt.has(h.key),
                p = !!f && (f.Je || // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.Qt.has(f.key) && f.hasCommittedMutations),
                d = !1; // Calculate change

            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
              type: 3
              /* Metadata */
              ,
              doc: f
            }), d = !0) : n.Th(h, f) || (r.track({
              type: 2
              /* Modified */
              ,
              doc: f
            }), d = !0, (a && n._h(f, a) > 0 || c && n._h(f, c) < 0) && ( // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            s = !0)) : !h && f ? (r.track({
              type: 0
              /* Added */
              ,
              doc: f
            }), d = !0) : h && !f && (r.track({
              type: 1
              /* Removed */
              ,
              doc: h
            }), d = !0, (a || c) && ( // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            s = !0)), d && (f ? (u = u.add(f), o = p ? o.add(t) : o["delete"](t)) : (u = u["delete"](t), o = o["delete"](t)));
          }), kn(this.query) || On(this.query)) for (; u.size > this.query.limit;) {
            var h = kn(this.query) ? u.last() : u.first();
            u = u["delete"](h.key), o = o["delete"](h.key), r.track({
              type: 1
              /* Removed */
              ,
              doc: h
            });
          }
          return {
            fh: u,
            Eh: r,
            Ih: s,
            Qt: o
          };
        }, t.prototype.Th = function (t, e) {
          // We suppress the initial change event for documents that were modified as
          // part of a write acknowledgment (e.g. when the value of a server transform
          // is applied) as Watch will send us the same document again.
          // By suppressing the event, we only raise two user visible events (one with
          // `hasPendingWrites` and the final state of the document) instead of three
          // (one with `hasPendingWrites`, the modified document with
          // `hasPendingWrites` and the final state of the document).
          return t.Je && e.hasCommittedMutations && !e.Je;
        },
        /**
         * Updates the view with the given ViewDocumentChanges and optionally updates
         * limbo docs and sync state from the provided target change.
         * @param docChanges The set of changes to make to the view's docs.
         * @param updateLimboDocuments Whether to update limbo documents based on this
         *        change.
         * @param targetChange A target change to apply for computing limbo docs and
         *        sync state.
         * @return A new ViewChange with the given docs, changes, and sync state.
         */
        // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
        t.prototype.Di = function (t, e, n) {
          var r = this,
              i = this.fh;
          this.fh = t.fh, this.Qt = t.Qt; // Sort changes based on type and query comparator

          var o = t.Eh.Ut();
          o.sort(function (t, e) {
            return function (t, e) {
              var n = function n(t) {
                switch (t) {
                  case 0
                  /* Added */
                  :
                    return 1;

                  case 2
                  /* Modified */
                  :
                  case 3
                  /* Metadata */
                  :
                    // A metadata change is converted to a modified change at the public
                    // api layer.  Since we sort by document key and then change type,
                    // metadata and modified changes must be sorted equivalently.
                    return 2;

                  case 1
                  /* Removed */
                  :
                    return 0;

                  default:
                    return S();
                }
              };

              return n(t) - n(e);
            }(t.type, e.type) || r._h(t.doc, e.doc);
          }), this.mh(n);
          var u = e ? this.Ah() : [],
              s = 0 === this.lh.size && this.te ? 1
          /* Synced */
          : 0
          /* Local */
          ,
              a = s !== this.hh;
          return this.hh = s, 0 !== o.length || a ? {
            snapshot: new Ot(this.query, t.fh, i, o, t.Qt, 0
            /* Local */
            === s, a,
            /* excludesMetadataChanges= */
            !1),
            Rh: u
          } : {
            Rh: u
          }; // no changes
        },
        /**
         * Applies an OnlineState change to the view, potentially generating a
         * ViewChange if the view's syncState changes as a result.
         */
        t.prototype.Ks = function (t) {
          return this.te && "Offline"
          /* Offline */
          === t ? ( // If we're offline, set `current` to false and then call applyChanges()
          // to refresh our syncState and generate a ViewChange as appropriate. We
          // are guaranteed to get a new TargetChange that sets `current` back to
          // true once the client is back online.
          this.te = !1, this.Di({
            fh: this.fh,
            Eh: new kt(),
            Qt: this.Qt,
            Ih: !1
          },
          /* updateLimboDocuments= */
          !1)) : {
            Rh: []
          };
        },
        /**
         * Returns whether the doc for the given key should be in limbo.
         */
        t.prototype.Ph = function (t) {
          // If the remote end says it's part of this query, it's not in limbo.
          return !this.uh.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
          !!this.fh.has(t) && !this.fh.get(t).Je;
        },
        /**
         * Updates syncedDocuments, current, and limbo docs based on the given change.
         * Returns the list of changes to which docs are in limbo.
         */
        t.prototype.mh = function (t) {
          var e = this;
          t && (t.ee.forEach(function (t) {
            return e.uh = e.uh.add(t);
          }), t.ne.forEach(function (t) {}), t.se.forEach(function (t) {
            return e.uh = e.uh["delete"](t);
          }), this.te = t.te);
        }, t.prototype.Ah = function () {
          var t = this; // We can only determine limbo documents when we're in-sync with the server.

          if (!this.te) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
          // updating many documents.

          var e = this.lh;
          this.lh = At(), this.fh.forEach(function (e) {
            t.Ph(e.key) && (t.lh = t.lh.add(e.key));
          }); // Diff the new limbo docs with the old limbo docs.

          var n = [];
          return e.forEach(function (e) {
            t.lh.has(e) || n.push(new au(e));
          }), this.lh.forEach(function (t) {
            e.has(t) || n.push(new su(t));
          }), n;
        },
        /**
         * Update the in-memory state of the current view with the state read from
         * persistence.
         *
         * We update the query view whenever a client's primary status changes:
         * - When a client transitions from primary to secondary, it can miss
         *   LocalStorage updates and its query views may temporarily not be
         *   synchronized with the state on disk.
         * - For secondary to primary transitions, the client needs to update the list
         *   of `syncedDocuments` since secondary clients update their query views
         *   based purely on synthesized RemoteEvents.
         *
         * @param queryResult.documents - The documents that match the query according
         * to the LocalStore.
         * @param queryResult.remoteKeys - The keys of the documents that match the
         * query according to the backend.
         *
         * @return The ViewChange that resulted from this synchronization.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.gh = function (t) {
          this.uh = t.za, this.lh = At();
          var e = this.wh(t.documents);
          return this.Di(e,
          /*updateLimboDocuments=*/
          !0);
        },
        /**
         * Returns a view snapshot as if this query was just listened to. Contains
         * a document add for every existing document and the `fromCache` and
         * `hasPendingWrites` status of the already established view.
         */
        // PORTING NOTE: Multi-tab only.
        t.prototype.yh = function () {
          return Ot.Gt(this.query, this.fh, this.Qt, 0
          /* Local */
          === this.hh);
        }, t;
      }(),
          hu = function hu(
      /**
           * The query itself.
           */
      t,
      /**
           * The target number created by the client that is used in the watch
           * stream to identify this query.
           */
      e,
      /**
           * The view is responsible for computing the final merged truth of what
           * docs are in the query. It gets notified of local and remote changes,
           * and applies the query filters and limits to determine the most correct
           * possible results.
           */
      n) {
        this.query = t, this.targetId = e, this.view = n;
      },
          fu = function fu(t) {
        this.key = t,
        /**
                 * Set to true once we've received a document. This is used in
                 * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
                 * decide whether it needs to manufacture a delete event for the target once
                 * the target is CURRENT.
                 */
        this.Vh = !1;
      },
          lu =
      /** @class */
      function () {
        function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o) {
          this.Bc = t, this.ph = e, this.bh = n, this.Sh = r, this.currentUser = i, this.Dh = o, this.Ch = {}, this.Nh = new Q(function (t) {
            return Bn(t);
          }, Fn), this.xh = new Map(),
          /**
               * The keys of documents that are in limbo for which we haven't yet started a
               * limbo resolution query.
               */
          this.Fh = [],
          /**
               * Keeps track of the target ID for each document that is in limbo with an
               * active target.
               */
          this.Oh = new dt($.D),
          /**
               * Keeps track of the information about an active limbo resolution for each
               * active target ID that was started for the purpose of limbo resolution.
               */
          this.kh = new Map(), this.Mh = new Yo(),
          /** Stores user completion handlers, indexed by User and BatchId. */
          this.$h = {},
          /** Stores user callbacks waiting for all pending writes to be acknowledged. */
          this.Lh = new Map(), this.Bh = Ki.Vo(), this.onlineState = "Unknown"
          /* Unknown */
          , // The primary state is set to `true` or `false` immediately after Firestore
          // startup. In the interim, a client should only be considered primary if
          // `isPrimary` is true.
          this.qh = void 0;
        }

        return Object.defineProperty(t.prototype, "Uh", {
          get: function get() {
            return !0 === this.qh;
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }();
      /**
       * Holds the state of a query target, including its target ID and whether the
       * target is 'not-current', 'current' or 'rejected'.
       */
      // Visible for testing

      /**
       * Initiates the new listen, resolves promise when listen enqueued to the
       * server. All the subsequent view snapshots or errors are sent to the
       * subscribed handlers. Returns the initial snapshot.
       */


      function pu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = Bu(t), (u = e.Nh.get(r)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                i = u.targetId, e.Sh.Bu(i), o = u.view.yh(), [3
                /*break*/
                , 4]) : [3
                /*break*/
                , 1];

              case 1:
                return [4
                /*yield*/
                , ho(e.Bc, Un(r))];

              case 2:
                return s = n.sent(), a = e.Sh.Bu(s.targetId), i = s.targetId, [4
                /*yield*/
                , du(e, r, i, "current" === a)];

              case 3:
                o = n.sent(), e.Uh && Ao(e.ph, s), n.label = 4;

              case 4:
                return [2
                /*return*/
                , o];
            }
          });
        });
      }
      /**
       * Registers a view for a previously unknown query and computes its initial
       * snapshot.
       */


      function du(t, r, i, o) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var u, s, a, c, h, f;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (l) {
            switch (l.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return t.Kh = function (r, i, o) {
                  return function (t, r, i, o) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e, u, s;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e = r.view.wh(i), e.Ih ? [4
                            /*yield*/
                            , lo(t.Bc, r.query,
                            /* usePreviousResults= */
                            !1).then(function (t) {
                              var n = t.documents;
                              return r.view.wh(n, e);
                            })] : [3
                            /*break*/
                            , 2];

                          case 1:
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                            e = n.sent(), n.label = 2;

                          case 2:
                            return u = o && o.zt.get(r.targetId), s = r.view.Di(e,
                            /* updateLimboDocuments= */
                            t.Uh, u), [2
                            /*return*/
                            , (Du(t, r.targetId, s.Rh), s.snapshot)];
                        }
                      });
                    });
                  }(t, r, i, o);
                }, [4
                /*yield*/
                , lo(t.Bc, r,
                /* usePreviousResults= */
                !0)];

              case 1:
                return u = l.sent(), s = new cu(r, u.za), a = s.wh(u.documents), c = Lt.Zt(i, o && "Offline"
                /* Offline */
                !== t.onlineState), h = s.Di(a,
                /* updateLimboDocuments= */
                t.Uh, c), Du(t, i, h.Rh), f = new hu(r, i, s), [2
                /*return*/
                , (t.Nh.set(r, f), t.xh.has(i) ? t.xh.get(i).push(r) : t.xh.set(i, [r]), h.snapshot)];
            }
          });
        });
      }
      /** Stops listening to the query. */


      function vu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return e = k(t), i = e.Nh.get(r), (o = e.xh.get(i.targetId)).length > 1 ? [2
                /*return*/
                , (e.xh.set(i.targetId, o.filter(function (t) {
                  return !Fn(t, r);
                })), void e.Nh["delete"](r))] : e.Uh ? ( // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                e.Sh.Uu(i.targetId), e.Sh.Ou(i.targetId) ? [3
                /*break*/
                , 2] : [4
                /*yield*/
                , fo(e.Bc, i.targetId,
                /*keepPersistedTargetData=*/
                !1).then(function () {
                  e.Sh.Qu(i.targetId), Do(e.ph, i.targetId), Nu(e, i.targetId);
                })["catch"](mo)]) : [3
                /*break*/
                , 3];

              case 1:
                n.sent(), n.label = 2;

              case 2:
                return [3
                /*break*/
                , 5];

              case 3:
                return Nu(e, i.targetId), [4
                /*yield*/
                , fo(e.Bc, i.targetId,
                /*keepPersistedTargetData=*/
                !0)];

              case 4:
                n.sent(), n.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Initiates the write of local mutation batch which involves adding the
       * writes to the mutation queue, notifying the remote store about new
       * mutations and raising events for any changes this write caused.
       *
       * The promise returned by this call is resolved when the above steps
       * have completed, *not* when the write was acked by the backend. The
       * userCallback is resolved once the write was acked/rejected by the
       * backend (or failed locally for any other reason).
       */


      function yu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = ju(t), n.label = 1;

              case 1:
                return n.trys.push([1, 5,, 6]), [4
                /*yield*/
                , function (t, e) {
                  var n,
                      r = k(t),
                      i = W.now(),
                      o = e.reduce(function (t, e) {
                    return t.add(e.key);
                  }, At());
                  return r.persistence.runTransaction("Locally write mutations", "readwrite", function (t) {
                    return r.Ka.qi(t, o).next(function (o) {
                      n = o;

                      for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
                      // we record the base state in a separate patch mutation. This is
                      // later used to guarantee consistent values and prevents flicker
                      // even if the backend sends us an update that already includes our
                      // transform.
                      var u = [], s = 0, a = e; s < a.length; s++) {
                        var c = a[s],
                            h = cn(c, n.get(c.key));
                        null != h && // NOTE: The base state should only be applied if there's some
                        // existing document to override, so use a Precondition of
                        // exists=true
                        u.push(new pn(c.key, h, En(h.proto.mapValue), rn.exists(!0)));
                      }

                      return r.Oi.Wr(t, i, u, e);
                    });
                  }).then(function (t) {
                    var e = t.Ii(n);
                    return {
                      batchId: t.batchId,
                      Ri: e
                    };
                  });
                }(e.Bc, r)];

              case 2:
                return o = n.sent(), e.Sh.ku(o.batchId), function (t, e, n) {
                  var r = t.$h[t.currentUser.ti()];
                  r || (r = new dt(L)), r = r.ot(e, n), t.$h[t.currentUser.ti()] = r;
                }(e, o.batchId, i), [4
                /*yield*/
                , ku(e, o.Ri)];

              case 3:
                return n.sent(), [4
                /*yield*/
                , Mo(e.ph)];

              case 4:
                return n.sent(), [3
                /*break*/
                , 6];

              case 5:
                return u = n.sent(), s = _r(u, "Failed to persist write"), i.reject(s), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Applies one remote event to the sync engine, notifying any views of the
       * changes, and releasing any pending mutation batches that would become
       * visible because of the snapshot version the remote event contains.
       */


      function mu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = k(t), n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 6]), [4
                /*yield*/
                , ao(e.Bc, r)];

              case 2:
                return i = n.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
                r.zt.forEach(function (t, n) {
                  var r = e.kh.get(n);
                  r && ( // Since this is a limbo resolution lookup, it's for a single document
                  // and it could be added, modified, or removed, but not a combination.
                  x(t.ee.size + t.ne.size + t.se.size <= 1), t.ee.size > 0 ? r.Vh = !0 : t.ne.size > 0 ? x(r.Vh) : t.se.size > 0 && (x(r.Vh), r.Vh = !1));
                }), [4
                /*yield*/
                , ku(e, i, r)];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return n.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , mo(n.sent())];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Applies an OnlineState change to the sync engine and notifies any views of
       * the change.
       */


      function gu(t, e, n) {
        var r = k(t); // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.

        if (r.Uh && 0
        /* RemoteStore */
        === n || !r.Uh && 1
        /* SharedClientState */
        === n) {
          var i = [];
          r.Nh.forEach(function (t, n) {
            var r = n.view.Ks(e);
            r.snapshot && i.push(r.snapshot);
          }), function (t, e) {
            var n = k(t);
            n.onlineState = e;
            var r = !1;
            n.Bs.forEach(function (t, n) {
              for (var i = 0, o = n.listeners; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Ks(e) && (r = !0);
              }
            }), r && kr(n);
          }(r.bh, e), i.length && r.Ch.Tc(i), r.onlineState = e, r.Uh && r.Sh.zu(e);
        }
      }
      /**
       * Rejects the listen for the given targetID. This can be triggered by the
       * backend for any active target.
       *
       * @param syncEngine The sync engine implementation.
       * @param targetId The targetID corresponds to one previously initiated by the
       * user as part of TargetData passed to listen() on RemoteStore.
       * @param err A description of the condition that has forced the rejection.
       * Nearly always this will be an indication that the user is no longer
       * authorized to see the data matching the target.
       */


      function wu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s, a, c;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (e = k(t)).Sh.Wu(r, "rejected", i), o = e.kh.get(r), (u = o && o.key) ? (s = (s = new dt($.D)).ot(u, new Nn(u, H.min())), a = At().add(u), c = new Pt(H.min(),
                /* targetChanges= */
                new Map(),
                /* targetMismatches= */
                new mt(L), s, a), [4
                /*yield*/
                , mu(e, c)]) : [3
                /*break*/
                , 2];

              case 1:
                return n.sent(), // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                e.Oh = e.Oh.remove(u), e.kh["delete"](r), xu(e), [3
                /*break*/
                , 4];

              case 2:
                return [4
                /*yield*/
                , fo(e.Bc, r,
                /* keepPersistedTargetData */
                !1).then(function () {
                  return Nu(e, r, i);
                })["catch"](mo)];

              case 3:
                n.sent(), n.label = 4;

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function bu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = k(t), i = r.batch.batchId, n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 6]), [4
                /*yield*/
                , uo(e.Bc, r)];

              case 2:
                return o = n.sent(), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                Tu(e, i,
                /*error=*/
                null), _u(e, i), e.Sh.$u(i, "acknowledged"), [4
                /*yield*/
                , ku(e, o)];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return n.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , mo(n.sent())];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Iu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = k(t), n.label = 1;

              case 1:
                return n.trys.push([1, 4,, 6]), [4
                /*yield*/
                , function (t, e) {
                  var n = k(t);
                  return n.persistence.runTransaction("Reject batch", "readwrite-primary", function (t) {
                    var r;
                    return n.Oi.Gr(t, e).next(function (e) {
                      return x(null !== e), r = e.keys(), n.Oi.Zr(t, e);
                    }).next(function () {
                      return n.Oi.io(t);
                    }).next(function () {
                      return n.Ka.qi(t, r);
                    });
                  });
                }(e.Bc, r)];

              case 2:
                return o = n.sent(), // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                Tu(e, r, i), _u(e, r), e.Sh.$u(r, "rejected", i), [4
                /*yield*/
                , ku(e, o)];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return n.sent(), [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , mo(n.sent())];

              case 5:
                return n.sent(), [3
                /*break*/
                , 6];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Registers a user callback that resolves when all pending mutations at the moment of calling
       * are acknowledged .
       */


      function Eu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                Po((e = k(t)).ph) || T("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), n.label = 1;

              case 1:
                return n.trys.push([1, 3,, 4]), [4
                /*yield*/
                , function (t) {
                  var e = k(t);
                  return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
                    return e.Oi.Yr(t);
                  });
                }(e.Bc)];

              case 2:
                return -1 === (i = n.sent()) ? [2
                /*return*/
                , void r.resolve()] : ((o = e.Lh.get(i) || []).push(r), e.Lh.set(i, o), [3
                /*break*/
                , 4]);

              case 3:
                return u = n.sent(), s = _r(u, "Initialization of waitForPendingWrites() operation failed"), r.reject(s), [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
       * if there are any.
       */


      function _u(t, e) {
        (t.Lh.get(e) || []).forEach(function (t) {
          t.resolve();
        }), t.Lh["delete"](e)
        /** Reject all outstanding callbacks waiting for pending writes to complete. */
        ;
      }

      function Tu(t, e, n) {
        var r = k(t),
            i = r.$h[r.currentUser.ti()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.

        if (i) {
          var o = i.get(e);
          o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.$h[r.currentUser.ti()] = i;
        }
      }

      function Nu(t, e, n) {
        void 0 === n && (n = null), t.Sh.Uu(e);

        for (var r = 0, i = t.xh.get(e); r < i.length; r++) {
          var o = i[r];
          t.Nh["delete"](o), n && t.Ch.Qh(o, n);
        }

        t.xh["delete"](e), t.Uh && t.Mh.hu(e).forEach(function (e) {
          t.Mh.ro(e) || // We removed the last reference for this key
          Au(t, e);
        });
      }

      function Au(t, e) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var n = t.Oh.get(e);
        null !== n && (Do(t.ph, n), t.Oh = t.Oh.remove(e), t.kh["delete"](n), xu(t));
      }

      function Du(t, e, n) {
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          o instanceof su ? (t.Mh.qo(o.key, e), Su(t, o)) : o instanceof au ? (T("SyncEngine", "Document no longer in limbo: " + o.key), t.Mh.Ko(o.key, e), t.Mh.ro(o.key) || // We removed the last reference for this key
          Au(t, o.key)) : S();
        }
      }

      function Su(t, e) {
        var n = e.key;
        t.Oh.get(n) || (T("SyncEngine", "New document in limbo: " + n), t.Fh.push(n), xu(t));
      }
      /**
       * Starts listens for documents in limbo that are enqueued for resolution,
       * subject to a maximum number of concurrent resolutions.
       *
       * Without bounding the number of concurrent resolutions, the server can fail
       * with "resource exhausted" errors which can lead to pathological client
       * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
       */


      function xu(t) {
        for (; t.Fh.length > 0 && t.Oh.size < t.Dh;) {
          var e = t.Fh.shift(),
              n = t.Bh.next();
          t.kh.set(n, new fu(e)), t.Oh = t.Oh.ot(e, n), Ao(t.ph, new ht(Un(xn(e.path)), n, 2
          /* LimboResolution */
          , Kr.ir));
        }
      }

      function ku(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var o, u, s, a;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (c) {
            switch (c.label) {
              case 0:
                return o = k(t), u = [], s = [], a = [], o.Nh.P() ? [3
                /*break*/
                , 3] : (o.Nh.forEach(function (t, e) {
                  a.push(o.Kh(e, r, i).then(function (t) {
                    if (t) {
                      o.Uh && o.Sh.Wu(e.targetId, t.fromCache ? "not-current" : "current"), u.push(t);
                      var n = Gr.Zi(e.targetId, t);
                      s.push(n);
                    }
                  }));
                }), [4
                /*yield*/
                , Promise.all(a)]);

              case 1:
                return c.sent(), o.Ch.Tc(u), [4
                /*yield*/
                , function (t, r) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var e, i, o, u, s, a, c, h, f;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                      switch (n.label) {
                        case 0:
                          e = k(t), n.label = 1;

                        case 1:
                          return n.trys.push([1, 3,, 4]), [4
                          /*yield*/
                          , e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (t) {
                            return cr.forEach(r, function (n) {
                              return cr.forEach(n.Ji, function (r) {
                                return e.persistence.qr.qo(t, n.targetId, r);
                              }).next(function () {
                                return cr.forEach(n.Xi, function (r) {
                                  return e.persistence.qr.Ko(t, n.targetId, r);
                                });
                              });
                            });
                          })];

                        case 2:
                          return n.sent(), [3
                          /*break*/
                          , 4];

                        case 3:
                          if (!pr(i = n.sent())) throw i; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                          // number for the documents that were included in this transaction.
                          // This might trigger them to be deleted earlier than they otherwise
                          // would have, but it should not invalidate the integrity of the data.

                          return T("LocalStore", "Failed to update sequence numbers: " + i), [3
                          /*break*/
                          , 4];

                        case 4:
                          for (o = 0, u = r; o < u.length; o++) {
                            s = u[o], a = s.targetId, s.fromCache || (c = e.La.get(a), h = c.nt, f = c.rt(h), // Advance the last limbo free snapshot version
                            e.La = e.La.ot(a, f));
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(o.Bc, s)];

              case 2:
                c.sent(), c.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Ou(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (e = k(t)).currentUser.isEqual(r) ? [3
                /*break*/
                , 3] : (T("SyncEngine", "User change. New user:", r.ti()), [4
                /*yield*/
                , oo(e.Bc, r)]);

              case 1:
                return i = n.sent(), e.currentUser = r, // Fails tasks waiting for pending writes requested by previous user.
                function (t, e) {
                  t.Lh.forEach(function (t) {
                    t.forEach(function (t) {
                      t.reject(new I(b.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                    });
                  }), t.Lh.clear();
                }(e), // TODO(b/114226417): Consider calling this only in the primary tab.
                e.Sh.Gu(r, i.ja, i.Ga), [4
                /*yield*/
                , ku(e, i.Wa)];

              case 2:
                n.sent(), n.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Pu(t, e) {
        var n = k(t),
            r = n.kh.get(e);
        if (r && r.Vh) return At().add(r.key);
        var i = At(),
            o = n.xh.get(e);
        if (!o) return i;

        for (var u = 0, s = o; u < s.length; u++) {
          var a = s[u],
              c = n.Nh.get(a);
          i = i.kt(c.view.dh);
        }

        return i;
      }
      /**
       * Reconcile the list of synced documents in an existing view with those
       * from persistence.
       */


      function Lu(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4
                /*yield*/
                , lo((e = k(t)).Bc, r.query,
                /* usePreviousResults= */
                !0)];

              case 1:
                return i = n.sent(), o = r.view.gh(i), [2
                /*return*/
                , (e.Uh && Du(e, r.targetId, o.Rh), o)];
            }
          });
        });
      }
      /** Applies a mutation state to an existing batch.  */
      // PORTING NOTE: Multi-Tab only.


      function Vu(t, r, i, o) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, u;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4
                /*yield*/
                , function (t, e) {
                  var n = k(t),
                      r = k(n.Oi);
                  return n.persistence.runTransaction("Lookup mutation documents", "readonly", function (t) {
                    return r.zr(t, e).next(function (e) {
                      return e ? n.Ka.qi(t, e) : cr.resolve(null);
                    });
                  });
                }((e = k(t)).Bc, r)];

              case 1:
                return null === (u = n.sent()) ? [3
                /*break*/
                , 6] : "pending" !== i ? [3
                /*break*/
                , 3] : [4
                /*yield*/
                , Mo(e.ph)];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return n.sent(), [3
                /*break*/
                , 4];

              case 3:
                "acknowledged" === i || "rejected" === i ? ( // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                Tu(e, r, o || null), _u(e, r), function (t, e) {
                  k(k(t).Oi).no(e);
                }(e.Bc, r)) : S(), n.label = 4;

              case 4:
                return [4
                /*yield*/
                , ku(e, u)];

              case 5:
                return n.sent(), [3
                /*break*/
                , 7];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                T("SyncEngine", "Cannot apply mutation batch with id: " + r), n.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Applies a query target change from a different tab. */
      // PORTING NOTE: Multi-Tab only.


      function Ru(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a, c, h;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return Bu(e = k(t)), ju(e), !0 !== r || !0 === e.qh ? [3
                /*break*/
                , 3] : (i = e.Sh.xu(), [4
                /*yield*/
                , Uu(e, i.L())]);

              case 1:
                return o = n.sent(), e.qh = !0, [4
                /*yield*/
                , Qo(e.ph, !0)];

              case 2:
                for (n.sent(), u = 0, s = o; u < s.length; u++) {
                  a = s[u], Ao(e.ph, a);
                }

                return [3
                /*break*/
                , 7];

              case 3:
                return !1 !== r || !1 === e.qh ? [3
                /*break*/
                , 7] : (c = [], h = Promise.resolve(), e.xh.forEach(function (t, n) {
                  e.Sh.Ku(n) ? c.push(n) : h = h.then(function () {
                    return Nu(e, n), fo(e.Bc, n,
                    /*keepPersistedTargetData=*/
                    !0);
                  }), Do(e.ph, n);
                }), [4
                /*yield*/
                , h]);

              case 4:
                return n.sent(), [4
                /*yield*/
                , Uu(e, c)];

              case 5:
                return n.sent(), // PORTING NOTE: Multi-Tab only.
                function (t) {
                  var e = k(t);
                  e.kh.forEach(function (t, n) {
                    Do(e.ph, n);
                  }), e.Mh.lu(), e.kh = new Map(), e.Oh = new dt($.D);
                }(e), e.qh = !1, [4
                /*yield*/
                , Qo(e.ph, !1)];

              case 6:
                n.sent(), n.label = 7;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Uu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, i, o, u, s, a, c, h, f, l, p, d, v, y;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                e = k(t), i = [], o = [], u = 0, s = r, n.label = 1;

              case 1:
                return u < s.length ? (a = s[u], c = void 0, (h = e.xh.get(a)) && 0 !== h.length ? [4
                /*yield*/
                , ho(e.Bc, Un(h[0]))] : [3
                /*break*/
                , 7]) : [3
                /*break*/
                , 13];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                c = n.sent(), f = 0, l = h, n.label = 3;

              case 3:
                return f < l.length ? (p = l[f], d = e.Nh.get(p), [4
                /*yield*/
                , Lu(e, d)]) : [3
                /*break*/
                , 6];

              case 4:
                (v = n.sent()).snapshot && o.push(v.snapshot), n.label = 5;

              case 5:
                return f++, [3
                /*break*/
                , 3];

              case 6:
                return [3
                /*break*/
                , 11];

              case 7:
                return [4
                /*yield*/
                , po(e.Bc, a)];

              case 8:
                return y = n.sent(), [4
                /*yield*/
                , ho(e.Bc, y)];

              case 9:
                return c = n.sent(), [4
                /*yield*/
                , du(e, Cu(y), a,
                /*current=*/
                !1)];

              case 10:
                n.sent(), n.label = 11;

              case 11:
                i.push(c), n.label = 12;

              case 12:
                return u++, [3
                /*break*/
                , 1];

              case 13:
                return [2
                /*return*/
                , (e.Ch.Tc(o), i)];
            }
          });
        });
      }
      /**
       * Creates a `Query` object from the specified `Target`. There is no way to
       * obtain the original `Query`, so we synthesize a `Query` from the `Target`
       * object.
       *
       * The synthesized result might be different from the original `Query`, but
       * since the synthesized `Query` should return the same results as the
       * original one (only the presentation of results might differ), the potential
       * difference will not cause issues.
       */
      // PORTING NOTE: Multi-Tab only.


      function Cu(t) {
        return Sn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
        /* First */
        , t.startAt, t.endAt);
      }
      /** Returns the IDs of the clients that are currently active. */
      // PORTING NOTE: Multi-Tab only.


      function qu(t) {
        var e = k(t);
        return k(k(e.Bc).persistence).va();
      }
      /** Applies a query target change from a different tab. */
      // PORTING NOTE: Multi-Tab only.


      function Mu(t, r, i, o) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, u, s;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return (e = k(t)).qh ? ( // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                T("SyncEngine", "Ignoring unexpected query state notification."), [3
                /*break*/
                , 8]) : [3
                /*break*/
                , 1];

              case 1:
                if (!e.xh.has(r)) return [3
                /*break*/
                , 8];

                switch (i) {
                  case "current":
                  case "not-current":
                    return [3
                    /*break*/
                    , 2];

                  case "rejected":
                    return [3
                    /*break*/
                    , 5];
                }

                return [3
                /*break*/
                , 7];

              case 2:
                return [4
                /*yield*/
                , vo(e.Bc)];

              case 3:
                return u = n.sent(), s = Pt.Xt(r, "current" === i), [4
                /*yield*/
                , ku(e, u, s)];

              case 4:
                return n.sent(), [3
                /*break*/
                , 8];

              case 5:
                return [4
                /*yield*/
                , fo(e.Bc, r,
                /* keepPersistedTargetData */
                !0)];

              case 6:
                return n.sent(), Nu(e, r, o), [3
                /*break*/
                , 8];

              case 7:
                S(), n.label = 8;

              case 8:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Adds or removes Watch targets for queries from different tabs. */


      function Fu(t, r, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, o, u, s, a, c, h, f, l, p;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (d) {
            switch (d.label) {
              case 0:
                if (!(e = Bu(t)).qh) return [3
                /*break*/
                , 10];
                o = 0, u = r, d.label = 1;

              case 1:
                return o < u.length ? (s = u[o], e.xh.has(s) ? ( // A target might have been added in a previous attempt
                T("SyncEngine", "Adding an already active target " + s), [3
                /*break*/
                , 5]) : [4
                /*yield*/
                , po(e.Bc, s)]) : [3
                /*break*/
                , 6];

              case 2:
                return a = d.sent(), [4
                /*yield*/
                , ho(e.Bc, a)];

              case 3:
                return c = d.sent(), [4
                /*yield*/
                , du(e, Cu(a), c.targetId,
                /*current=*/
                !1)];

              case 4:
                d.sent(), Ao(e.ph, c), d.label = 5;

              case 5:
                return o++, [3
                /*break*/
                , 1];

              case 6:
                h = function h(t) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return e.xh.has(t) ? [4
                        /*yield*/
                        , fo(e.Bc, t,
                        /* keepPersistedTargetData */
                        !1).then(function () {
                          Do(e.ph, t), Nu(e, t);
                        })["catch"](mo)] : [3
                        /*break*/
                        , 2];
                      // Release queries that are still active.

                      case 1:
                        // Release queries that are still active.
                        n.sent(), n.label = 2;

                      case 2:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                }, f = 0, l = i, d.label = 7;

              case 7:
                return f < l.length ? (p = l[f], [5
                /*yield**/
                , h(p)]) : [3
                /*break*/
                , 10];

              case 8:
                d.sent(), d.label = 9;

              case 9:
                return f++, [3
                /*break*/
                , 7];

              case 10:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function Bu(t) {
        var e = k(t);
        return e.ph.Uc.Xc = mu.bind(null, e), e.ph.Uc.qe = Pu.bind(null, e), e.ph.Uc.Jc = wu.bind(null, e), e.Ch.Tc = Sr.bind(null, e.bh), e.Ch.Qh = xr.bind(null, e.bh), e;
      }

      function ju(t) {
        var e = k(t);
        return e.ph.Uc.Zc = bu.bind(null, e), e.ph.Uc.tu = Iu.bind(null, e), e;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.

      /**
       * A query engine that takes advantage of the target document mapping in the
       * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
       * reading the documents that previously matched a query plus any documents that were
       * edited after the query was last listened to.
       *
       * There are some cases where Index-Free queries are not guaranteed to produce
       * the same results as full collection scans. In these cases, the
       * IndexFreeQueryEngine falls back to full query processing. These cases are:
       *
       * - Limit queries where a document that matched the query previously no longer
       *   matches the query.
       *
       * - Limit queries where a document edit may cause the document to sort below
       *   another document that is in the local cache.
       *
       * - Queries that have never been CURRENT or free of Limbo documents.
       */


      var zu =
      /** @class */
      function () {
        function t() {}

        return t.prototype.Qa = function (t) {
          this.Wh = t;
        }, t.prototype.Qi = function (t, e, n, r) {
          var i = this; // Queries that match all documents don't benefit from using
          // IndexFreeQueries. It is more efficient to scan all documents in a
          // collection, rather than to perform individual lookups.

          return function (t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.on.length || 1 === t.on.length && t.on[0].field.W());
          }(e) || n.isEqual(H.min()) ? this.jh(t, e) : this.Wh.qi(t, r).next(function (o) {
            var s = i.Gh(e, o);
            return (kn(e) || On(e)) && i.Ih(e.an, s, r, n) ? i.jh(t, e) : (_() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG && T("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), jn(e)), i.Wh.Qi(t, e, n).next(function (t) {
              // We merge `previousResults` into `updateResults`, since
              // `updateResults` is already a DocumentMap. If a document is
              // contained in both lists, then its contents are the same.
              return s.forEach(function (e) {
                t = t.ot(e.key, e);
              }), t;
            }));
          }); // Queries that have never seen a snapshot without limbo free documents
          // should also be run as a full collection scan.
        },
        /** Applies the query filter and sorting to the provided documents.  */
        t.prototype.Gh = function (t, e) {
          // Sort the documents and re-apply the query filter since previously
          // matching documents do not necessarily still match the query.
          var n = new mt(Gn(t));
          return e.forEach(function (e, r) {
            r instanceof Tn && zn(t, r) && (n = n.add(r));
          }), n;
        },
        /**
         * Determines if a limit query needs to be refilled from cache, making it
         * ineligible for index-free execution.
         *
         * @param sortedPreviousResults The documents that matched the query when it
         * was last synchronized, sorted by the query's comparator.
         * @param remoteKeys The document keys that matched the query at the last
         * snapshot.
         * @param limboFreeSnapshotVersion The version of the snapshot when the query
         * was last synchronized.
         */
        t.prototype.Ih = function (t, e, n, r) {
          // The query needs to be refilled if a previously matching document no
          // longer matches.
          if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
          // a potential that an older document from cache now sorts before a document
          // that was previously part of the limit. This, however, can only happen if
          // the document at the edge of the limit goes out of limit.
          // If a document that is not the limit boundary sorts differently,
          // the boundary of the limit itself did not change and documents from cache
          // will continue to be "rejected" by this boundary. Therefore, we can ignore
          // any modifications that don't affect the last document.

          var i = "F"
          /* First */
          === t ? e.last() : e.first();
          return !!i && (i.hasPendingWrites || i.version.u(r) > 0);
        }, t.prototype.jh = function (t, e) {
          return _() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].DEBUG && T("IndexFreeQueryEngine", "Using full collection scan to execute query:", jn(e)), this.Wh.Qi(t, e, H.min());
        }, t;
      }(),
          Gu =
      /** @class */
      function () {
        function t(t, e) {
          this.ki = t, this.qr = e,
          /**
               * The set of all mutations that have been sent but not yet been applied to
               * the backend.
               */
          this.Oi = [],
          /** Next value to use when assigning sequential IDs to each mutation batch. */
          this.zh = 1,
          /** An ordered mapping between documents and the mutations batch IDs. */
          this.Hh = new mt(Jo.iu);
        }

        return t.prototype.Qr = function (t) {
          return cr.resolve(0 === this.Oi.length);
        }, t.prototype.Wr = function (t, e, n, r) {
          var i = this.zh;
          this.zh++, this.Oi.length > 0 && this.Oi[this.Oi.length - 1];
          var o = new qr(i, e, n, r);
          this.Oi.push(o); // Track references by document key and index collection parents.

          for (var u = 0, s = r; u < s.length; u++) {
            var a = s[u];
            this.Hh = this.Hh.add(new Jo(a.key, i)), this.ki.jr(t, a.key.path.F());
          }

          return cr.resolve(o);
        }, t.prototype.Gr = function (t, e) {
          return cr.resolve(this.Yh(e));
        }, t.prototype.Hr = function (t, e) {
          var n = e + 1,
              r = this.Jh(n),
              i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
          // start of the queue.

          return cr.resolve(this.Oi.length > i ? this.Oi[i] : null);
        }, t.prototype.Yr = function () {
          return cr.resolve(0 === this.Oi.length ? -1 : this.zh - 1);
        }, t.prototype.Jr = function (t) {
          return cr.resolve(this.Oi.slice());
        }, t.prototype.$i = function (t, e) {
          var n = this,
              r = new Jo(e, 0),
              i = new Jo(e, Number.POSITIVE_INFINITY),
              o = [];
          return this.Hh.xt([r, i], function (t) {
            var e = n.Yh(t.fu);
            o.push(e);
          }), cr.resolve(o);
        }, t.prototype.Ki = function (t, e) {
          var n = this,
              r = new mt(L);
          return e.forEach(function (t) {
            var e = new Jo(t, 0),
                i = new Jo(t, Number.POSITIVE_INFINITY);
            n.Hh.xt([e, i], function (t) {
              r = r.add(t.fu);
            });
          }), cr.resolve(this.Xh(r));
        }, t.prototype.Hi = function (t, e) {
          // Use the query path as a prefix for testing if a document matches the
          // query.
          var n = e.path,
              r = n.length + 1,
              i = n; // Construct a document reference for actually scanning the index. Unlike
          // the prefix the document key in this reference must have an even number of
          // segments. The empty segment can be used a suffix of the query path
          // because it precedes all other segments in an ordered traversal.

          $.X(i) || (i = i.child(""));
          var o = new Jo(new $(i), 0),
              u = new mt(L); // Find unique batchIDs referenced by all documents potentially matching the
          // query.

          return this.Hh.Ft(function (t) {
            var e = t.key.path;
            return !!n.M(e) && ( // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (u = u.add(t.fu)), !0);
          }, o), cr.resolve(this.Xh(u));
        }, t.prototype.Xh = function (t) {
          var e = this,
              n = []; // Construct an array of matching batches, sorted by batchID to ensure that
          // multiple mutations affecting the same document key are applied in order.

          return t.forEach(function (t) {
            var r = e.Yh(t);
            null !== r && n.push(r);
          }), n;
        }, t.prototype.Zr = function (t, e) {
          var n = this;
          x(0 === this.Zh(e.batchId, "removed")), this.Oi.shift();
          var r = this.Hh;
          return cr.forEach(e.mutations, function (i) {
            var o = new Jo(i.key, e.batchId);
            return r = r["delete"](o), n.qr.so(t, i.key);
          }).next(function () {
            n.Hh = r;
          });
        }, t.prototype.no = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
        }, t.prototype.ro = function (t, e) {
          var n = new Jo(e, 0),
              r = this.Hh.Ot(n);
          return cr.resolve(e.isEqual(r && r.key));
        }, t.prototype.io = function (t) {
          return this.Oi.length, cr.resolve();
        },
        /**
         * Finds the index of the given batchId in the mutation queue and asserts that
         * the resulting index is within the bounds of the queue.
         *
         * @param batchId The batchId to search for
         * @param action A description of what the caller is doing, phrased in passive
         * form (e.g. "acknowledged" in a routine that acknowledges batches).
         */
        t.prototype.Zh = function (t, e) {
          return this.Jh(t);
        },
        /**
         * Finds the index of the given batchId in the mutation queue. This operation
         * is O(1).
         *
         * @return The computed index of the batch with the given batchId, based on
         * the state of the queue. Note this index can be negative if the requested
         * batchId has already been remvoed from the queue or past the end of the
         * queue if the batchId is larger than the last added batch.
         */
        t.prototype.Jh = function (t) {
          return 0 === this.Oi.length ? 0 : t - this.Oi[0].batchId; // Examine the front of the queue to figure out the difference between the
          // batchId and indexes in the array. Note that since the queue is ordered
          // by batchId, if the first batch has a larger batchId then the requested
          // batchId doesn't exist in the queue.
        },
        /**
         * A version of lookupMutationBatch that doesn't return a promise, this makes
         * other functions that uses this code easier to read and more efficent.
         */
        t.prototype.Yh = function (t) {
          var e = this.Jh(t);
          return e < 0 || e >= this.Oi.length ? null : this.Oi[e];
        }, t;
      }(),
          Ku =
      /** @class */
      function () {
        /**
         * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
         * return 0 to avoid unnecessarily doing the work of calculating the size.
         */
        function t(t, e) {
          this.ki = t, this.tl = e,
          /** Underlying cache of documents and their read times. */
          this.docs = new dt($.D),
          /** Size of all cached documents. */
          this.size = 0
          /**
          * Adds the supplied entry to the cache and updates the cache size as appropriate.
          *
          * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
          * returned by `newChangeBuffer()`.
          */
          ;
        }

        return t.prototype.yi = function (t, e, n) {
          var r = e.key,
              i = this.docs.get(r),
              o = i ? i.size : 0,
              u = this.tl(e);
          return this.docs = this.docs.ot(r, {
            ho: e,
            size: u,
            readTime: n
          }), this.size += u - o, this.ki.jr(t, r.path.F());
        },
        /**
         * Removes the specified entry from the cache and updates the cache size as appropriate.
         *
         * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
         * returned by `newChangeBuffer()`.
         */
        t.prototype.pi = function (t) {
          var e = this.docs.get(t);
          e && (this.docs = this.docs.remove(t), this.size -= e.size);
        }, t.prototype.bi = function (t, e) {
          var n = this.docs.get(e);
          return cr.resolve(n ? n.ho : null);
        }, t.prototype.getEntries = function (t, e) {
          var n = this,
              r = It();
          return e.forEach(function (t) {
            var e = n.docs.get(t);
            r = r.ot(t, e ? e.ho : null);
          }), cr.resolve(r);
        }, t.prototype.Qi = function (t, e, n) {
          for (var r = _t(), i = new $(e.path.child("")), o = this.docs.ft(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
          // the documents we need to match the query against.
          ; o.At();) {
            var u = o.It(),
                s = u.key,
                a = u.value,
                c = a.ho,
                h = a.readTime;
            if (!e.path.M(s.path)) break;
            h.u(n) <= 0 || c instanceof Tn && zn(e, c) && (r = r.ot(c.key, c));
          }

          return cr.resolve(r);
        }, t.prototype.el = function (t, e) {
          return cr.forEach(this.docs, function (t) {
            return e(t);
          });
        }, t.prototype.wo = function (t) {
          // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
          // a separate changelog and does not need special handling for removals.
          return new Qu(this);
        }, t.prototype.To = function (t) {
          return cr.resolve(this.size);
        }, t;
      }(),
          Qu =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).Io = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Di = function (t) {
          var e = this,
              n = [];
          return this.Ri.forEach(function (r, i) {
            i ? n.push(e.Io.yi(t, i, e.readTime)) : e.Io.pi(r);
          }), cr.On(n);
        }, n.prototype.vi = function (t, e) {
          return this.Io.bi(t, e);
        }, n.prototype.Si = function (t, e) {
          return this.Io.getEntries(t, e);
        }, n;
      }(Fr),
          Wu =
      /** @class */
      function () {
        function t(t) {
          this.persistence = t,
          /**
               * Maps a target to the data about that target
               */
          this.nl = new Q(function (t) {
            return ot(t);
          }, ut),
          /** The last received snapshot version. */
          this.lastRemoteSnapshotVersion = H.min(),
          /** The highest numbered target ID encountered. */
          this.highestTargetId = 0,
          /** The highest sequence number encountered. */
          this.sl = 0,
          /**
               * A ordered bidirectional mapping between documents and the remote target
               * IDs.
               */
          this.il = new Yo(), this.targetCount = 0, this.rl = Ki.yo();
        }

        return t.prototype.Ce = function (t, e) {
          return this.nl.forEach(function (t, n) {
            return e(n);
          }), cr.resolve();
        }, t.prototype.So = function (t) {
          return cr.resolve(this.lastRemoteSnapshotVersion);
        }, t.prototype.Do = function (t) {
          return cr.resolve(this.sl);
        }, t.prototype.po = function (t) {
          return this.highestTargetId = this.rl.next(), cr.resolve(this.highestTargetId);
        }, t.prototype.Co = function (t, e, n) {
          return n && (this.lastRemoteSnapshotVersion = n), e > this.sl && (this.sl = e), cr.resolve();
        }, t.prototype.xo = function (t) {
          this.nl.set(t.target, t);
          var e = t.targetId;
          e > this.highestTargetId && (this.rl = new Ki(e), this.highestTargetId = e), t.sequenceNumber > this.sl && (this.sl = t.sequenceNumber);
        }, t.prototype.No = function (t, e) {
          return this.xo(e), this.targetCount += 1, cr.resolve();
        }, t.prototype.Oo = function (t, e) {
          return this.xo(e), cr.resolve();
        }, t.prototype.ko = function (t, e) {
          return this.nl["delete"](e.target), this.il.hu(e.targetId), this.targetCount -= 1, cr.resolve();
        }, t.prototype.Or = function (t, e, n) {
          var r = this,
              i = 0,
              o = [];
          return this.nl.forEach(function (u, s) {
            s.sequenceNumber <= e && null === n.get(s.targetId) && (r.nl["delete"](u), o.push(r.Mo(t, s.targetId)), i++);
          }), cr.On(o).next(function () {
            return i;
          });
        }, t.prototype.$o = function (t) {
          return cr.resolve(this.targetCount);
        }, t.prototype.Lo = function (t, e) {
          var n = this.nl.get(e) || null;
          return cr.resolve(n);
        }, t.prototype.Bo = function (t, e, n) {
          return this.il.au(e, n), cr.resolve();
        }, t.prototype.Uo = function (t, e, n) {
          this.il.uu(e, n);
          var r = this.persistence.qr,
              i = [];
          return r && e.forEach(function (e) {
            i.push(r.so(t, e));
          }), cr.On(i);
        }, t.prototype.Mo = function (t, e) {
          return this.il.hu(e), cr.resolve();
        }, t.prototype.Qo = function (t, e) {
          var n = this.il._u(e);

          return cr.resolve(n);
        }, t.prototype.ro = function (t, e) {
          return cr.resolve(this.il.ro(e));
        }, t;
      }(),
          Hu =
      /** @class */
      function () {
        /**
         * The constructor accepts a factory for creating a reference delegate. This
         * allows both the delegate and this instance to have strong references to
         * each other without having nullable fields that would then need to be
         * checked or asserted on every access.
         */
        function t(t) {
          var e = this;
          this.ol = {}, this.zo = new Kr(0), this.Ho = !1, this.Ho = !0, this.qr = t(this), this.sa = new Wu(this), this.ki = new Ti(), this.Fi = function (t, n) {
            return new Ku(t, function (t) {
              return e.qr.al(t);
            });
          }(this.ki);
        }

        return t.prototype.start = function () {
          return Promise.resolve();
        }, t.prototype.ga = function () {
          // No durable state to ensure is closed on shutdown.
          return this.Ho = !1, Promise.resolve();
        }, Object.defineProperty(t.prototype, "br", {
          get: function get() {
            return this.Ho;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.ha = function () {// No op.
        }, t.prototype.la = function () {// No op.
        }, t.prototype.Na = function () {
          return this.ki;
        }, t.prototype.Sa = function (t) {
          var e = this.ol[t.ti()];
          return e || (e = new Gu(this.ki, this.qr), this.ol[t.ti()] = e), e;
        }, t.prototype.Da = function () {
          return this.sa;
        }, t.prototype.Ca = function () {
          return this.Fi;
        }, t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          T("MemoryPersistence", "Starting transaction:", t);
          var i = new Yu(this.zo.next());
          return this.qr.cl(), n(i).next(function (t) {
            return r.qr.ul(i).next(function () {
              return t;
            });
          }).xn().then(function (t) {
            return i.xi(), t;
          });
        }, t.prototype.hl = function (t, e) {
          return cr.kn(Object.values(this.ol).map(function (n) {
            return function () {
              return n.ro(t, e);
            };
          }));
        }, t;
      }(),
          Yu =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this) || this).Wo = t, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n;
      }(jr),
          Ju =
      /** @class */
      function () {
        function t(t) {
          this.persistence = t,
          /** Tracks all documents that are active in Query views. */
          this.ll = new Yo(),
          /** The list of documents that are potentially GCed after each transaction. */
          this._l = null;
        }

        return t.fl = function (e) {
          return new t(e);
        }, Object.defineProperty(t.prototype, "dl", {
          get: function get() {
            if (this._l) return this._l;
            throw S();
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.qo = function (t, e, n) {
          return this.ll.qo(n, e), this.dl["delete"](n.toString()), cr.resolve();
        }, t.prototype.Ko = function (t, e, n) {
          return this.ll.Ko(n, e), this.dl.add(n.toString()), cr.resolve();
        }, t.prototype.so = function (t, e) {
          return this.dl.add(e.toString()), cr.resolve();
        }, t.prototype.removeTarget = function (t, e) {
          var n = this;
          this.ll.hu(e.targetId).forEach(function (t) {
            return n.dl.add(t.toString());
          });
          var r = this.persistence.Da();
          return r.Qo(t, e.targetId).next(function (t) {
            t.forEach(function (t) {
              return n.dl.add(t.toString());
            });
          }).next(function () {
            return r.ko(t, e);
          });
        }, t.prototype.cl = function () {
          this._l = new Set();
        }, t.prototype.ul = function (t) {
          var e = this,
              n = this.persistence.Ca().wo(); // Remove newly orphaned documents.

          return cr.forEach(this.dl, function (r) {
            var i = $.H(r);
            return e.wl(t, i).next(function (t) {
              t || n.pi(i);
            });
          }).next(function () {
            return e._l = null, n.apply(t);
          });
        }, t.prototype.Ma = function (t, e) {
          var n = this;
          return this.wl(t, e).next(function (t) {
            t ? n.dl["delete"](e.toString()) : n.dl.add(e.toString());
          });
        }, t.prototype.al = function (t) {
          // For eager GC, we don't care about the document size, there are no size thresholds.
          return 0;
        }, t.prototype.wl = function (t, e) {
          var n = this;
          return cr.kn([function () {
            return cr.resolve(n.ll.ro(e));
          }, function () {
            return n.persistence.Da().ro(t, e);
          }, function () {
            return n.persistence.hl(t, e);
          }]);
        }, t;
      }(),
          Xu =
      /** @class */
      function () {
        function t(t) {
          this.El = t.El, this.Tl = t.Tl;
        }

        return t.prototype.wc = function (t) {
          this.Il = t;
        }, t.prototype.hc = function (t) {
          this.ml = t;
        }, t.prototype.onMessage = function (t) {
          this.Al = t;
        }, t.prototype.close = function () {
          this.Tl();
        }, t.prototype.send = function (t) {
          this.El(t);
        }, t.prototype.Rl = function () {
          this.Il();
        }, t.prototype.Pl = function (t) {
          this.ml(t);
        }, t.prototype.gl = function (t) {
          this.Al(t);
        }, t;
      }(),
          Zu = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery"
      },
          $u =
      /** @class */
      function (e) {
        function n(t) {
          var n = this;
          return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n.T = t.T, n;
        }
        /**
         * Base class for all Rest-based connections to the backend (WebChannel and
         * HTTP).
         */


        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Sl = function (t, e, n, r) {
          return new Promise(function (i, o) {
            var u = new _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["XhrIo"]();
            u.listenOnce(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["EventType"].COMPLETE, function () {
              try {
                switch (u.getLastErrorCode()) {
                  case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].NO_ERROR:
                    var e = u.getResponseJson();
                    T("Connection", "XHR received:", JSON.stringify(e)), i(e);
                    break;

                  case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].TIMEOUT:
                    T("Connection", 'RPC "' + t + '" timed out'), o(new I(b.DEADLINE_EXCEEDED, "Request time out"));
                    break;

                  case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["ErrorCode"].HTTP_ERROR:
                    var n = u.getStatus();

                    if (T("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                      var r = u.getResponseJson().error;

                      if (r && r.status && r.message) {
                        var s = function (t) {
                          var e = t.toLowerCase().replace("_", "-");
                          return Object.values(b).indexOf(e) >= 0 ? e : b.UNKNOWN;
                        }(r.status);

                        o(new I(s, r.message));
                      } else o(new I(b.UNKNOWN, "Server responded with status " + u.getStatus()));
                    } else // If we received an HTTP_ERROR but there's no status code,
                      // it's most probably a connection issue
                      o(new I(b.UNAVAILABLE, "Connection failed."));

                    break;

                  default:
                    S();
                }
              } finally {
                T("Connection", 'RPC "' + t + '" completed.');
              }
            });
            var s = JSON.stringify(r);
            u.send(e, "POST", s, n, 15);
          });
        }, n.prototype.Ec = function (t, e) {
          var n = [this.Vl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
              r = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["createWebChannelTransport"])(),
              i = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
              // This param is used to improve routing and project isolation by the
              // backend and must be included in every request.
              database: "projects/" + this._.projectId + "/databases/" + this._.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
              // Override the default timeout (randomized between 10-20 seconds) since
              // a large write batch on a slow internet connection may take a long
              // time to send to the backend. Rather than have WebChannel impose a
              // tight timeout which could lead to infinite timeouts and retries, we
              // set it very large (5-10 minutes) and rely on the browser's builtin
              // timeouts to kick in if the request isn't working.
              forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.T
          };
          this.vl(i.initMessageHeaders, e), // Sending the custom headers we just added to request.initMessageHeaders
          // (Authorization, etc.) will trigger the browser to make a CORS preflight
          // request because the XHR will no longer meet the criteria for a "simple"
          // CORS request:
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
          // Therefore to avoid the CORS preflight request (an extra network
          // roundtrip), we use the httpHeadersOverwriteParam option to specify that
          // the headers should instead be encoded into a special "$httpHeaders" query
          // parameter, which is recognized by the webchannel backend. This is
          // formally defined here:
          // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
          // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
          // doesn't have an Origin header. So we have to exclude a few browser environments that are
          // known to (sometimes) not include an Origin. See
          // https://github.com/firebase/firebase-js-sdk/issues/1491.
          Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isMobileCordova"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isReactNative"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isElectron"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isIE"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isUWP"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isBrowserExtension"])() || (i.httpHeadersOverwriteParam = "$httpHeaders");
          var o = n.join("");
          T("Connection", "Creating WebChannel: " + o, i);

          var u = r.createWebChannel(o, i),
              s = !1,
              d = !1,
              v = new Xu({
            El: function El(t) {
              d ? T("Connection", "Not sending because WebChannel is closed:", t) : (s || (T("Connection", "Opening WebChannel transport."), u.open(), s = !0), T("Connection", "WebChannel sending:", t), u.send(t));
            },
            Tl: function Tl() {
              return u.close();
            }
          }),
              y = function y(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            u.listen(t, function (t) {
              try {
                e(t);
              } catch (t) {
                setTimeout(function () {
                  throw t;
                }, 0);
              }
            });
          }; // WebChannel supports sending the first message with the handshake - saving
          // a network round trip. However, it will have to call send in the same
          // JS event loop as open. In order to enforce this, we delay actually
          // opening the WebChannel until send is called. Whether we have called
          // open is tracked with this variable.
          // Closure events are guarded and exceptions are swallowed, so catch any
          // exception and rethrow using a setTimeout so they become visible again.
          // Note that eventually this function could go away if we are confident
          // enough the code is exception free.


          return y(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.OPEN, function () {
            d || T("Connection", "WebChannel transport opened.");
          }), y(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.CLOSE, function () {
            d || (d = !0, T("Connection", "WebChannel transport closed"), v.Pl());
          }), y(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.ERROR, function (t) {
            d || (d = !0, A("Connection", "WebChannel transport errored:", t), v.Pl(new I(b.UNAVAILABLE, "The operation could not be completed")));
          }), y(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_4__["WebChannel"].EventType.MESSAGE, function (t) {
            var e;

            if (!d) {
              var n = t.data[0];
              x(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
              // (and only errors) to be wrapped in an extra array. To be forward
              // compatible with the bug we need to check either condition. The latter
              // can be removed once the fix has been rolled out.
              // Use any because msgData.error is not typed.

              var r = n,
                  i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

              if (i) {
                T("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.

                var o = i.status,
                    s = function (t) {
                  // lookup by string
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  var e = at[t];
                  if (void 0 !== e) return pt(e);
                }(o),
                    a = i.message;

                void 0 === s && (s = b.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
                d = !0, v.Pl(new I(s, a)), u.close();
              } else T("Connection", "WebChannel received:", n), v.gl(n);
            }
          }), setTimeout(function () {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            v.Rl();
          }, 0), v;
        }, n;
      }(
      /** @class */
      function () {
        function t(t) {
          this.yl = t, this._ = t._;
          var e = t.ssl ? "https" : "http";
          this.Vl = e + "://" + t.host, this.pl = "projects/" + this._.projectId + "/databases/" + this._.database + "/documents";
        }

        return t.prototype.Sc = function (t, e, n, r) {
          var i = this.bl(t, e);
          T("RestConnection", "Sending: ", i, n);
          var o = {};
          return this.vl(o, r), this.Sl(t, i, o, n).then(function (t) {
            return T("RestConnection", "Received: ", t), t;
          }, function (e) {
            throw A("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e;
          });
        }, t.prototype.Dc = function (t, e, n, r) {
          // The REST API automatically aggregates all of the streamed results, so we
          // can just use the normal invoke() method.
          return this.Sc(t, e, n, r);
        },
        /**
         * Modifies the headers for a request, adding any authorization token if
         * present and any additional headers for the request.
         */
        t.prototype.vl = function (t, e) {
          if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.0.1", // Content-Type: text/plain will avoid preflight requests which might
          // mess with CORS and redirects by proxies. If we add custom headers
          // we will need to change this code to potentially use the $httpOverwrite
          // parameter supported by ESF to avoid triggering preflight requests.
          t["Content-Type"] = "text/plain", e) for (var n in e.si) {
            e.si.hasOwnProperty(n) && (t[n] = e.si[n]);
          }
        }, t.prototype.bl = function (t, e) {
          var n = Zu[t];
          return this.Vl + "/v1/" + e + ":" + n;
        }, t;
      }()),
          ts =
      /** @class */
      function () {
        function t() {
          var t = this;
          this.Dl = function () {
            return t.Cl();
          }, this.Nl = function () {
            return t.xl();
          }, this.Fl = [], this.Ol();
        }

        return t.prototype.zc = function (t) {
          this.Fl.push(t);
        }, t.prototype.ga = function () {
          window.removeEventListener("online", this.Dl), window.removeEventListener("offline", this.Nl);
        }, t.prototype.Ol = function () {
          window.addEventListener("online", this.Dl), window.addEventListener("offline", this.Nl);
        }, t.prototype.Cl = function () {
          T("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

          for (var t = 0, e = this.Fl; t < e.length; t++) {
            (0, e[t])(0
            /* AVAILABLE */
            );
          }
        }, t.prototype.xl = function () {
          T("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

          for (var t = 0, e = this.Fl; t < e.length; t++) {
            (0, e[t])(1
            /* UNAVAILABLE */
            );
          }
        }, // TODO(chenbrian): Consider passing in window either into this component or
        // here for testing via FakeWindow.

        /** Checks that all used attributes of window are available. */
        t.Ln = function () {
          return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
        }, t;
      }(),
          es =
      /** @class */
      function () {
        function t() {}

        return t.prototype.zc = function (t) {// No-op.
        }, t.prototype.ga = function () {// No-op.
        }, t;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Initializes the WebChannelConnection for the browser. */

      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function ns(t) {
        return new ce(t,
        /* useProto3Json= */
        !0);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provides all components needed for Firestore with in-memory persistence.
       * Uses EagerGC garbage collection.
       */


      var rs =
      /** @class */
      function () {
        function t() {
          this.synchronizeTabs = !1;
        }

        return t.prototype.initialize = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.Sh = this.kl(t), this.persistence = this.Ml(t), [4
                  /*yield*/
                  , this.persistence.start()];

                case 1:
                  return e.sent(), this.$l = this.Ll(t), this.Bc = this.Bl(t), [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.Ll = function (t) {
          return null;
        }, t.prototype.Bl = function (t) {
          /** Manages our in-memory or durable persistence. */
          return e = this.persistence, n = new zu(), r = t.ql, new io(e, n, r);
          var e, n, r;
        }, t.prototype.Ml = function (t) {
          return new Hu(Ju.fl);
        }, t.prototype.kl = function (t) {
          return new uu();
        }, t.prototype.terminate = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.$l && this.$l.stop(), [4
                  /*yield*/
                  , this.Sh.ga()];

                case 1:
                  return t.sent(), [4
                  /*yield*/
                  , this.persistence.ga()];

                case 2:
                  return t.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }, t;
      }(),
          is =
      /** @class */
      function (r) {
        function i(t, e, n) {
          var i = this;
          return (i = r.call(this) || this).Ul = t, i.cacheSizeBytes = e, i.forceOwnership = n, i.synchronizeTabs = !1, i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), i.prototype.initialize = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4
                  /*yield*/
                  , r.prototype.initialize.call(this, t)];

                case 1:
                  return e.sent(), [4
                  /*yield*/
                  , yo(this.Bc)];

                case 2:
                  return e.sent(), [4
                  /*yield*/
                  , this.Ul.initialize(this, t)];

                case 3:
                  // Enqueue writes from a previous session
                  return e.sent(), [4
                  /*yield*/
                  , ju(this.Ul.mu)];

                case 4:
                  // Enqueue writes from a previous session
                  return e.sent(), [4
                  /*yield*/
                  , Mo(this.Ul.ph)];

                case 5:
                  return e.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }, i.prototype.Ll = function (t) {
          var e = this.persistence.qr.gr;
          return new Jr(e, t.cs);
        }, i.prototype.Ml = function (t) {
          var e = ro(t.yl._, t.yl.persistenceKey),
              n = void 0 !== this.cacheSizeBytes ? Yr.Ir(this.cacheSizeBytes) : Yr.Rr,
              r = ns(t.yl._);
          return new Zi(this.synchronizeTabs, e, t.clientId, n, t.cs, wr(), br(), r, this.Sh, !!this.forceOwnership);
        }, i.prototype.kl = function (t) {
          return new uu();
        }, i;
      }(rs),
          os =
      /** @class */
      function (r) {
        function i(t, e) {
          var n = this;
          return (n = r.call(this, t, e,
          /* forceOwnership= */
          !1) || this).Ul = t, n.cacheSizeBytes = e, n.synchronizeTabs = !0, n;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), i.prototype.initialize = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var i,
                o = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
              switch (u.label) {
                case 0:
                  return [4
                  /*yield*/
                  , r.prototype.initialize.call(this, t)];

                case 1:
                  return u.sent(), i = this.Ul.mu, this.Sh instanceof ou ? (this.Sh.mu = {
                    sh: Vu.bind(null, i),
                    ih: Mu.bind(null, i),
                    rh: Fu.bind(null, i),
                    va: qu.bind(null, i)
                  }, [4
                  /*yield*/
                  , this.Sh.start()]) : [3
                  /*break*/
                  , 3];

                case 2:
                  u.sent(), u.label = 3;

                case 3:
                  // NOTE: This will immediately call the listener, so we make sure to
                  // set it after localStore / remoteStore are started.
                  return [4
                  /*yield*/
                  , this.persistence.ua(function (t) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4
                            /*yield*/
                            , Ru(this.Ul.mu, t)];

                          case 1:
                            return e.sent(), this.$l && (t && !this.$l.br ? this.$l.start(this.Bc) : t || this.$l.stop()), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  })];

                case 4:
                  // NOTE: This will immediately call the listener, so we make sure to
                  // set it after localStore / remoteStore are started.
                  return u.sent(), [2
                  /*return*/
                  ];
              }
            });
          });
        }, i.prototype.kl = function (t) {
          var e = wr();
          if (!ou.Ln(e)) throw new I(b.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
          var n = ro(t.yl._, t.yl.persistenceKey);
          return new ou(e, t.cs, n, t.clientId, t.ql);
        }, i;
      }(is),
          us =
      /** @class */
      function () {
        function t() {}

        return t.prototype.initialize = function (t, r) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.Bc ? [3
                  /*break*/
                  , 2] : (this.Bc = t.Bc, this.Sh = t.Sh, this.qc = this.Kl(r), this.ph = this.Ql(r), this.bh = this.Wl(r), this.mu = this.jl(r,
                  /* startAsPrimary=*/
                  !t.synchronizeTabs), this.Sh.Cc = function (t) {
                    return gu(e.mu, t, 1
                    /* SharedClientState */
                    );
                  }, this.ph.Uc.Gl = Ou.bind(null, this.mu), [4
                  /*yield*/
                  , Qo(this.ph, this.mu.Uh)]);

                case 1:
                  n.sent(), n.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.Wl = function (t) {
          return new Nr();
        }, t.prototype.Kl = function (t) {
          var e,
              n = ns(t.yl._),
              r = (e = t.yl, new $u(e));
          /** Return the Platform-specific connectivity monitor. */

          return function (t, e, n) {
            return new Io(t, e, n);
          }(t.credentials, r, n);
        }, t.prototype.Ql = function (t) {
          var e,
              n,
              r,
              i,
              o,
              u = this;
          return e = this.Bc, n = this.qc, r = t.cs, i = function i(t) {
            return gu(u.mu, t, 0
            /* RemoteStore */
            );
          }, o = ts.Ln() ? new ts() : new es(), new _o(e, n, r, i, o);
        }, t.prototype.jl = function (t, e) {
          return function (t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
          r, i, o, u) {
            var s = new lu(t, e, n, r, i, o);
            return u && (s.qh = !0), s;
          }(this.Bc, this.ph, this.bh, this.Sh, t.ql, t.Dh, e);
        }, t.prototype.terminate = function () {
          return function (t) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = k(t), T("RemoteStore", "RemoteStore shutting down."), e.Wc.add(5
                    /* Shutdown */
                    ), [4
                    /*yield*/
                    , No(e)];

                  case 1:
                    return n.sent(), e.Gc.ga(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    e.Hc.set("Unknown"
                    /* Unknown */
                    ), [2
                    /*return*/
                    ];
                }
              });
            });
          }(this.ph);
        }, t;
      }(),
          ss =
      /** @class */
      function () {
        function t(t) {
          this.observer = t,
          /**
               * When set to true, will not raise future events. Necessary to deal with
               * async detachment of listener.
               */
          this.muted = !1;
        }

        return t.prototype.next = function (t) {
          this.observer.next && this.zl(this.observer.next, t);
        }, t.prototype.error = function (t) {
          this.observer.error ? this.zl(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
        }, t.prototype.Hl = function () {
          this.muted = !0;
        }, t.prototype.zl = function (t, e) {
          var n = this;
          this.muted || setTimeout(function () {
            n.muted || t(e);
          }, 0);
        }, t;
      }();
      /**
       * Provides all components needed for Firestore with IndexedDB persistence.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function as(t, e, n) {
        if (!n) throw new I(b.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
      }

      function cs(t, e) {
        if (void 0 === e) return {
          merge: !1
        };
        if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new I(b.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
        return e;
      }
      /**
       * Validates that two boolean options are not set at the same time.
       */


      function hs(t, e, n, r) {
        if (!0 === e && !0 === r) throw new I(b.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
      }
      /**
       * Returns true if it's a non-null object without a custom prototype
       * (i.e. excludes Array, Date, etc.).
       */

      /** Returns a string describing the type / value of the provided input. */


      function fs(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
        if ("number" == typeof t || "boolean" == typeof t) return "" + t;

        if ("object" == typeof t) {
          if (t instanceof Array) return "an array";

          var e =
          /** Hacky method to try to get the constructor name for an object. */
          function (t) {
            if (t.constructor) {
              var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
              if (e && e.length > 1) return e[1];
            }

            return null;
          }(t);

          return e ? "a custom " + e + " object" : "an object";
        }

        return "function" == typeof t ? "a function" : S();
      }

      function ls(t, e) {
        if (e <= 0) throw new I(b.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // The objects that are a part of this API are exposed to third-parties as
      // compiled javascript so we want to flag our private members with a leading
      // underscore to discourage their use.

      /**
       * A field class base class that is shared by the lite, full and legacy SDK,
       * which supports shared code that deals with FieldPaths.
       */
      // Use underscore prefix to hide this class from our Public API.
      // eslint-disable-next-line @typescript-eslint/naming-convention


      var ps = function ps(t) {
        for (var e = 0; e < t.length; ++e) {
          if (0 === t[e].length) throw new I(b.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        }

        this.Yl = new Z(t);
      },
          ds =
      /** @class */
      function (e) {
        /**
         * Creates a FieldPath from the provided field names. If more than one field
         * name is provided, the path will point to a nested field in a document.
         *
         * @param fieldNames A list of field names.
         */
        function n() {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n];
          }

          return e.call(this, t) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.documentId = function () {
          /**
           * Internal Note: The backend doesn't technically support querying by
           * document ID. Instead it queries by the entire document name (full path
           * included), but in the cases we currently support documentId(), the net
           * effect is the same.
           */
          return new n(Z.j().B());
        }, n.prototype.isEqual = function (t) {
          return t instanceof n && this.Yl.isEqual(t.Yl);
        }, n;
      }(ps),
          vs = new RegExp("[~\\*/\\[\\]]"),
          ys =
      /**
           * @param _methodName The public API endpoint that returns this class.
           */
      function ys(t) {
        this.Jl = t;
      },
          ms =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Xl = function (t) {
          if (2
          /* MergeSet */
          !== t.Zl) throw 1
          /* Update */
          === t.Zl ? t.t_(this.Jl + "() can only appear at the top level of your update data") : t.t_(this.Jl + "() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
          // fieldMask so it gets deleted.

          return t.Qe.push(t.path), null;
        }, n.prototype.isEqual = function (t) {
          return t instanceof n;
        }, n;
      }(ys);
      /**
       * A `FieldPath` refers to a field in a document. The path may consist of a
       * single field name (referring to a top-level field in the document), or a list
       * of field names (referring to a nested field in the document).
       */

      /**
       * Creates a child context for parsing SerializableFieldValues.
       *
       * This is different than calling `ParseContext.contextWith` because it keeps
       * the fieldTransforms and fieldMask separate.
       *
       * The created context has its `dataSource` set to `UserDataSource.Argument`.
       * Although these values are used with writes, any elements in these FieldValues
       * are not considered writes since they cannot contain any FieldValue sentinels,
       * etc.
       *
       * @param fieldValue The sentinel FieldValue for which to create a child
       *     context.
       * @param context The parent context.
       * @param arrayElement Whether or not the FieldValue has an array.
       */


      function gs(t, e, n) {
        return new ks({
          Zl: 3
          /* Argument */
          ,
          e_: e.settings.e_,
          methodName: t.Jl,
          n_: n
        }, e._, e.serializer, e.ignoreUndefinedProperties);
      }

      var ws =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Xl = function (t) {
          return new en(t.path, new Qe());
        }, n.prototype.isEqual = function (t) {
          return t instanceof n;
        }, n;
      }(ys),
          bs =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t) || this).s_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Xl = function (t) {
          var e = gs(this, t,
          /*array=*/
          !0),
              n = this.s_.map(function (t) {
            return Us(t, e);
          }),
              r = new We(n);
          return new en(t.path, r);
        }, n.prototype.isEqual = function (t) {
          // TODO(mrschmidt): Implement isEquals
          return this === t;
        }, n;
      }(ys),
          Is =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t) || this).s_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Xl = function (t) {
          var e = gs(this, t,
          /*array=*/
          !0),
              n = this.s_.map(function (t) {
            return Us(t, e);
          }),
              r = new Ye(n);
          return new en(t.path, r);
        }, n.prototype.isEqual = function (t) {
          // TODO(mrschmidt): Implement isEquals
          return this === t;
        }, n;
      }(ys),
          Es =
      /** @class */
      function (e) {
        function n(t, n) {
          var r = this;
          return (r = e.call(this, t) || this).i_ = n, r;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.Xl = function (t) {
          var e = new Xe(t.serializer, le(t.serializer, this.i_));
          return new en(t.path, e);
        }, n.prototype.isEqual = function (t) {
          // TODO(mrschmidt): Implement isEquals
          return this === t;
        }, n;
      }(ys),
          _s =
      /** @class */
      function () {
        /**
         * Creates a new immutable `GeoPoint` object with the provided latitude and
         * longitude values.
         * @param latitude The latitude as number between -90 and 90.
         * @param longitude The longitude as number between -180 and 180.
         */
        function t(t, e) {
          if (!isFinite(t) || t < -90 || t > 90) throw new I(b.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
          if (!isFinite(e) || e < -180 || e > 180) throw new I(b.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
          this.r_ = t, this.o_ = e;
        }

        return Object.defineProperty(t.prototype, "latitude", {
          /**
           * The latitude of this `GeoPoint` instance.
           */
          get: function get() {
            return this.r_;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "longitude", {
          /**
           * The longitude of this `GeoPoint` instance.
           */
          get: function get() {
            return this.o_;
          },
          enumerable: !1,
          configurable: !0
        }),
        /**
         * Returns true if this `GeoPoint` is equal to the provided one.
         *
         * @param other The `GeoPoint` to compare against.
         * @return true if this `GeoPoint` is equal to the provided one.
         */
        t.prototype.isEqual = function (t) {
          return this.r_ === t.r_ && this.o_ === t.o_;
        }, t.prototype.toJSON = function () {
          return {
            latitude: this.r_,
            longitude: this.o_
          };
        },
        /**
         * Actually private to JS consumers of our API, so this function is prefixed
         * with an underscore.
         */
        t.prototype.g = function (t) {
          return L(this.r_, t.r_) || L(this.o_, t.o_);
        }, t;
      }(),
          Ts = function Ts(t) {
        this.a_ = t;
      },
          Ns = /^__.*__$/,
          As = function As(t, e, n) {
        this.c_ = t, this.u_ = e, this.h_ = n;
      },
          Ds =
      /** @class */
      function () {
        function t(t, e, n) {
          this.data = t, this.Qe = e, this.fieldTransforms = n;
        }

        return t.prototype.l_ = function (t, e) {
          var n = [];
          return null !== this.Qe ? n.push(new pn(t, this.data, this.Qe, e)) : n.push(new ln(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new vn(t, this.fieldTransforms)), n;
        }, t;
      }(),
          Ss =
      /** @class */
      function () {
        function t(t, e, n) {
          this.data = t, this.Qe = e, this.fieldTransforms = n;
        }

        return t.prototype.l_ = function (t, e) {
          var n = [new pn(t, this.data, this.Qe, e)];
          return this.fieldTransforms.length > 0 && n.push(new vn(t, this.fieldTransforms)), n;
        }, t;
      }();

      function xs(t) {
        switch (t) {
          case 0
          /* Set */
          : // fall through

          case 2
          /* MergeSet */
          : // fall through

          case 1
          /* Update */
          :
            return !0;

          case 3
          /* Argument */
          :
          case 4
          /* ArrayArgument */
          :
            return !1;

          default:
            throw S();
        }
      }
      /** A "context" object passed around while parsing user data. */


      var ks =
      /** @class */
      function () {
        /**
         * Initializes a ParseContext with the given source and path.
         *
         * @param settings The settings for the parser.
         * @param databaseId The database ID of the Firestore instance.
         * @param serializer The serializer to use to generate the Value proto.
         * @param ignoreUndefinedProperties Whether to ignore undefined properties
         * rather than throw.
         * @param fieldTransforms A mutable list of field transforms encountered while
         *     parsing the data.
         * @param fieldMask A mutable list of field paths encountered while parsing
         *     the data.
         *
         * TODO(b/34871131): We don't support array paths right now, so path can be
         * null to indicate the context represents any location within an array (in
         * which case certain features will not work and errors will be somewhat
         * compromised).
         */
        function t(t, e, n, r, i, o) {
          this.settings = t, this._ = e, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
          // external call and we need to validate the entire path.
          void 0 === i && this.__(), this.fieldTransforms = i || [], this.Qe = o || [];
        }

        return Object.defineProperty(t.prototype, "path", {
          get: function get() {
            return this.settings.path;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "Zl", {
          get: function get() {
            return this.settings.Zl;
          },
          enumerable: !1,
          configurable: !0
        }),
        /** Returns a new context with the specified settings overwritten. */
        t.prototype.f_ = function (e) {
          return new t(Object.assign(Object.assign({}, this.settings), e), this._, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Qe);
        }, t.prototype.d_ = function (t) {
          var e,
              n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.f_({
            path: n,
            n_: !1
          });
          return r.w_(t), r;
        }, t.prototype.E_ = function (t) {
          var e,
              n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.f_({
            path: n,
            n_: !1
          });
          return r.__(), r;
        }, t.prototype.T_ = function (t) {
          // TODO(b/34871131): We don't support array paths right now; so make path
          // undefined.
          return this.f_({
            path: void 0,
            n_: !0
          });
        }, t.prototype.t_ = function (t) {
          return js(t, this.settings.methodName, this.settings.I_ || !1, this.path, this.settings.e_);
        },
        /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
        t.prototype.contains = function (t) {
          return void 0 !== this.Qe.find(function (e) {
            return t.M(e);
          }) || void 0 !== this.fieldTransforms.find(function (e) {
            return t.M(e.field);
          });
        }, t.prototype.__ = function () {
          // TODO(b/34871131): Remove null check once we have proper paths for fields
          // within arrays.
          if (this.path) for (var t = 0; t < this.path.length; t++) {
            this.w_(this.path.get(t));
          }
        }, t.prototype.w_ = function (t) {
          if (0 === t.length) throw this.t_("Document fields must not be empty");
          if (xs(this.Zl) && Ns.test(t)) throw this.t_('Document fields cannot begin and end with "__"');
        }, t;
      }(),
          Os =
      /** @class */
      function () {
        function t(t, e, n) {
          this._ = t, this.ignoreUndefinedProperties = e, this.serializer = n || ns(t)
          /** Creates a new top-level parse context. */
          ;
        }

        return t.prototype.m_ = function (t, e, n, r) {
          return void 0 === r && (r = !1), new ks({
            Zl: t,
            methodName: e,
            e_: n,
            path: Z.U(),
            n_: !1,
            I_: r
          }, this._, this.serializer, this.ignoreUndefinedProperties);
        }, t;
      }();
      /**
       * Helper for parsing raw user input (provided via the API) into internal model
       * classes.
       */

      /** Parse document data from a set() call. */


      function Ps(t, e, n, r, i, o) {
        void 0 === o && (o = {});
        var u = t.m_(o.merge || o.mergeFields ? 2
        /* MergeSet */
        : 0
        /* Set */
        , e, n, i);
        Ms("Data must be an object, but it was:", u, r);
        var s,
            a,
            c = Cs(r, u);
        if (o.merge) s = new tn(u.Qe), a = u.fieldTransforms;else if (o.mergeFields) {
          for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var p = l[f],
                d = void 0;
            if (p instanceof ps) d = p.Yl;else {
              if ("string" != typeof p) throw S();
              d = Bs(e, p, n);
            }
            if (!u.contains(d)) throw new I(b.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
            zs(h, d) || h.push(d);
          }

          s = new tn(h), a = u.fieldTransforms.filter(function (t) {
            return s.Ye(t.field);
          });
        } else s = null, a = u.fieldTransforms;
        return new Ds(new bn(c), s, a);
      }
      /** Parse update data from an update() call. */


      function Ls(t, e, n, r) {
        var i = t.m_(1
        /* Update */
        , e, n);
        Ms("Data must be an object, but it was:", i, r);
        var o = [],
            u = new In();
        G(r, function (t, r) {
          var s = Bs(e, t, n),
              a = i.E_(s);
          if (r instanceof ms || r instanceof Ts && r.a_ instanceof ms) // Add it to the field mask, but don't add anything to updateData.
            o.push(s);else {
            var c = Us(r, a);
            null != c && (o.push(s), u.set(s, c));
          }
        });
        var s = new tn(o);
        return new Ss(u.Xe(), s, i.fieldTransforms);
      }
      /** Parse update data from a list of field/value arguments. */


      function Vs(t, e, n, r, i, o) {
        var u = t.m_(1
        /* Update */
        , e, n),
            s = [Fs(e, r, n)],
            a = [i];
        if (o.length % 2 != 0) throw new I(b.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");

        for (var c = 0; c < o.length; c += 2) {
          s.push(Fs(e, o[c])), a.push(o[c + 1]);
        } // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.


        for (var h = [], f = new In(), l = s.length - 1; l >= 0; --l) {
          if (!zs(h, s[l])) {
            var p = s[l],
                d = a[l],
                v = u.E_(p);
            if (d instanceof ms || d instanceof Ts && d.a_ instanceof ms) // Add it to the field mask, but don't add anything to updateData.
              h.push(p);else {
              var y = Us(d, v);
              null != y && (h.push(p), f.set(p, y));
            }
          }
        }

        var m = new tn(h);
        return new Ss(f.Xe(), m, u.fieldTransforms);
      }
      /**
       * Parse a "query value" (e.g. value in a where filter or a value in a cursor
       * bound).
       *
       * @param allowArrays Whether the query value is an array that may directly
       * contain additional arrays (e.g. the operand of an `in` query).
       */


      function Rs(t, e, n, r) {
        return void 0 === r && (r = !1), Us(n, t.m_(r ? 4
        /* ArrayArgument */
        : 3
        /* Argument */
        , e));
      }
      /**
       * Parses user data to Protobuf Values.
       *
       * @param input Data to be parsed.
       * @param context A context object representing the current path being parsed,
       * the source of the data being parsed, etc.
       * @return The parsed value, or null if the value was a FieldValue sentinel
       * that should not be included in the resulting parsed data.
       */


      function Us(t, e) {
        if ( // Unwrap the API type from the Compat SDK. This will return the API type
        // from firestore-exp.
        t instanceof Ts && (t = t.a_), qs(t)) return Ms("Unsupported field value:", e, t), Cs(t, e);
        if (t instanceof ys) // FieldValues usually parse into transforms (except FieldValue.delete())
          // in which case we do not want to include this field in our parsed data
          // (as doing so will overwrite the field directly prior to the transform
          // trying to transform it). So we don't add this location to
          // context.fieldMask and we return null as our parsing result.

          /**
           * "Parses" the provided FieldValueImpl, adding any necessary transforms to
           * context.fieldTransforms.
           */
          return function (t, e) {
            // Sentinels are only supported with writes, and not within arrays.
            if (!xs(e.Zl)) throw e.t_(t.Jl + "() can only be used with update() and set()");
            if (!e.path) throw e.t_(t.Jl + "() is not currently supported inside arrays");
            var n = t.Xl(e);
            n && e.fieldTransforms.push(n);
          }(t, e), null;

        if ( // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        e.path && e.Qe.push(e.path), t instanceof Array) {
          // TODO(b/34871131): Include the path containing the array in the error
          // message.
          // In the case of IN queries, the parsed data is an array (representing
          // the set of values to be included for the IN query) that may directly
          // contain additional arrays (each representing an individual field
          // value), so we disable this validation.
          if (e.settings.n_ && 4
          /* ArrayArgument */
          !== e.Zl) throw e.t_("Nested arrays are not supported");
          return function (t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
              var u = Us(o[i], e.T_(r));
              null == u && ( // Just include nulls in the array for fields being replaced with a
              // sentinel.
              u = {
                nullValue: "NULL_VALUE"
              }), n.push(u), r++;
            }

            return {
              arrayValue: {
                values: n
              }
            };
          }(t, e);
        }

        return function (t, e) {
          if (null === t) return {
            nullValue: "NULL_VALUE"
          };
          if ("number" == typeof t) return le(e.serializer, t);
          if ("boolean" == typeof t) return {
            booleanValue: t
          };
          if ("string" == typeof t) return {
            stringValue: t
          };

          if (t instanceof Date) {
            var n = W.fromDate(t);
            return {
              timestampValue: pe(e.serializer, n)
            };
          }

          if (t instanceof W) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new W(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
              timestampValue: pe(e.serializer, r)
            };
          }

          if (t instanceof _s) return {
            geoPointValue: {
              latitude: t.latitude,
              longitude: t.longitude
            }
          };
          if (t instanceof C) return {
            bytesValue: de(e.serializer, t.l)
          };

          if (t instanceof As) {
            var i = e._,
                o = t.c_;
            if (!o.isEqual(i)) throw e.t_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
              referenceValue: me(t.c_ || e._, t.u_.path)
            };
          }

          if (void 0 === t && e.ignoreUndefinedProperties) return null;
          throw e.t_("Unsupported field value: " + fs(t));
        }(t, e);
      }

      function Cs(t, e) {
        var n = {};
        return K(t) ? // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        e.path && e.path.length > 0 && e.Qe.push(e.path) : G(t, function (t, r) {
          var i = Us(r, e.d_(t));
          null != i && (n[t] = i);
        }), {
          mapValue: {
            fields: n
          }
        };
      }

      function qs(t) {
        return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof W || t instanceof _s || t instanceof C || t instanceof As || t instanceof ys);
      }

      function Ms(t, e, n) {
        if (!qs(n) || !function (t) {
          return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
        }(n)) {
          var r = fs(n);
          throw "an object" === r ? e.t_(t + " a custom object") : e.t_(t + " " + r);
        }
      }
      /**
       * Helper that calls fromDotSeparatedString() but wraps any error thrown.
       */


      function Fs(t, e, n) {
        if (e instanceof ps) return e.Yl;
        if ("string" == typeof e) return Bs(t, e);
        throw js("Field path arguments must be of type string or FieldPath.", t,
        /* hasConverter= */
        !1,
        /* path= */
        void 0, n);
      }
      /**
       * Wraps fromDotSeparatedString with an error message about the method that
       * was thrown.
       * @param methodName The publicly visible method name
       * @param path The dot-separated string form of a field path which will be split
       * on dots.
       * @param targetDoc The document against which the field path will be evaluated.
       */


      function Bs(t, e, n) {
        try {
          return function (t) {
            if (t.search(vs) >= 0) throw new I(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");

            try {
              return new (ds.bind.apply(ds, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([void 0], t.split("."))))();
            } catch (e) {
              throw new I(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
          }(e).Yl;
        } catch (e) {
          throw js((i = e) instanceof Error ? i.message : i.toString(), t,
          /* hasConverter= */
          !1,
          /* path= */
          void 0, n);
        }
        /**
        * Extracts the message from a caught exception, which should be an Error object
        * though JS doesn't guarantee that.
        */


        var i;
        /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
      }

      function js(t, e, n, r, i) {
        var o = r && !r.P(),
            u = void 0 !== i,
            s = "Function " + e + "() called with invalid data";
        n && (s += " (via `toFirestore()`)");
        var a = "";
        return (o || u) && (a += " (found", o && (a += " in field " + r), u && (a += " in document " + i), a += ")"), new I(b.INVALID_ARGUMENT, (s += ". ") + t + a);
      }

      function zs(t, e) {
        return t.some(function (t) {
          return t.isEqual(e);
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Internal transaction object responsible for accumulating the mutations to
       * perform and the base versions for any documents read.
       */


      var Gs =
      /** @class */
      function () {
        function t(t) {
          this.qc = t, // The version of each document that was read during this transaction.
          this.A_ = new Map(), this.mutations = [], this.R_ = !1,
          /**
               * A deferred usage error that occurred previously in this transaction that
               * will cause the transaction to fail once it actually commits.
               */
          this.P_ = null,
          /**
               * Set of documents that have been written in the transaction.
               *
               * When there's more than one write to the same key in a transaction, any
               * writes after the first are handled differently.
               */
          this.g_ = new Set();
        }

        return t.prototype.y_ = function (t) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var r,
                i = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
              switch (o.label) {
                case 0:
                  if (this.V_(), this.mutations.length > 0) throw new I(b.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                  return [4
                  /*yield*/
                  , function (t, r) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e, i, o, u, s, a;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e = k(t), i = _e(e.serializer) + "/documents", o = {
                              documents: r.map(function (t) {
                                return we(e.serializer, t);
                              })
                            }, [4
                            /*yield*/
                            , e.Dc("BatchGetDocuments", i, o)];

                          case 1:
                            return u = n.sent(), s = new Map(), u.forEach(function (t) {
                              var n = function (t, e) {
                                return "found" in e ? function (t, e) {
                                  x(!!e.found), e.found.name, e.found.updateTime;
                                  var n = be(t, e.found.name),
                                      r = ye(e.found.updateTime),
                                      i = new bn({
                                    mapValue: {
                                      fields: e.found.fields
                                    }
                                  });
                                  return new Tn(n, r, i, {});
                                }(t, e) : "missing" in e ? function (t, e) {
                                  x(!!e.missing), x(!!e.readTime);
                                  var n = be(t, e.missing),
                                      r = ye(e.readTime);
                                  return new Nn(n, r);
                                }(t, e) : S();
                              }(e.serializer, t);

                              s.set(n.key.toString(), n);
                            }), a = [], [2
                            /*return*/
                            , (r.forEach(function (t) {
                              var e = s.get(t.toString());
                              x(!!e), a.push(e);
                            }), a)];
                        }
                      });
                    });
                  }(this.qc, t)];

                case 1:
                  return [2
                  /*return*/
                  , ((r = o.sent()).forEach(function (t) {
                    t instanceof Nn || t instanceof Tn ? i.p_(t) : S();
                  }), r)];
              }
            });
          });
        }, t.prototype.set = function (t, e) {
          this.write(e.l_(t, this.Ge(t))), this.g_.add(t.toString());
        }, t.prototype.update = function (t, e) {
          try {
            this.write(e.l_(t, this.b_(t)));
          } catch (t) {
            this.P_ = t;
          }

          this.g_.add(t.toString());
        }, t.prototype["delete"] = function (t) {
          this.write([new gn(t, this.Ge(t))]), this.g_.add(t.toString());
        }, t.prototype.commit = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var t,
                r = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
              switch (i.label) {
                case 0:
                  if (this.V_(), this.P_) throw this.P_;
                  return t = this.A_, // For each mutation, note that the doc was written.
                  this.mutations.forEach(function (e) {
                    t["delete"](e.key.toString());
                  }), // For each document that was read but not written to, we want to perform
                  // a `verify` operation.
                  t.forEach(function (t, e) {
                    var n = $.H(e);
                    r.mutations.push(new wn(n, r.Ge(n)));
                  }), [4
                  /*yield*/
                  , function (t, r) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e, i, o;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return e = k(t), i = _e(e.serializer) + "/documents", o = {
                              writes: r.map(function (t) {
                                return Ae(e.serializer, t);
                              })
                            }, [4
                            /*yield*/
                            , e.Sc("Commit", i, o)];

                          case 1:
                            return n.sent(), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }(this.qc, this.mutations)];

                case 1:
                  // For each mutation, note that the doc was written.
                  return i.sent(), this.R_ = !0, [2
                  /*return*/
                  ];
              }
            });
          });
        }, t.prototype.p_ = function (t) {
          var e;
          if (t instanceof Tn) e = t.version;else {
            if (!(t instanceof Nn)) throw S(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

            e = H.min();
          }
          var n = this.A_.get(t.key.toString());

          if (n) {
            if (!e.isEqual(n)) // This transaction will fail no matter what.
              throw new I(b.ABORTED, "Document version changed between two reads.");
          } else this.A_.set(t.key.toString(), e);
        },
        /**
         * Returns the version of this document when it was read in this transaction,
         * as a precondition, or no precondition if it was not read.
         */
        t.prototype.Ge = function (t) {
          var e = this.A_.get(t.toString());
          return !this.g_.has(t.toString()) && e ? rn.updateTime(e) : rn.ze();
        },
        /**
         * Returns the precondition for a document if the operation is an update.
         */
        t.prototype.b_ = function (t) {
          var e = this.A_.get(t.toString()); // The first time a document is written, we want to take into account the
          // read time and existence

          if (!this.g_.has(t.toString()) && e) {
            if (e.isEqual(H.min())) // The document doesn't exist, so fail the transaction.
              // This has to be validated locally because you can't send a
              // precondition that a document does not exist without changing the
              // semantics of the backend write to be an insert. This is the reverse
              // of what we want, since we want to assert that the document doesn't
              // exist but then send the update and have it fail. Since we can't
              // express that to the backend, we have to validate locally.
              // Note: this can change once we can send separate verify writes in the
              // transaction.
              throw new I(b.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

            return rn.updateTime(e);
          } // Document was not read, so we just use the preconditions for a blind
          // update.


          return rn.exists(!0);
        }, t.prototype.write = function (t) {
          this.V_(), this.mutations = this.mutations.concat(t);
        }, t.prototype.V_ = function () {}, t;
      }(),
          Ks =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.cs = t, this.qc = e, this.updateFunction = n, this.ls = r, this.v_ = 5, this.ys = new ar(this.cs, "transaction_retry"
          /* TransactionRetry */
          )
          /** Runs the transaction and sets the result on deferred. */
          ;
        }

        return t.prototype.run = function () {
          this.S_();
        }, t.prototype.S_ = function () {
          var t = this;
          this.ys.Pn(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
              var t,
                  e,
                  r = this;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                return t = new Gs(this.qc), (e = this.D_(t)) && e.then(function (e) {
                  r.cs.ws(function () {
                    return t.commit().then(function () {
                      r.ls.resolve(e);
                    })["catch"](function (t) {
                      r.C_(t);
                    });
                  });
                })["catch"](function (t) {
                  r.C_(t);
                }), [2
                /*return*/
                ];
              });
            });
          });
        }, t.prototype.D_ = function (t) {
          try {
            var e = this.updateFunction(t);
            return !tt(e) && e["catch"] && e.then ? e : (this.ls.reject(Error("Transaction callback must return a Promise")), null);
          } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.ls.reject(t), null;
          }
        }, t.prototype.C_ = function (t) {
          var e = this;
          this.v_ > 0 && this.N_(t) ? (this.v_ -= 1, this.cs.ws(function () {
            return e.S_(), Promise.resolve();
          })) : this.ls.reject(t);
        }, t.prototype.N_ = function (t) {
          if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !lt(e);
          }

          return !1;
        }, t;
      }(),
          Qs =
      /** @class */
      function () {
        function t(t,
        /**
         * Asynchronous queue responsible for all of our internal processing. When
         * we get incoming work from the user (via public API) or the network
         * (incoming GRPC messages), we should always schedule onto this queue.
         * This ensures all of our work is properly serialized (e.g. we don't
         * start processing a new operation while the previous one is waiting for
         * an async I/O to complete).
         */
        e, n) {
          var r = this;
          this.credentials = t, this.cs = e, this.yl = n, this.user = Pr.UNAUTHENTICATED, this.clientId = P.t(), this.x_ = function () {}, this.ui = new sr(), this.credentials.oi(function (t) {
            T("FirestoreClient", "Received user=", t.uid), r.user.isEqual(t) || (r.user = t, r.x_(t)), r.ui.resolve();
          });
        }

        return t.prototype.getConfiguration = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.ui.promise];

                case 1:
                  return [2
                  /*return*/
                  , (t.sent(), {
                    cs: this.cs,
                    yl: this.yl,
                    clientId: this.clientId,
                    credentials: this.credentials,
                    ql: this.user,
                    Dh: 100
                  })];
              }
            });
          });
        }, t.prototype.F_ = function (t) {
          var e = this;
          this.x_ = t, // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.ui.promise.then(function () {
            return e.x_(e.user);
          });
        },
        /**
         * Checks that the client has not been terminated. Ensures that other methods on
         * this class cannot be called after the client is terminated.
         */
        t.prototype.O_ = function () {
          if (this.cs.ps) throw new I(b.FAILED_PRECONDITION, "The client has already been terminated.");
        }, t.prototype.terminate = function () {
          var t = this;
          this.cs.Ds();
          var r = new sr();
          return this.cs.bs(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
              var t, e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([0, 5,, 6]), this.k_ ? [4
                    /*yield*/
                    , this.k_.terminate()] : [3
                    /*break*/
                    , 2];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return this.M_ ? [4
                    /*yield*/
                    , this.M_.terminate()] : [3
                    /*break*/
                    , 4];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    // `removeChangeListener` must be called after shutting down the
                    // RemoteStore as it will prevent the RemoteStore from retrieving
                    // auth tokens.
                    return this.credentials.ai(), r.resolve(), [3
                    /*break*/
                    , 6];

                  case 5:
                    return t = n.sent(), e = _r(t, "Failed to shutdown persistence"), r.reject(e), [3
                    /*break*/
                    , 6];

                  case 6:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }), r.promise;
        }, t;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * TransactionRunner encapsulates the logic needed to run and retry transactions
       * with backoff.
       */


      function Ws(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var i,
              o = this;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
            switch (u.label) {
              case 0:
                return t.cs.Fs(), T("FirestoreClient", "Initializing OfflineComponentProvider"), [4
                /*yield*/
                , t.getConfiguration()];

              case 1:
                return i = u.sent(), [4
                /*yield*/
                , r.initialize(i)];

              case 2:
                return u.sent(), t.F_(function (i) {
                  return t.cs.Cs(function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4
                            /*yield*/
                            , oo(r.Bc, i)];

                          case 1:
                            return t.sent(), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  });
                }), // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                r.persistence.ha(function () {
                  return t.terminate();
                }), t.M_ = r, [2
                /*return*/
                ];
            }
          });
        });
      }

      function Hs(t, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var i, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
            switch (u.label) {
              case 0:
                return t.cs.Fs(), [4
                /*yield*/
                , Ys(t)];

              case 1:
                return i = u.sent(), T("FirestoreClient", "Initializing OnlineComponentProvider"), [4
                /*yield*/
                , t.getConfiguration()];

              case 2:
                return o = u.sent(), [4
                /*yield*/
                , r.initialize(i, o)];

              case 3:
                return u.sent(), // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.F_(function (i) {
                  return t.cs.Cs(function () {
                    return function (t, r) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var e, i;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (e = k(t)).cs.Fs(), T("RemoteStore", "RemoteStore received new credentials"), i = Po(e), // Tear down and re-create our network streams. This will ensure we get a
                              // fresh auth token for the new user and re-fill the write pipeline with
                              // new mutations from the LocalStore (since mutations are per-user).
                              e.Wc.add(3
                              /* CredentialChange */
                              ), [4
                              /*yield*/
                              , No(e)];

                            case 1:
                              return n.sent(), i && // Don't set the network status to Unknown if we are offline.
                              e.Hc.set("Unknown"
                              /* Unknown */
                              ), [4
                              /*yield*/
                              , e.Uc.Gl(r)];

                            case 2:
                              return n.sent(), e.Wc["delete"](3
                              /* CredentialChange */
                              ), [4
                              /*yield*/
                              , To(e)];

                            case 3:
                              // Tear down and re-create our network streams. This will ensure we get a
                              // fresh auth token for the new user and re-fill the write pipeline with
                              // new mutations from the LocalStore (since mutations are per-user).
                              return n.sent(), [2
                              /*return*/
                              ];
                          }
                        });
                      });
                    }(r.ph, i);
                  });
                }), t.k_ = r, [2
                /*return*/
                ];
            }
          });
        });
      }

      function Ys(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            switch (e.label) {
              case 0:
                return t.M_ ? [3
                /*break*/
                , 2] : (T("FirestoreClient", "Using default OfflineComponentProvider"), [4
                /*yield*/
                , Ws(t, new rs())]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [2
                /*return*/
                , t.M_];
            }
          });
        });
      }

      function Js(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            switch (e.label) {
              case 0:
                return t.k_ ? [3
                /*break*/
                , 2] : (T("FirestoreClient", "Using default OnlineComponentProvider"), [4
                /*yield*/
                , Hs(t, new us())]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [2
                /*return*/
                , t.k_];
            }
          });
        });
      }

      function Xs(t) {
        return Ys(t).then(function (t) {
          return t.persistence;
        });
      }

      function Zs(t) {
        return Ys(t).then(function (t) {
          return t.Bc;
        });
      }

      function $s(t) {
        return Js(t).then(function (t) {
          return t.ph;
        });
      }

      function ta(t) {
        return Js(t).then(function (t) {
          return t.mu;
        });
      }

      function ea(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e, r;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
            switch (n.label) {
              case 0:
                return [4
                /*yield*/
                , Js(t)];

              case 1:
                return e = n.sent(), [2
                /*return*/
                , ((r = e.bh).Us = pu.bind(null, e.mu), r.Ws = vu.bind(null, e.mu), r)];
            }
          });
        });
      }
      /** Enables the network connection and re-enqueues all pending operations. */

      /**
       * Returns a Promise that resolves when all writes that were pending at the time
       * this method was called received server acknowledgement. An acknowledgement
       * can be either acceptance or rejection.
       */


      function na(t, r, i, o) {
        var u = this,
            s = new ss(o),
            a = new Or(r, s, i);
        return t.cs.ws(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(u, void 0, void 0, function () {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return e = Ar, [4
                  /*yield*/
                  , ea(t)];

                case 1:
                  return [2
                  /*return*/
                  , e.apply(void 0, [n.sent(), a])];
              }
            });
          });
        }), function () {
          s.Hl(), t.cs.ws(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(u, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = Dr, [4
                    /*yield*/
                    , ea(t)];

                  case 1:
                    return [2
                    /*return*/
                    , e.apply(void 0, [n.sent(), a])];
                }
              });
            });
          });
        };
      }

      function ra(t, r) {
        var i = this,
            o = new sr();
        return t.cs.ws(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return e = yu, [4
                  /*yield*/
                  , ta(t)];

                case 1:
                  return [2
                  /*return*/
                  , e.apply(void 0, [n.sent(), r, o])];
              }
            });
          });
        }), o.promise;
      }

      function ia(t, r) {
        var i = this,
            o = new ss(r);
        return t.cs.ws(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return e = function e(t, _e2) {
                    k(t).qs.add(_e2), // Immediately fire an initial event, indicating all existing listeners
                    // are in-sync.
                    _e2.next();
                  }, [4
                  /*yield*/
                  , ea(t)];

                case 1:
                  return [2
                  /*return*/
                  , e.apply(void 0, [n.sent(), o])];
              }
            });
          });
        }), function () {
          o.Hl(), t.cs.ws(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
              var e;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = function e(t, _e3) {
                      k(t).qs["delete"](_e3);
                    }, [4
                    /*yield*/
                    , ea(t)];

                  case 1:
                    return [2
                    /*return*/
                    , e.apply(void 0, [n.sent(), o])];
                }
              });
            });
          });
        }
        /**
        * Takes an updateFunction in which a set of reads and writes can be performed
        * atomically. In the updateFunction, the client can read and write values
        * using the supplied transaction object. After the updateFunction, all
        * changes will be committed. If a retryable error occurs (ex: some other
        * client has changed any of the data referenced), then the updateFunction
        * will be called again after a backoff. If the updateFunction still fails
        * after all retries, then the transaction will be rejected.
        *
        * The transaction object passed to the updateFunction contains methods for
        * accessing documents and collections. Unlike other datastore access, data
        * accessed with the transaction will not reflect local changes that have not
        * been committed. For this reason, it is required that all reads are
        * performed before any writes. Transactions must be performed while online.
        */
        ;
      }

      function oa(t) {
        /**
        * Returns true if obj is an object and contains at least one of the specified
        * methods.
        */
        return function (t, e) {
          if ("object" != typeof t || null === t) return !1;

          for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
          }

          return !1;
        }(t);
      }

      var ua =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this._ = t, this.L_ = e, this.B_ = n, this.q_ = r;
        }

        return t.prototype.U_ = function (t) {
          switch (Kt(t)) {
            case 0
            /* NullValue */
            :
              return null;

            case 1
            /* BooleanValue */
            :
              return t.booleanValue;

            case 2
            /* NumberValue */
            :
              return $t(t.integerValue || t.doubleValue);

            case 3
            /* TimestampValue */
            :
              return this.K_(t.timestampValue);

            case 4
            /* ServerTimestampValue */
            :
              return this.Q_(t);

            case 5
            /* StringValue */
            :
              return t.stringValue;

            case 6
            /* BlobValue */
            :
              return this.q_(te(t.bytesValue));

            case 7
            /* RefValue */
            :
              return this.W_(t.referenceValue);

            case 8
            /* GeoPointValue */
            :
              return this.j_(t.geoPointValue);

            case 9
            /* ArrayValue */
            :
              return this.G_(t.arrayValue);

            case 10
            /* ObjectValue */
            :
              return this.z_(t.mapValue);

            default:
              throw S();
          }
        }, t.prototype.z_ = function (t) {
          var e = this,
              n = {};
          return G(t.fields || {}, function (t, r) {
            n[t] = e.U_(r);
          }), n;
        }, t.prototype.j_ = function (t) {
          return new _s($t(t.latitude), $t(t.longitude));
        }, t.prototype.G_ = function (t) {
          var e = this;
          return (t.values || []).map(function (t) {
            return e.U_(t);
          });
        }, t.prototype.Q_ = function (t) {
          switch (this.L_) {
            case "previous":
              var e = jt(t);
              return null == e ? null : this.U_(e);

            case "estimate":
              return this.K_(zt(t));

            default:
              return null;
          }
        }, t.prototype.K_ = function (t) {
          var e = Zt(t);
          return new W(e.seconds, e.nanos);
        }, t.prototype.W_ = function (t) {
          var e = J.q(t);
          x(Be(e));
          var n = new j(e.get(1), e.get(3)),
              r = new $(e.N(5));
          return n.isEqual(this._) || // TODO(b/64130202): Somehow support foreign references.
          N("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this._.projectId + "/" + this._.database + ") instead."), this.B_(r);
        }, t;
      }(),
          sa =
      /** @class */
      function () {
        function t(t) {
          var e;

          if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new I(b.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
          } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;

          if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new I(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
          }
          this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, hs("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
        }

        return t.prototype.isEqual = function (t) {
          return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
        }, t;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // settings() defaults:

      /**
       * A concrete type describing all the values that can be applied via a
       * user-supplied firestore.Settings object. This is a separate type so that
       * defaults can be supplied and the value can be checked for equality.
       */

      /**
       * Attempts to enable multi-tab persistent storage, if possible. If enabled
       * across all tabs, all operations share access to local persistence, including
       * shared execution of queries and latency-compensated local document updates
       * across all connected instances.
       *
       * If this fails, `enableMultiTabIndexedDbPersistence()` will reject the promise
       * it returns. Note that even after this failure, the `Firestore` instance will
       * remain usable, however offline persistence will be disabled.
       *
       * There are several reasons why this can fail, which can be identified by
       * the `code` on the error.
       *
       *   * failed-precondition: The app is already open in another browser tab and
       *     multi-tab is not enabled.
       *   * unimplemented: The browser is incompatible with the offline
       *     persistence implementation.
       *
       * @param firestore The `Firestore` instance to enable persistence for.
       * @return A promise that represents successfully enabling persistent
       * storage.
       */


      function aa(t) {
        fa(t);
        var e = ya(t),
            n = t.H_(),
            r = new us();
        return ca(e, r, new os(r, n.cacheSizeBytes));
      }
      /**
       * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
       * If the operation fails with a recoverable error (see
       * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
       * but the client remains usable.
       */


      function ca(t, r, i) {
        var o = this,
            u = new sr();
        return t.cs.enqueue(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
              switch (n.label) {
                case 0:
                  return n.trys.push([0, 3,, 4]), [4
                  /*yield*/
                  , Ws(t, i)];

                case 1:
                  return n.sent(), [4
                  /*yield*/
                  , Hs(t, r)];

                case 2:
                  return n.sent(), u.resolve(), [3
                  /*break*/
                  , 4];

                case 3:
                  if (!
                  /**
                  * Decides whether the provided error allows us to gracefully disable
                  * persistence (as opposed to crashing the client).
                  */
                  function (t) {
                    return "FirebaseError" === t.name ? t.code === b.FAILED_PRECONDITION || t.code === b.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
                    // INVALID_STATE for any usage.
                    11 === t.code;
                  }(e = n.sent())) throw e;
                  return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + e), u.reject(e), [3
                  /*break*/
                  , 4];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }).then(function () {
          return u.promise;
        });
      }

      function ha(t) {
        var r = this;
        if (t.Y_ && !t.J_) throw new I(b.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
        var i = new sr();
        return t.X_.bs(function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
              switch (o.label) {
                case 0:
                  return o.trys.push([0, 2,, 3]), [4
                  /*yield*/
                  , function (t) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                      var e;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return hr.Ln() ? (e = t + "main", [4
                            /*yield*/
                            , hr["delete"](e)]) : [2
                            /*return*/
                            , Promise.resolve()];

                          case 1:
                            return n.sent(), [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }(ro(t.c_, t.Z_))];

                case 1:
                  return o.sent(), i.resolve(), [3
                  /*break*/
                  , 3];

                case 2:
                  return r = o.sent(), i.reject(r), [3
                  /*break*/
                  , 3];

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }), i.promise;
      }

      function fa(t) {
        if (t.Y_ || t.J_) throw new I(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Constant used to indicate the LRU garbage collection should be disabled.
       * Set this value as the `cacheSizeBytes` on the settings passed to the
       * `Firestore` instance.
       */


      var la = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
          pa =
      /** @class */
      function () {
        function t() {}

        return t.prototype.enableIndexedDbPersistence = function (t, e) {
          throw new I(b.FAILED_PRECONDITION, la);
        }, t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
          throw new I(b.FAILED_PRECONDITION, la);
        }, t.prototype.clearIndexedDbPersistence = function (t) {
          throw new I(b.FAILED_PRECONDITION, la);
        }, t;
      }(),
          da =
      /** @class */
      function () {
        function t() {
          this.enableMultiTabIndexedDbPersistence = aa.bind(null), this.clearIndexedDbPersistence = ha.bind(null);
        }

        return t.prototype.enableIndexedDbPersistence = function (t, e) {
          /**
          * Attempts to enable persistent storage, if possible.
          *
          * Must be called before any other functions (other than
          * {@link initializeFirestore()}, {@link getFirestore()} or
          * {@link clearIndexedDbPersistence()}.
          *
          * If this fails, `enableIndexedDbPersistence()` will reject the promise it
          * returns. Note that even after this failure, the `Firestore` instance will
          * remain usable, however offline persistence will be disabled.
          *
          * There are several reasons why this can fail, which can be identified by
          * the `code` on the error.
          *
          *   * failed-precondition: The app is already open in another browser tab.
          *   * unimplemented: The browser is incompatible with the offline
          *     persistence implementation.
          *
          * @param firestore The `Firestore` instance to enable persistence for.
          * @param persistenceSettings Optional settings object to configure persistence.
          * @return A promise that represents successfully enabling persistent storage.
          */
          return function (t, e) {
            fa(t);
            var n = ya(t),
                r = t.H_(),
                i = new us();
            return ca(n, i, new is(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
          }(t, {
            forceOwnership: e
          });
        }, t;
      }(),
          va =
      /** @class */
      function () {
        // Note: We are using `MemoryPersistenceProvider` as a default
        // ComponentProvider to ensure backwards compatibility with the format
        // expected by the console build.
        function t(r, i, o) {
          var u = this;

          if (void 0 === o && (o = new pa()), this.tf = o, this.ef = null, // Public for use in tests.
          // TODO(mikelehen): Use modularized initialization instead.
          this.X_ = new Er(), this.INTERNAL = {
            "delete": function _delete() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(u, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.nf || // The client must be initialized to ensure that all subsequent API
                      // usage throws an exception.
                      ma(this), [4
                      /*yield*/
                      , this.nf.terminate()];

                    case 1:
                      return t.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }
          }, "object" == typeof r.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var s = r;
            this.ef = s, this.c_ = t.sf(s), this.Z_ = s.name, this["if"] = new Rr(i);
          } else {
            var a = r;
            if (!a.projectId) throw new I(b.INVALID_ARGUMENT, "Must provide projectId");
            this.c_ = new j(a.projectId, a.database), // Use a default persistenceKey that lines up with FirebaseApp.
            this.Z_ = "[DEFAULT]", this["if"] = new Vr();
          }

          this.rf = new sa({});
        }

        return Object.defineProperty(t.prototype, "Y_", {
          get: function get() {
            return !!this.nf;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "J_", {
          get: function get() {
            return this.X_.ps;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "af", {
          get: function get() {
            return this.cf || ( // Lazy initialize UserDataReader once the settings are frozen
            this.cf = new Os(this.c_, this.rf.ignoreUndefinedProperties)), this.cf;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.settings = function (t) {
          t.merge && // Remove the property from the settings once the merge is completed
          delete (t = Object.assign(Object.assign({}, this.rf), t)).merge;
          var e = new sa(t);
          if (this.nf && !this.rf.isEqual(e)) throw new I(b.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
          this.rf = e, void 0 !== e.credentials && (this["if"] = function (t) {
            if (!t) return new Vr();

            switch (t.type) {
              case "gapi":
                var e = t.client; // Make sure this really is a Gapi client.

                return x(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Cr(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new I(b.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
          }(e.credentials));
        }, t.prototype.useEmulator = function (t, e) {
          "firestore.googleapis.com" !== this.rf.host && A("Host has been set in both settings() and useEmulator(), emulator host will be used"), this.settings({
            host: t + ":" + e,
            ssl: !1,
            merge: !0
          });
        }, t.prototype.enableNetwork = function () {
          return ya(this), function (t) {
            var r = this;
            return t.cs.enqueue(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                var e, r;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , Xs(t)];

                    case 1:
                      return e = n.sent(), [4
                      /*yield*/
                      , $s(t)];

                    case 2:
                      return r = n.sent(), [2
                      /*return*/
                      , (e.la(!0), function (t) {
                        var e = k(t);
                        return e.Wc["delete"](0
                        /* UserDisabled */
                        ), To(e);
                      }(r))];
                  }
                });
              });
            });
          }
          /** Disables the network connection. Pending operations will not complete. */
          (this.nf);
        }, t.prototype.disableNetwork = function () {
          return ya(this), function (t) {
            var r = this;
            return t.cs.enqueue(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                var r, i;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , Xs(t)];

                    case 1:
                      return r = o.sent(), [4
                      /*yield*/
                      , $s(t)];

                    case 2:
                      return i = o.sent(), [2
                      /*return*/
                      , (r.la(!1), function (t) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                          var e;
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (e = k(t)).Wc.add(0
                                /* UserDisabled */
                                ), [4
                                /*yield*/
                                , No(e)];

                              case 1:
                                return n.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                                e.Hc.set("Offline"
                                /* Offline */
                                ), [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      }(i))];
                  }
                });
              });
            });
          }(this.nf);
        }, t.prototype.enablePersistence = function (t) {
          if (this.nf) throw new I(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
          var e = !1,
              n = !1;
          return t && hs("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.tf.enableMultiTabIndexedDbPersistence(this) : this.tf.enableIndexedDbPersistence(this, n);
        }, t.prototype.clearPersistence = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
              return [2
              /*return*/
              , this.tf.clearIndexedDbPersistence(this)];
            });
          });
        }, t.prototype.terminate = function () {
          return this.app._removeServiceInstance("firestore"), this.INTERNAL["delete"]();
        }, t.prototype.waitForPendingWrites = function () {
          return ya(this), function (t) {
            var r = this,
                i = new sr();
            return t.cs.ws(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r, void 0, void 0, function () {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return e = Eu, [4
                      /*yield*/
                      , ta(t)];

                    case 1:
                      return [2
                      /*return*/
                      , e.apply(void 0, [n.sent(), i])];
                  }
                });
              });
            }), i.promise;
          }(this.nf);
        }, t.prototype.onSnapshotsInSync = function (t) {
          if (ya(this), oa(t)) return ia(this.nf, t);
          var e = {
            next: t
          };
          return ia(this.nf, e);
        }, t.sf = function (t) {
          if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new I(b.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
          var e,
              n = t.options.projectId;
          if (!n || "string" != typeof n) throw new I(b.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
          return new j(n);
        }, Object.defineProperty(t.prototype, "app", {
          get: function get() {
            if (!this.ef) throw new I(b.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.ef;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.collection = function (t) {
          return as("Firestore.collection", "path", t), ya(this), new ka(J.q(t), this,
          /* converter= */
          null);
        }, t.prototype.doc = function (t) {
          return as("Firestore.doc", "path", t), ya(this), ba.uf(J.q(t), this,
          /* converter= */
          null);
        }, t.prototype.collectionGroup = function (t) {
          if (as("Firestore.collectionGroup", "collectionId", t), t.indexOf("/") >= 0) throw new I(b.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
          return ya(this), new Sa(
          /**
          * Creates a new Query for a collection group query that matches all documents
          * within the provided collection group.
          */
          function (t) {
            return new Dn(J.U(), t);
          }(t), this,
          /* converter= */
          null);
        }, t.prototype.runTransaction = function (t) {
          var r = this;
          return function (t, r) {
            var i = this,
                o = new sr();
            return t.cs.ws(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , function (t) {
                        return Js(t).then(function (t) {
                          return t.qc;
                        });
                      }(t)];

                    case 1:
                      return e = n.sent(), new Ks(t.cs, e, r, o).run(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), o.promise;
          }(ya(this), function (e) {
            return t(new ga(r, e));
          });
        }, t.prototype.batch = function () {
          return ya(this), new wa(this);
        }, t.prototype.H_ = function () {
          return this.rf;
        }, t;
      }();
      /**
       * The persistence provider included with the memory-only SDK. This provider
       * errors for all attempts to access persistence.
       */


      function ya(t) {
        return t.nf || ma(t), t.nf.O_(), t.nf;
      }

      function ma(t) {
        var e = t.H_(),
            n = function (t, e, n) {
          return new B(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
        }(t.c_, t.Z_, e);

        t.nf = new Qs(t["if"], t.X_, n);
      }
      /**
       * A reference to a transaction.
       */


      var ga =
      /** @class */
      function () {
        function t(t, e) {
          this.hf = t, this.lf = e;
        }

        return t.prototype.get = function (t) {
          var e = this,
              n = Oa("Transaction.get", t, this.hf);
          return this.lf.y_([n.u_]).then(function (t) {
            if (!t || 1 !== t.length) return S();
            var r = t[0];
            if (r instanceof Nn) return new Ea(e.hf, n.u_, null,
            /* fromCache= */
            !1,
            /* hasPendingWrites= */
            !1, n.h_);
            if (r instanceof Tn) return new Ea(e.hf, n.u_, r,
            /* fromCache= */
            !1,
            /* hasPendingWrites= */
            !1, n.h_);
            throw S();
          });
        }, t.prototype.set = function (t, e, n) {
          var r = Oa("Transaction.set", t, this.hf);
          n = cs("Transaction.set", n);
          var i = La(r.h_, e, n),
              o = Ps(this.hf.af, "Transaction.set", r.u_, i, null !== r.h_, n);
          return this.lf.set(r.u_, o), this;
        }, t.prototype.update = function (t, e, n) {
          for (var r, i, o = [], u = 3; u < arguments.length; u++) {
            o[u - 3] = arguments[u];
          }

          return "string" == typeof e || e instanceof ds ? (r = Oa("Transaction.update", t, this.hf), i = Vs(this.hf.af, "Transaction.update", r.u_, e, n, o)) : (r = Oa("Transaction.update", t, this.hf), i = Ls(this.hf.af, "Transaction.update", r.u_, e)), this.lf.update(r.u_, i), this;
        }, t.prototype["delete"] = function (t) {
          var e = Oa("Transaction.delete", t, this.hf);
          return this.lf["delete"](e.u_), this;
        }, t;
      }(),
          wa =
      /** @class */
      function () {
        function t(t) {
          this.hf = t, this._f = [], this.ff = !1;
        }

        return t.prototype.set = function (t, e, n) {
          this.df();
          var r = Oa("WriteBatch.set", t, this.hf);
          n = cs("WriteBatch.set", n);
          var i = La(r.h_, e, n),
              o = Ps(this.hf.af, "WriteBatch.set", r.u_, i, null !== r.h_, n);
          return this._f = this._f.concat(o.l_(r.u_, rn.ze())), this;
        }, t.prototype.update = function (t, e, n) {
          for (var r, i, o = [], u = 3; u < arguments.length; u++) {
            o[u - 3] = arguments[u];
          }

          return this.df(), "string" == typeof e || e instanceof ds ? (r = Oa("WriteBatch.update", t, this.hf), i = Vs(this.hf.af, "WriteBatch.update", r.u_, e, n, o)) : (r = Oa("WriteBatch.update", t, this.hf), i = Ls(this.hf.af, "WriteBatch.update", r.u_, e)), this._f = this._f.concat(i.l_(r.u_, rn.exists(!0))), this;
        }, t.prototype["delete"] = function (t) {
          this.df();
          var e = Oa("WriteBatch.delete", t, this.hf);
          return this._f = this._f.concat(new gn(e.u_, rn.ze())), this;
        }, t.prototype.commit = function () {
          return this.df(), this.ff = !0, this._f.length > 0 ? ra(ya(this.hf), this._f) : Promise.resolve();
        }, t.prototype.df = function () {
          if (this.ff) throw new I(b.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
        }, t;
      }(),
          ba =
      /** @class */
      function (r) {
        function i(t, e, n) {
          var i = this;
          return (i = r.call(this, e.c_, t, n) || this).u_ = t, i.firestore = e, i.h_ = n, i.nf = ya(e), i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(i, r), i.uf = function (t, e, n) {
          if (t.length % 2 != 0) throw new I(b.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.B() + " has " + t.length);
          return new i(new $(t), e, n);
        }, Object.defineProperty(i.prototype, "id", {
          get: function get() {
            return this.u_.path.k();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(i.prototype, "parent", {
          get: function get() {
            return new ka(this.u_.path.F(), this.firestore, this.h_);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(i.prototype, "path", {
          get: function get() {
            return this.u_.path.B();
          },
          enumerable: !1,
          configurable: !0
        }), i.prototype.collection = function (t) {
          if (as("DocumentReference.collection", "path", t), !t) throw new I(b.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
          var e = J.q(t);
          return new ka(this.u_.path.child(e), this.firestore,
          /* converter= */
          null);
        }, i.prototype.isEqual = function (t) {
          return t instanceof i && this.firestore === t.firestore && this.u_.isEqual(t.u_) && this.h_ === t.h_;
        }, i.prototype.set = function (t, e) {
          e = cs("DocumentReference.set", e);
          var n = La(this.h_, t, e),
              r = Ps(this.firestore.af, "DocumentReference.set", this.u_, n, null !== this.h_, e);
          return ra(this.nf, r.l_(this.u_, rn.ze()));
        }, i.prototype.update = function (t, e) {
          for (var n, r = [], i = 2; i < arguments.length; i++) {
            r[i - 2] = arguments[i];
          }

          return n = "string" == typeof t || t instanceof ds ? Vs(this.firestore.af, "DocumentReference.update", this.u_, t, e, r) : Ls(this.firestore.af, "DocumentReference.update", this.u_, t), ra(this.nf, n.l_(this.u_, rn.exists(!0)));
        }, i.prototype["delete"] = function () {
          return ra(this.nf, [new gn(this.u_, rn.ze())]);
        }, i.prototype.onSnapshot = function () {
          for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) {
            i[o] = arguments[o];
          }

          var u = {
            includeMetadataChanges: !1
          },
              s = 0;
          "object" != typeof i[s] || oa(i[s]) || (u = i[s], s++);
          var a = {
            includeMetadataChanges: u.includeMetadataChanges
          };

          if (oa(i[s])) {
            var c = i[s];
            i[s] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[s + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), i[s + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
          }

          var h = {
            next: function next(t) {
              i[s] && i[s](r.wf(t));
            },
            error: i[s + 1],
            complete: i[s + 2]
          };
          return na(this.nf, xn(this.u_.path), a, h);
        }, i.prototype.get = function (t) {
          var r = this;
          return t && "cache" === t.source ? function (t, r) {
            var i = this,
                o = new sr();
            return t.cs.ws(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
                var i;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return i = function i(t, r, _i2) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                          var e, o, u;
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([0, 2,, 3]), [4
                                /*yield*/
                                , function (t, e) {
                                  var n = k(t);
                                  return n.persistence.runTransaction("read document", "readonly", function (t) {
                                    return n.Ka.Mi(t, e);
                                  });
                                }(t, r)];

                              case 1:
                                return (e = n.sent()) instanceof Tn ? _i2.resolve(e) : e instanceof Nn ? _i2.resolve(null) : _i2.reject(new I(b.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                                /*break*/
                                , 3];

                              case 2:
                                return o = n.sent(), u = _r(o, "Failed to get document '" + r + " from cache"), _i2.reject(u), [3
                                /*break*/
                                , 3];

                              case 3:
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      }, [4
                      /*yield*/
                      , Zs(t)];

                    case 1:
                      return [2
                      /*return*/
                      , i.apply(void 0, [u.sent(), r, o])];
                  }
                });
              });
            }), o.promise;
          }(this.nf, this.u_).then(function (t) {
            return new Ea(r.firestore, r.u_, t,
            /*fromCache=*/
            !0, t instanceof Tn && t.Je, r.h_);
          }) : function (t, r, i) {
            var o = this;
            void 0 === i && (i = {});
            var u = new sr();
            return t.cs.ws(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return e = function e(t, _e4, n, r, i) {
                        var o = new ss({
                          next: function next(o) {
                            // Remove query first before passing event to user to avoid
                            // user actions affecting the now stale query.
                            _e4.ws(function () {
                              return Dr(t, u);
                            });

                            var s = o.docs.has(n);
                            !s && o.fromCache ? // TODO(dimond): If we're online and the document doesn't
                            // exist then we resolve with a doc.exists set to false. If
                            // we're offline however, we reject the Promise in this
                            // case. Two options: 1) Cache the negative response from
                            // the server so we can deliver that even when you're
                            // offline 2) Actually reject the Promise in the online case
                            // if the document doesn't exist.
                            i.reject(new I(b.UNAVAILABLE, "Failed to get document because the client is offline.")) : s && o.fromCache && r && "server" === r.source ? i.reject(new I(b.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                          },
                          error: function error(t) {
                            return i.reject(t);
                          }
                        }),
                            u = new Or(xn(n.path), o, {
                          includeMetadataChanges: !0,
                          Xs: !0
                        });
                        return Ar(t, u);
                      }, [4
                      /*yield*/
                      , ea(t)];

                    case 1:
                      return [2
                      /*return*/
                      , e.apply(void 0, [n.sent(), t.cs, r, i, u])];
                  }
                });
              });
            }), u.promise;
          }(this.nf, this.u_, t).then(function (t) {
            return r.wf(t);
          });
        }, i.prototype.withConverter = function (t) {
          return new i(this.u_, this.firestore, t);
        },
        /**
         * Converts a ViewSnapshot that contains the current document to a
         * DocumentSnapshot.
         */
        i.prototype.wf = function (t) {
          var e = t.docs.get(this.u_);
          return new Ea(this.firestore, this.u_, e, t.fromCache, t.hasPendingWrites, this.h_);
        }, i;
      }(As),
          Ia =
      /** @class */
      function () {
        function t(t, e) {
          this.hasPendingWrites = t, this.fromCache = e
          /**
          * Returns true if this `SnapshotMetadata` is equal to the provided one.
          *
          * @param other The `SnapshotMetadata` to compare against.
          * @return true if this `SnapshotMetadata` is equal to the provided one.
          */
          ;
        }

        return t.prototype.isEqual = function (t) {
          return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
        }, t;
      }(),
          Ea =
      /** @class */
      function () {
        function t(t, e, n, r, i, o) {
          this.hf = t, this.u_ = e, this.Ef = n, this.Tf = r, this.If = i, this.h_ = o;
        }

        return t.prototype.data = function (t) {
          var e = this;

          if (void 0 === t && (t = {}), this.Ef) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.h_) {
              var n = new _a(this.hf, this.u_, this.Ef, this.Tf, this.If,
              /* converter= */
              null);
              return this.h_.fromFirestore(n, t);
            }

            return new ua(this.hf.c_, t.serverTimestamps || "none", function (t) {
              return new ba(t, e.hf,
              /* converter= */
              null);
            }, function (t) {
              return new F(t);
            }).U_(this.Ef.rn());
          }
        }, t.prototype.get = function (t, e) {
          var n = this;

          if (void 0 === e && (e = {}), this.Ef) {
            var r = this.Ef.data().field(Fs("DocumentSnapshot.get", t, this.u_));
            if (null !== r) return new ua(this.hf.c_, e.serverTimestamps || "none", function (t) {
              return new ba(t, n.hf, n.h_);
            }, function (t) {
              return new F(t);
            }).U_(r);
          }
        }, Object.defineProperty(t.prototype, "id", {
          get: function get() {
            return this.u_.path.k();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ref", {
          get: function get() {
            return new ba(this.u_, this.hf, this.h_);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "exists", {
          get: function get() {
            return null !== this.Ef;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "metadata", {
          get: function get() {
            return new Ia(this.If, this.Tf);
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.isEqual = function (e) {
          return e instanceof t && this.hf === e.hf && this.Tf === e.Tf && this.u_.isEqual(e.u_) && (null === this.Ef ? null === e.Ef : this.Ef.isEqual(e.Ef)) && this.h_ === e.h_;
        }, t;
      }(),
          _a =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.prototype.data = function (t) {
          return e.prototype.data.call(this, t);
        }, n;
      }(Ea);
      /**
       * Create a Bound from a query and a document.
       *
       * Note that the Bound will always include the key of the document
       * and so only the provided document will compare equal to the returned
       * position.
       *
       * Will throw if the document does not contain all fields of the order by
       * of the query or if any of the fields in the order by are an uncommitted
       * server timestamp.
       */

      /**
       * Parses the given documentIdValue into a ReferenceValue, throwing
       * appropriate errors if the value is anything other than a DocumentReference
       * or String, or if the string is malformed.
       */


      function Ta(t, e, n) {
        if ("string" == typeof n) {
          if ("" === n) throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
          if (!Vn(e) && -1 !== n.indexOf("/")) throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
          var r = e.path.child(J.q(n));
          if (!$.X(r)) throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
          return ee(t, new $(r));
        }

        if (n instanceof As) return ee(t, n.u_);
        throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + fs(n) + ".");
      }
      /**
       * Validates that the value passed into a disjunctive filter satisfies all
       * array requirements.
       */


      function Na(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new I(b.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new I(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
      }

      function Aa(t, e, n) {
        if (!n.isEqual(e)) throw new I(b.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
      }

      function Da(t) {
        if (On(t) && 0 === t.on.length) throw new I(b.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
      }

      var Sa =
      /** @class */
      function () {
        function t(t, e, n) {
          this.mf = t, this.firestore = e, this.h_ = n;
        }

        return t.prototype.where = function (e, n, r) {
          var i = Fs("Query.where", e),
              o = function (t, e, n, r, i, o, u) {
            var s;

            if (i.W()) {
              if ("array-contains"
              /* ARRAY_CONTAINS */
              === o || "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              === o) throw new I(b.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");

              if ("in"
              /* IN */
              === o || "not-in"
              /* NOT_IN */
              === o) {
                Na(u, o);

                for (var a = [], c = 0, h = u; c < h.length; c++) {
                  var f = h[c];
                  a.push(Ta(r, t, f));
                }

                s = {
                  arrayValue: {
                    values: a
                  }
                };
              } else s = Ta(r, t, u);
            } else "in"
            /* IN */
            !== o && "not-in"
            /* NOT_IN */
            !== o && "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            !== o || Na(u, o), s = Rs(n, e, u,
            /* allowArrays= */
            "in"
            /* IN */
            === o || "not-in"
            /* NOT_IN */
            === o);

            var l = Kn.create(i, o, s);
            return function (t, e) {
              if (e.hn()) {
                var n = Ln(t);
                if (null !== n && !n.isEqual(e.field)) throw new I(b.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                var r = Pn(t);
                null !== r && Aa(0, e.field, r);
              }

              var i = function (t, e) {
                for (var n = 0, r = t.filters; n < r.length; n++) {
                  var i = r[n];
                  if (e.indexOf(i.op) >= 0) return i.op;
                }

                return null;
              }(t,
              /**
              * Given an operator, returns the set of operators that cannot be used with it.
              *
              * Operators in a query must adhere to the following set of rules:
              * 1. Only one array operator is allowed.
              * 2. Only one disjunctive operator is allowed.
              * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
              * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
              *
              * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
              * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
              */
              function (t) {
                switch (t) {
                  case "!="
                  /* NOT_EQUAL */
                  :
                    return ["!="
                    /* NOT_EQUAL */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "array-contains"
                  /* ARRAY_CONTAINS */
                  :
                    return ["array-contains"
                    /* ARRAY_CONTAINS */
                    , "array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "in"
                  /* IN */
                  :
                    return ["array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "in"
                    /* IN */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "array-contains-any"
                  /* ARRAY_CONTAINS_ANY */
                  :
                    return ["array-contains"
                    /* ARRAY_CONTAINS */
                    , "array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "in"
                    /* IN */
                    , "not-in"
                    /* NOT_IN */
                    ];

                  case "not-in"
                  /* NOT_IN */
                  :
                    return ["array-contains"
                    /* ARRAY_CONTAINS */
                    , "array-contains-any"
                    /* ARRAY_CONTAINS_ANY */
                    , "in"
                    /* IN */
                    , "not-in"
                    /* NOT_IN */
                    , "!="
                    /* NOT_EQUAL */
                    ];

                  default:
                    return [];
                }
              }(e.op));

              if (null !== i) // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new I(b.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new I(b.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
          }(this.mf, "Query.where", this.firestore.af, this.firestore.c_, i, n, r);

          return new t(function (t, e) {
            var n = t.filters.concat([e]);
            return new Dn(t.path, t.collectionGroup, t.on.slice(), n, t.limit, t.an, t.startAt, t.endAt);
          }(this.mf, o), this.firestore, this.h_);
        }, t.prototype.orderBy = function (e, n) {
          var r;
          if (void 0 === n || "asc" === n) r = "asc"
          /* ASCENDING */
          ;else {
            if ("desc" !== n) throw new I(b.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc"
            /* DESCENDING */
            ;
          }

          var i = Fs("Query.orderBy", e),
              o = function (t, e, n) {
            if (null !== t.startAt) throw new I(b.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new I(b.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new ir(e, n);
            return function (t, e) {
              if (null === Pn(t)) {
                // This is the first order by. It must match any inequality.
                var n = Ln(t);
                null !== n && Aa(0, n, e.field);
              }
            }(t, r), r;
          }(this.mf, i, r);

          return new t(function (t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.on.concat([e]);
            return new Dn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.an, t.startAt, t.endAt);
          }(this.mf, o), this.firestore, this.h_);
        }, t.prototype.limit = function (e) {
          return ls("Query.limit", e), new t(Cn(this.mf, e, "F"
          /* First */
          ), this.firestore, this.h_);
        }, t.prototype.limitToLast = function (e) {
          return ls("Query.limitToLast", e), new t(Cn(this.mf, e, "L"
          /* Last */
          ), this.firestore, this.h_);
        }, t.prototype.startAt = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) {
            n[r - 1] = arguments[r];
          }

          var i = this.Af("Query.startAt", e, n,
          /*before=*/
          !0);
          return new t(qn(this.mf, i), this.firestore, this.h_);
        }, t.prototype.startAfter = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) {
            n[r - 1] = arguments[r];
          }

          var i = this.Af("Query.startAfter", e, n,
          /*before=*/
          !1);
          return new t(qn(this.mf, i), this.firestore, this.h_);
        }, t.prototype.endBefore = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) {
            n[r - 1] = arguments[r];
          }

          var i = this.Af("Query.endBefore", e, n,
          /*before=*/
          !0);
          return new t(Mn(this.mf, i), this.firestore, this.h_);
        }, t.prototype.endAt = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) {
            n[r - 1] = arguments[r];
          }

          var i = this.Af("Query.endAt", e, n,
          /*before=*/
          !1);
          return new t(Mn(this.mf, i), this.firestore, this.h_);
        }, t.prototype.isEqual = function (e) {
          return e instanceof t && this.firestore === e.firestore && Fn(this.mf, e.mf) && this.h_ === e.h_;
        }, t.prototype.withConverter = function (e) {
          return new t(this.mf, this.firestore, e);
        },
        /** Helper function to create a bound from a document or fields */
        t.prototype.Af = function (t, e, n, r) {
          if (e instanceof Ea) return function (t, e, n, r, i) {
            if (!r) throw new I(b.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."); // Because people expect to continue/end a query at the exact document
            // provided, we need to use the implicit sort order rather than the explicit
            // sort order, because it's guaranteed to contain the document key. That way
            // the position becomes unambiguous and the query continues/ends exactly at
            // the provided document. Without the key (by using the explicit sort
            // orders), multiple documents could match the position, yielding duplicate
            // results.

            for (var o = [], u = 0, s = Rn(t); u < s.length; u++) {
              var a = s[u];
              if (a.field.W()) o.push(ee(e, r.key));else {
                var c = r.field(a.field);
                if (Bt(c)) throw new I(b.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

                if (null === c) {
                  var h = a.field.B();
                  throw new I(b.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }

                o.push(c);
              }
            }

            return new tr(o, i);
          }(this.mf, this.firestore.c_, t, e.Ef, r);
          var i = [e].concat(n);
          return function (t, e, n, r, i, o) {
            // Use explicit order by's because it has to match the query the user made
            var u = t.on;
            if (i.length > u.length) throw new I(b.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");

            for (var s = [], a = 0; a < i.length; a++) {
              var c = i[a];

              if (u[a].field.W()) {
                if ("string" != typeof c) throw new I(b.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                if (!Vn(t) && -1 !== c.indexOf("/")) throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                var h = t.path.child(J.q(c));
                if (!$.X(h)) throw new I(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                var f = new $(h);
                s.push(ee(e, f));
              } else {
                var l = Rs(n, r, c);
                s.push(l);
              }
            }

            return new tr(s, o);
          }(this.mf, this.firestore.c_, this.firestore.af, t, i, r);
        }, t.prototype.onSnapshot = function () {
          for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) {
            i[o] = arguments[o];
          }

          var u = {},
              s = 0;

          if ("object" != typeof i[s] || oa(i[s]) || (u = i[s], s++), oa(i[s])) {
            var a = i[s];
            i[s] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[s + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i[s + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
          }

          var c = {
            next: function next(t) {
              i[s] && i[s](new xa(r.firestore, r.mf, t, r.h_));
            },
            error: i[s + 1],
            complete: i[s + 2]
          };
          return Da(this.mf), na(ya(this.firestore), this.mf, u, c);
        }, t.prototype.get = function (t) {
          var r = this;
          Da(this.mf);
          var i = ya(this.firestore);
          return (t && "cache" === t.source ? function (t, r) {
            var i = this,
                o = new sr();
            return t.cs.ws(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(i, void 0, void 0, function () {
                var i;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return i = function i(t, r, _i3) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                          var e, o, u, s, a, c;
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([0, 2,, 3]), [4
                                /*yield*/
                                , lo(t, r,
                                /* usePreviousResults= */
                                !0)];

                              case 1:
                                return e = n.sent(), o = new cu(r, e.za), u = o.wh(e.documents), s = o.Di(u,
                                /* updateLimboDocuments= */
                                !1), _i3.resolve(s.snapshot), [3
                                /*break*/
                                , 3];

                              case 2:
                                return a = n.sent(), c = _r(a, "Failed to execute query '" + r + " against cache"), _i3.reject(c), [3
                                /*break*/
                                , 3];

                              case 3:
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      }, [4
                      /*yield*/
                      , Zs(t)];

                    case 1:
                      return [2
                      /*return*/
                      , i.apply(void 0, [u.sent(), r, o])];
                  }
                });
              });
            }), o.promise;
          }(i, this.mf) : function (t, r, i) {
            var o = this;
            void 0 === i && (i = {});
            var u = new sr();
            return t.cs.ws(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(o, void 0, void 0, function () {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return e = function e(t, _e5, n, r, i) {
                        var o = new ss({
                          next: function next(n) {
                            // Remove query first before passing event to user to avoid
                            // user actions affecting the now stale query.
                            _e5.ws(function () {
                              return Dr(t, u);
                            }), n.fromCache && "server" === r.source ? i.reject(new I(b.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                          },
                          error: function error(t) {
                            return i.reject(t);
                          }
                        }),
                            u = new Or(n, o, {
                          includeMetadataChanges: !0,
                          Xs: !0
                        });
                        return Ar(t, u);
                      }, [4
                      /*yield*/
                      , ea(t)];

                    case 1:
                      return [2
                      /*return*/
                      , e.apply(void 0, [n.sent(), t.cs, r, i, u])];
                  }
                });
              });
            }), u.promise;
          }(i, this.mf, t)).then(function (t) {
            return new xa(r.firestore, r.mf, t, r.h_);
          });
        }, t;
      }(),
          xa =
      /** @class */
      function () {
        function t(t, e, n, r) {
          this.hf = t, this.Rf = e, this.Pf = n, this.h_ = r, this.gf = null, this.yf = null, this.metadata = new Ia(n.hasPendingWrites, n.fromCache);
        }

        return Object.defineProperty(t.prototype, "docs", {
          get: function get() {
            var t = [];
            return this.forEach(function (e) {
              return t.push(e);
            }), t;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "empty", {
          get: function get() {
            return this.Pf.docs.P();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "size", {
          get: function get() {
            return this.Pf.docs.size;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.forEach = function (t, e) {
          var n = this;
          this.Pf.docs.forEach(function (r) {
            t.call(e, n.Vf(r, n.metadata.fromCache, n.Pf.Qt.has(r.key)));
          });
        }, Object.defineProperty(t.prototype, "query", {
          get: function get() {
            return new Sa(this.Rf, this.hf, this.h_);
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.docChanges = function (t) {
          var e = !(!t || !t.includeMetadataChanges);
          if (e && this.Pf.jt) throw new I(b.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
          return this.gf && this.yf === e || (this.gf =
          /**
          * Calculates the array of DocumentChanges for a given ViewSnapshot.
          *
          * Exported for testing.
          *
          * @param snapshot The ViewSnapshot that represents the expected state.
          * @param includeMetadataChanges Whether to include metadata changes.
          * @param converter A factory function that returns a QueryDocumentSnapshot.
          * @return An object that matches the DocumentChange API.
          */
          function (t, e, n) {
            if (t.Kt.P()) {
              // Special case the first snapshot because index calculation is easy and
              // fast
              var r = 0;
              return t.docChanges.map(function (e) {
                var i = n(e.doc, t.fromCache, t.Qt.has(e.doc.key));
                return e.doc, {
                  type: "added",
                  doc: i,
                  oldIndex: -1,
                  newIndex: r++
                };
              });
            } // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.


            var i = t.Kt;
            return t.docChanges.filter(function (t) {
              return e || 3
              /* Metadata */
              !== t.type;
            }).map(function (e) {
              var r = n(e.doc, t.fromCache, t.Qt.has(e.doc.key)),
                  o = -1,
                  u = -1;
              return 0
              /* Added */
              !== e.type && (o = i.indexOf(e.doc.key), i = i["delete"](e.doc.key)), 1
              /* Removed */
              !== e.type && (u = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                type: Pa(e.type),
                doc: r,
                oldIndex: o,
                newIndex: u
              };
            });
          }(this.Pf, e, this.Vf.bind(this)), this.yf = e), this.gf;
        },
        /** Check the equality. The call can be very expensive. */
        t.prototype.isEqual = function (e) {
          return e instanceof t && this.hf === e.hf && Fn(this.Rf, e.Rf) && this.Pf.isEqual(e.Pf) && this.h_ === e.h_;
        }, t.prototype.Vf = function (t, e, n) {
          return new _a(this.hf, t.key, t, e, n, this.h_);
        }, t;
      }(),
          ka =
      /** @class */
      function (e) {
        function n(t, n, r) {
          var i = this;
          if ((i = e.call(this, xn(t), n, r) || this).pf = t, t.length % 2 != 1) throw new I(b.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.B() + " has " + t.length);
          return i;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), Object.defineProperty(n.prototype, "id", {
          get: function get() {
            return this.mf.path.k();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "parent", {
          get: function get() {
            var t = this.mf.path.F();
            return t.P() ? null : new ba(new $(t), this.firestore,
            /* converter= */
            null);
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(n.prototype, "path", {
          get: function get() {
            return this.mf.path.B();
          },
          enumerable: !1,
          configurable: !0
        }), n.prototype.doc = function (t) {
          // We allow omission of 'pathString' but explicitly prohibit passing in both
          // 'undefined' and 'null'.
          0 === arguments.length && (t = P.t()), as("CollectionReference.doc", "path", t);
          var e = J.q(t);
          return ba.uf(this.mf.path.child(e), this.firestore, this.h_);
        }, n.prototype.add = function (t) {
          var e = this.h_ ? this.h_.toFirestore(t) : t,
              n = this.doc(); // Call set() with the converted value directly to avoid calling toFirestore() a second time.

          return new ba(n.u_, this.firestore, null).set(e).then(function () {
            return n;
          });
        }, n.prototype.withConverter = function (t) {
          return new n(this.pf, this.firestore, t);
        }, n;
      }(Sa);

      function Oa(t, e, n) {
        var r = function (t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
        e) {
          if (!(t instanceof e)) {
            if (e.name === t.constructor.name) throw new I(b.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
            var n = fs(t);
            throw new I(b.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
          }

          return t;
        }(e, ba);

        if (r.firestore !== n) throw new I(b.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return r;
      }

      function Pa(t) {
        switch (t) {
          case 0
          /* Added */
          :
            return "added";

          case 2
          /* Modified */
          :
          case 3
          /* Metadata */
          :
            return "modified";

          case 1
          /* Removed */
          :
            return "removed";

          default:
            return S();
        }
      }
      /**
       * Converts custom model object of type T into DocumentData by applying the
       * converter if it exists.
       *
       * This function is used when converting user objects to DocumentData
       * because we want to provide the user with a more specific error message if
       * their set() or fails due to invalid data originating from a toFirestore()
       * call.
       */


      function La(t, e, n) {
        // Cast to `any` in order to satisfy the union type constraint on
        // toFirestore().
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Va =
      /** @class */
      function (e) {
        function n() {
          return null !== e && e.apply(this, arguments) || this;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(n, e), n.serverTimestamp = function () {
          var t = new ws("serverTimestamp");
          return t.Jl = "FieldValue.serverTimestamp", new n(t);
        }, n["delete"] = function () {
          var t = new ms("deleteField");
          return t.Jl = "FieldValue.delete", new n(t);
        }, n.arrayUnion = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          var r =
          /**
          * Returns a special value that can be used with {@link setDoc()} or {@link
          * updateDoc()} that tells the server to union the given elements with any array
          * value that already exists on the server. Each specified element that doesn't
          * already exist in the array will be added to the end. If the field being
          * modified is not already an array it will be overwritten with an array
          * containing exactly the specified elements.
          *
          * @param elements The elements to union into the array.
          * @return The `FieldValue` sentinel for use in a call to `setDoc()` or
          * `updateDoc()`.
          */
          function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            } // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.


            return new bs("arrayUnion", t);
          }.apply(void 0, t);

          return r.Jl = "FieldValue.arrayUnion", new n(r);
        }, n.arrayRemove = function () {
          for (var t = [], e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
          }

          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            } // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.


            return new Is("arrayRemove", t);
          }.apply(void 0, t);

          return r.Jl = "FieldValue.arrayRemove", new n(r);
        }, n.increment = function (t) {
          var e = function (t) {
            return new Es("increment", t);
          }(t);

          return e.Jl = "FieldValue.increment", new n(e);
        }, n.prototype.isEqual = function (t) {
          return this.a_.isEqual(t.a_);
        }, n;
      }(Ts),
          Ra = {
        Firestore: va,
        GeoPoint: _s,
        Timestamp: W,
        Blob: F,
        Transaction: ga,
        WriteBatch: wa,
        DocumentReference: ba,
        DocumentSnapshot: Ea,
        Query: Sa,
        QueryDocumentSnapshot: _a,
        QuerySnapshot: xa,
        CollectionReference: ka,
        FieldPath: ds,
        FieldValue: Va,
        setLogLevel: function setLogLevel(t) {
          var e;
          e = t, E.setLogLevel(e);
        },
        CACHE_SIZE_UNLIMITED: -1
      };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Configures Firestore as part of the Firebase SDK by calling registerService.
       *
       * @param firebase The FirebaseNamespace to register Firestore with
       * @param firestoreFactory A factory function that returns a new Firestore
       *    instance.
       */

      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Registers the main Firestore build with the components framework.
       * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
       */


      function Ua(t) {
        !function (t, e) {
          t.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]("firestore", function (t) {
            return function (t, e) {
              return new va(t, e, new da());
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
          }, "PUBLIC"
          /* PUBLIC */
          ).setServiceProps(Object.assign({}, Ra)));
        }(t), t.registerVersion("@firebase/firestore", "2.0.1");
      }

      Ua(_firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"]); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
      \*********************************************************************/

    /*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */

    /***/
    function node_modulesFirebaseWebchannelWrapperDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
        return ErrorCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventType", function () {
        return EventType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebChannel", function () {
        return WebChannel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XhrIo", function () {
        return XhrIo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function () {
        return createWebChannelTransport;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
      var g,
          goog = goog || {},
          k = commonjsGlobal || self;

      function aa() {}

      function ba(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
      }

      function ca(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length;
      }

      function n(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b;
      }

      function da(a) {
        return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
      }

      var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
          fa = 0;

      function ha(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }

      function ja(a, b, c) {
        if (!a) throw Error();

        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function () {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e);
          };
        }

        return function () {
          return a.apply(b, arguments);
        };
      }

      function p(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja;
        return p.apply(null, arguments);
      }

      function ka(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
          var d = c.slice();
          d.push.apply(d, arguments);
          return a.apply(this, d);
        };
      }

      var q = Date.now;

      function r(a, b) {
        function c() {}

        c.prototype = b.prototype;
        a.S = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
      }

      function u() {
        this.j = this.j;
        this.i = this.i;
      }

      var la = 0;
      u.prototype.j = !1;

      u.prototype.ja = function () {
        if (!this.j && (this.j = !0, this.G(), 0 != la)) {
          var a = da(this);
        }
      };

      u.prototype.G = function () {
        if (this.i) for (; this.i.length;) {
          this.i.shift()();
        }
      };

      var na = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

        for (var c = 0; c < a.length; c++) {
          if (c in a && a[c] === b) return c;
        }

        return -1;
      },
          oa = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c);
      } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) {
          f in e && b.call(c, e[f], f, a);
        }
      };

      function pa(a) {
        a: {
          var b = qa;

          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
            if (e in d && b.call(void 0, d[e], e, a)) {
              b = e;
              break a;
            }
          }

          b = -1;
        }

        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
      }

      function ra(a) {
        return Array.prototype.concat.apply([], arguments);
      }

      function sa(a) {
        var b = a.length;

        if (0 < b) {
          for (var c = Array(b), d = 0; d < b; d++) {
            c[d] = a[d];
          }

          return c;
        }

        return [];
      }

      function ta(a) {
        return /^[\s\xa0]*$/.test(a);
      }

      var ua = String.prototype.trim ? function (a) {
        return a.trim();
      } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };

      function v(a, b) {
        return -1 != a.indexOf(b);
      }

      function xa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      }

      var w;

      a: {
        var ya = k.navigator;

        if (ya) {
          var za = ya.userAgent;

          if (za) {
            w = za;
            break a;
          }
        }

        w = "";
      }

      function Aa(a, b, c) {
        for (var d in a) {
          b.call(c, a[d], d, a);
        }
      }

      function Ba(a) {
        var b = {};

        for (var c in a) {
          b[c] = a[c];
        }

        return b;
      }

      var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

      function Da(a, b) {
        var c, d;

        for (var e = 1; e < arguments.length; e++) {
          d = arguments[e];

          for (c in d) {
            a[c] = d[c];
          }

          for (var f = 0; f < Ca.length; f++) {
            c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
          }
        }
      }

      function Ea(a) {
        Ea[" "](a);
        return a;
      }

      Ea[" "] = aa;

      function Fa(a, b) {
        var c = Ga;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
      }

      var Ha = v(w, "Opera"),
          x = v(w, "Trident") || v(w, "MSIE"),
          Ia = v(w, "Edge"),
          Ja = Ia || x,
          Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"),
          La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");

      function Ma() {
        var a = k.document;
        return a ? a.documentMode : void 0;
      }

      var Na;

      a: {
        var Oa = "",
            Pa = function () {
          var a = w;
          if (Ka) return /rv:([^\);]+)(\)|;)/.exec(a);
          if (Ia) return /Edge\/([\d\.]+)/.exec(a);
          if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
          if (La) return /WebKit\/(\S+)/.exec(a);
          if (Ha) return /(?:Version)[ \/]?(\S+)/.exec(a);
        }();

        Pa && (Oa = Pa ? Pa[1] : "");

        if (x) {
          var Qa = Ma();

          if (null != Qa && Qa > parseFloat(Oa)) {
            Na = String(Qa);
            break a;
          }
        }

        Na = Oa;
      }

      var Ga = {};

      function Ra(a) {
        return Fa(a, function () {
          {
            var b = 0;
            var e = ua(String(Na)).split("."),
                f = ua(String(a)).split("."),
                h = Math.max(e.length, f.length);

            for (var m = 0; 0 == b && m < h; m++) {
              var c = e[m] || "",
                  d = f[m] || "";

              do {
                c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
                d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
                if (0 == c[0].length && 0 == d[0].length) break;
                b = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
                c = c[3];
                d = d[3];
              } while (0 == b);
            }
          }
          return 0 <= b;
        });
      }

      var Sa;

      if (k.document && x) {
        var Ta = Ma();
        Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
      } else Sa = void 0;

      var Ua = Sa;

      var Va = !x || 9 <= Number(Ua),
          Wa = x && !Ra("9"),
          Xa = function () {
        if (!k.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
          get: function get() {
            a = !0;
          }
        });

        try {
          k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
        } catch (c) {}

        return a;
      }();

      function y(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.defaultPrevented = !1;
      }

      y.prototype.b = function () {
        this.defaultPrevented = !0;
      };

      function A(a, b) {
        y.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.c = null;

        if (a) {
          var c = this.type = a.type,
              d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
          this.target = a.target || a.srcElement;
          this.a = b;

          if (b = a.relatedTarget) {
            if (Ka) {
              a: {
                try {
                  Ea(b.nodeName);
                  var e = !0;
                  break a;
                } catch (f) {}

                e = !1;
              }

              e || (b = null);
            }
          } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

          this.relatedTarget = b;
          d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
          this.button = a.button;
          this.key = a.key || "";
          this.ctrlKey = a.ctrlKey;
          this.altKey = a.altKey;
          this.shiftKey = a.shiftKey;
          this.metaKey = a.metaKey;
          this.pointerId = a.pointerId || 0;
          this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
          this.c = a;
          a.defaultPrevented && this.b();
        }
      }

      r(A, y);
      var Ya = {
        2: "touch",
        3: "pen",
        4: "mouse"
      };

      A.prototype.b = function () {
        A.S.b.call(this);
        var a = this.c;
        if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Wa) try {
          if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
        } catch (b) {}
      };

      var C = "closure_listenable_" + (1E6 * Math.random() | 0),
          Za = 0;

      function $a(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ca = e;
        this.key = ++Za;
        this.Y = this.Z = !1;
      }

      function ab(a) {
        a.Y = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ca = null;
      }

      function bb(a) {
        this.src = a;
        this.a = {};
        this.b = 0;
      }

      bb.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var h = cb(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new $a(b, this.src, f, !!d, e), b.Z = c, a.push(b));
        return b;
      };

      function db(a, b) {
        var c = b.type;

        if (c in a.a) {
          var d = a.a[c],
              e = na(d, b),
              f;
          (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
          f && (ab(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        }
      }

      function cb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
          var f = a[e];
          if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d) return e;
        }

        return -1;
      }

      var eb = "closure_lm_" + (1E6 * Math.random() | 0),
          fb = {};

      function hb(a, b, c, d, e) {
        if (d && d.once) return ib(a, b, c, d, e);

        if (Array.isArray(b)) {
          for (var f = 0; f < b.length; f++) {
            hb(a, b[f], c, d, e);
          }

          return null;
        }

        c = jb(c);
        return a && a[C] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !1, d, e);
      }

      function kb(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var h = n(e) ? !!e.capture : !!e;
        if (h && !Va) return null;
        var m = lb(a);
        m || (a[eb] = m = new bb(a));
        c = m.add(b, c, d, h, f);
        if (c.proxy) return c;
        d = mb();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Xa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(nb(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
        return c;
      }

      function mb() {
        var a = ob,
            b = Va ? function (c) {
          return a.call(b.src, b.listener, c);
        } : function (c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
        return b;
      }

      function ib(a, b, c, d, e) {
        if (Array.isArray(b)) {
          for (var f = 0; f < b.length; f++) {
            ib(a, b[f], c, d, e);
          }

          return null;
        }

        c = jb(c);
        return a && a[C] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !0, d, e);
      }

      function pb(a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
          pb(a, b[f], c, d, e);
        } else (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = lb(a)) && (b = a.a[b.toString()], a = -1, b && (a = cb(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c));
      }

      function rb(a) {
        if ("number" !== typeof a && a && !a.Y) {
          var b = a.src;
          if (b && b[C]) db(b.c, a);else {
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            (c = lb(b)) ? (db(c, a), 0 == c.b && (c.src = null, b[eb] = null)) : ab(a);
          }
        }
      }

      function nb(a) {
        return a in fb ? fb[a] : fb[a] = "on" + a;
      }

      function sb(a, b) {
        var c = a.listener,
            d = a.ca || a.src;
        a.Z && rb(a);
        return c.call(d, b);
      }

      function ob(a, b) {
        if (a.Y) return !0;

        if (!Va) {
          if (!b) a: {
            b = ["window", "event"];

            for (var c = k, d = 0; d < b.length; d++) {
              if (c = c[b[d]], null == c) {
                b = null;
                break a;
              }
            }

            b = c;
          }
          b = new A(b, this);
          return sb(a, b);
        }

        return sb(a, new A(b, this));
      }

      function lb(a) {
        a = a[eb];
        return a instanceof bb ? a : null;
      }

      var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

      function jb(a) {
        if ("function" == ba(a)) return a;
        a[tb] || (a[tb] = function (b) {
          return a.handleEvent(b);
        });
        return a[tb];
      }

      function D() {
        u.call(this);
        this.c = new bb(this);
        this.J = this;
        this.C = null;
      }

      r(D, u);
      D.prototype[C] = !0;
      g = D.prototype;

      g.addEventListener = function (a, b, c, d) {
        hb(this, a, b, c, d);
      };

      g.removeEventListener = function (a, b, c, d) {
        pb(this, a, b, c, d);
      };

      g.dispatchEvent = function (a) {
        var b,
            c = this.C;
        if (c) for (b = []; c; c = c.C) {
          b.push(c);
        }
        c = this.J;
        var d = a.type || a;
        if ("string" === typeof a) a = new y(a, c);else if (a instanceof y) a.target = a.target || c;else {
          var e = a;
          a = new y(d, c);
          Da(a, e);
        }
        e = !0;
        if (b) for (var f = b.length - 1; 0 <= f; f--) {
          var h = a.a = b[f];
          e = ub(h, d, !0, a) && e;
        }
        h = a.a = c;
        e = ub(h, d, !0, a) && e;
        e = ub(h, d, !1, a) && e;
        if (b) for (f = 0; f < b.length; f++) {
          h = a.a = b[f], e = ub(h, d, !1, a) && e;
        }
        return e;
      };

      g.G = function () {
        D.S.G.call(this);

        if (this.c) {
          var a = this.c,
              c;

          for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++) {
              ab(d[e]);
            }

            delete a.a[c];
            a.b--;
          }
        }

        this.C = null;
      };

      g.va = function (a, b, c, d) {
        return this.c.add(String(a), b, !1, c, d);
      };

      g.wa = function (a, b, c, d) {
        return this.c.add(String(a), b, !0, c, d);
      };

      function ub(a, b, c, d) {
        b = a.c.a[String(b)];
        if (!b) return !0;
        b = b.concat();

        for (var e = !0, f = 0; f < b.length; ++f) {
          var h = b[f];

          if (h && !h.Y && h.capture == c) {
            var m = h.listener,
                l = h.ca || h.src;
            h.Z && db(a.c, h);
            e = !1 !== m.call(l, d) && e;
          }
        }

        return e && !d.defaultPrevented;
      }

      var vb = k.JSON.stringify;

      function wb() {
        this.b = this.a = null;
      }

      var yb = new (
      /** @class */
      function () {
        function class_1(a, b, c) {
          this.f = c;
          this.c = a;
          this.g = b;
          this.b = 0;
          this.a = null;
        }

        class_1.prototype.get = function () {
          var a;
          0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
          return a;
        };

        return class_1;
      }())(function () {
        return new xb();
      }, function (a) {
        a.reset();
      }, 100);

      wb.prototype.add = function (a, b) {
        var c = yb.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c;
      };

      function zb() {
        var a = Ab,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b;
      }

      function xb() {
        this.next = this.b = this.a = null;
      }

      xb.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null;
      };

      xb.prototype.reset = function () {
        this.next = this.b = this.a = null;
      };

      function Bb(a) {
        k.setTimeout(function () {
          throw a;
        }, 0);
      }

      function Cb(a, b) {
        Db || Eb();
        Fb || (Db(), Fb = !0);
        Ab.add(a, b);
      }

      var Db;

      function Eb() {
        var a = k.Promise.resolve(void 0);

        Db = function Db() {
          a.then(Gb);
        };
      }

      var Fb = !1,
          Ab = new wb();

      function Gb() {
        for (var a; a = zb();) {
          try {
            a.a.call(a.b);
          } catch (c) {
            Bb(c);
          }

          var b = yb;
          b.g(a);
          b.b < b.f && (b.b++, a.next = b.a, b.a = a);
        }

        Fb = !1;
      }

      function Hb(a, b) {
        D.call(this);
        this.b = a || 1;
        this.a = b || k;
        this.f = p(this.Ya, this);
        this.g = q();
      }

      r(Hb, D);
      g = Hb.prototype;
      g.aa = !1;
      g.M = null;

      g.Ya = function () {
        if (this.aa) {
          var a = q() - this.g;
          0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
        }
      };

      g.start = function () {
        this.aa = !0;
        this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
      };

      function Ib(a) {
        a.aa = !1;
        a.M && (a.a.clearTimeout(a.M), a.M = null);
      }

      g.G = function () {
        Hb.S.G.call(this);
        Ib(this);
        delete this.a;
      };

      function Jb(a, b, c) {
        if ("function" == ba(a)) c && (a = p(a, c));else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
      }

      function Kb(a) {
        a.a = Jb(function () {
          a.a = null;
          a.c && (a.c = !1, Kb(a));
        }, a.h);
        var b = a.b;
        a.b = null;
        a.g.apply(null, b);
      }

      var Lb =
      /** @class */
      function (_super) {
        __extends(Lb, _super);

        function Lb(a, b, c) {
          var _this = _super.call(this) || this;

          _this.g = null != c ? a.bind(c) : a;
          _this.h = b;
          _this.b = null;
          _this.c = !1;
          _this.a = null;
          return _this;
        }

        Lb.prototype.f = function (a) {
          this.b = arguments;
          this.a ? this.c = !0 : Kb(this);
        };

        Lb.prototype.G = function () {
          _super.prototype.G.call(this);

          this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null);
        };

        return Lb;
      }(u);

      function E(a) {
        u.call(this);
        this.b = a;
        this.a = {};
      }

      r(E, u);
      var Mb = [];

      function Nb(a, b, c, d) {
        Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);

        for (var e = 0; e < c.length; e++) {
          var f = hb(b, c[e], d || a.handleEvent, !1, a.b || a);
          if (!f) break;
          a.a[f.key] = f;
        }
      }

      function Ob(a) {
        Aa(a.a, function (b, c) {
          this.a.hasOwnProperty(c) && rb(b);
        }, a);
        a.a = {};
      }

      E.prototype.G = function () {
        E.S.G.call(this);
        Ob(this);
      };

      E.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
      };

      function Pb() {
        this.a = !0;
      }

      function Qb(a, b, c, d, e, f) {
        a.info(function () {
          if (a.a) {
            if (f) {
              var h = "";

              for (var m = f.split("&"), l = 0; l < m.length; l++) {
                var t = m[l].split("=");

                if (1 < t.length) {
                  var B = t[0];
                  t = t[1];
                  var z = B.split("_");
                  h = 2 <= z.length && "type" == z[1] ? h + (B + "=" + t + "&") : h + (B + "=redacted&");
                }
              }
            } else h = null;
          } else h = f;
          return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
        });
      }

      function Rb(a, b, c, d, e, f, h) {
        a.info(function () {
          return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
        });
      }

      function F(a, b, c, d) {
        a.info(function () {
          return "XMLHTTP TEXT (" + b + "): " + Sb(a, c) + (d ? " " + d : "");
        });
      }

      function Tb(a, b) {
        a.info(function () {
          return "TIMEOUT: " + b;
        });
      }

      Pb.prototype.info = function () {};

      function Sb(a, b) {
        if (!a.a) return b;
        if (!b) return null;

        try {
          var c = JSON.parse(b);
          if (c) for (a = 0; a < c.length; a++) {
            if (Array.isArray(c[a])) {
              var d = c[a];

              if (!(2 > d.length)) {
                var e = d[1];

                if (Array.isArray(e) && !(1 > e.length)) {
                  var f = e[0];
                  if ("noop" != f && "stop" != f && "close" != f) for (var h = 1; h < e.length; h++) {
                    e[h] = "";
                  }
                }
              }
            }
          }
          return vb(c);
        } catch (m) {
          return b;
        }
      }

      var Ub = null;

      function Vb() {
        return Ub = Ub || new D();
      }

      function Wb(a) {
        y.call(this, "serverreachability", a);
      }

      r(Wb, y);

      function G(a) {
        var b = Vb();
        b.dispatchEvent(new Wb(b, a));
      }

      function Xb(a) {
        y.call(this, "statevent", a);
      }

      r(Xb, y);

      function H(a) {
        var b = Vb();
        b.dispatchEvent(new Xb(b, a));
      }

      function Yb(a) {
        y.call(this, "timingevent", a);
      }

      r(Yb, y);

      function I(a, b) {
        if ("function" != ba(a)) throw Error("Fn must not be null and must be a function");
        return k.setTimeout(function () {
          a();
        }, b);
      }

      var Zb = {
        NO_ERROR: 0,
        Za: 1,
        gb: 2,
        fb: 3,
        bb: 4,
        eb: 5,
        hb: 6,
        Da: 7,
        TIMEOUT: 8,
        kb: 9
      };
      var $b = {
        ab: "complete",
        ob: "success",
        Ea: "error",
        Da: "abort",
        mb: "ready",
        nb: "readystatechange",
        TIMEOUT: "timeout",
        ib: "incrementaldata",
        lb: "progress",
        cb: "downloadprogress",
        pb: "uploadprogress"
      };

      function ac() {}

      ac.prototype.a = null;

      function bc(a) {
        var b;
        (b = a.a) || (b = a.a = {});
        return b;
      }

      function cc() {}

      var J = {
        OPEN: "a",
        $a: "b",
        Ea: "c",
        jb: "d"
      };

      function dc() {
        y.call(this, "d");
      }

      r(dc, y);

      function ec() {
        y.call(this, "c");
      }

      r(ec, y);
      var fc;

      function gc() {}

      r(gc, ac);
      fc = new gc();

      function K(a, b, c, d) {
        this.g = a;
        this.c = b;
        this.f = c;
        this.T = d || 1;
        this.J = new E(this);
        this.P = hc;
        a = Ja ? 125 : void 0;
        this.R = new Hb(a);
        this.B = null;
        this.b = !1;
        this.j = this.l = this.i = this.H = this.u = this.U = this.o = null;
        this.s = [];
        this.a = null;
        this.D = 0;
        this.h = this.m = null;
        this.N = -1;
        this.A = !1;
        this.O = 0;
        this.F = null;
        this.W = this.C = this.V = this.I = !1;
      }

      var hc = 45E3,
          ic = {},
          jc = {};
      g = K.prototype;

      g.setTimeout = function (a) {
        this.P = a;
      };

      function kc(a, b, c) {
        a.H = 1;
        a.i = lc(L(b));
        a.j = c;
        a.I = !0;
        mc(a, null);
      }

      function mc(a, b) {
        a.u = q();
        M(a);
        a.l = L(a.i);
        var c = a.l,
            d = a.T;
        Array.isArray(d) || (d = [String(d)]);
        nc(c.b, "t", d);
        a.D = 0;
        a.a = oc(a.g, a.g.C ? b : null);
        0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O));
        Nb(a.J, a.a, "readystatechange", a.Wa);
        b = a.B ? Ba(a.B) : {};
        a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b));
        G(1);
        Qb(a.c, a.m, a.l, a.f, a.T, a.j);
      }

      g.Wa = function (a) {
        a = a.target;
        var b = this.F;
        b && 3 == N(a) ? b.f() : this.Ca(a);
      };

      g.Ca = function (a) {
        try {
          if (a == this.a) a: {
            var b = N(this.a),
                c = this.a.ua(),
                d = this.a.X();

            if (!(3 > b || 3 == b && !Ja && !this.a.$())) {
              this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
              pc(this);
              var e = this.a.X();
              this.N = e;
              var f = this.a.$();
              this.b = 200 == e;
              Rb(this.c, this.m, this.l, this.f, this.T, b, e);

              if (this.b) {
                if (this.V && !this.C) {
                  b: {
                    if (this.a) {
                      var h,
                          m = this.a;

                      if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                        var l = h;
                        break b;
                      }
                    }

                    l = null;
                  }

                  if (l) F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, qc(this, l);else {
                    this.b = !1;
                    this.h = 3;
                    H(12);
                    O(this);
                    rc(this);
                    break a;
                  }
                }

                this.I ? (tc(this, b, f), Ja && this.b && 3 == b && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
                4 == b && O(this);
                this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, M(this)));
              } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
            }
          }
        } catch (t) {} finally {}
      };

      function tc(a, b, c) {
        for (var d = !0; !a.A && a.D < c.length;) {
          var e = vc(a, c);

          if (e == jc) {
            4 == b && (a.h = 4, H(14), d = !1);
            F(a.c, a.f, null, "[Incomplete Response]");
            break;
          } else if (e == ic) {
            a.h = 4;
            H(15);
            F(a.c, a.f, c, "[Invalid Chunk]");
            d = !1;
            break;
          } else F(a.c, a.f, e, null), qc(a, e);
        }

        4 == b && 0 == c.length && (a.h = 1, H(16), d = !1);
        a.b = a.b && d;
        d ? 0 < c.length && !a.W && (a.W = !0, b = a.g, b.a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b), b.F = !0)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a));
      }

      g.Va = function () {
        if (this.a) {
          var a = N(this.a),
              b = this.a.$();
          this.D < b.length && (pc(this), tc(this, a, b), this.b && 4 != a && M(this));
        }
      };

      function vc(a, b) {
        var c = a.D,
            d = b.indexOf("\n", c);
        if (-1 == d) return jc;
        c = Number(b.substring(c, d));
        if (isNaN(c)) return ic;
        d += 1;
        if (d + c > b.length) return jc;
        b = b.substr(d, c);
        a.D = d + c;
        return b;
      }

      g.cancel = function () {
        this.A = !0;
        O(this);
      };

      function M(a) {
        a.U = q() + a.P;
        yc(a, a.P);
      }

      function yc(a, b) {
        if (null != a.o) throw Error("WatchDog timer not null");
        a.o = I(p(a.Ua, a), b);
      }

      function pc(a) {
        a.o && (k.clearTimeout(a.o), a.o = null);
      }

      g.Ua = function () {
        this.o = null;
        var a = q();
        0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a);
      };

      function rc(a) {
        0 == a.g.v || a.A || uc(a.g, a);
      }

      function O(a) {
        pc(a);
        var b = a.F;
        b && "function" == typeof b.ja && b.ja();
        a.F = null;
        Ib(a.R);
        Ob(a.J);
        a.a && (b = a.a, a.a = null, b.abort(), b.ja());
      }

      function qc(a, b) {
        try {
          var c = a.g;
          if (0 != c.v && (c.a == a || zc(c.b, a))) if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
            try {
              var d = c.ka.a.parse(b);
            } catch (sc) {
              d = null;
            }

            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0]) a: {
                if (!c.j) {
                  if (c.a) if (c.a.u + 3E3 < a.u) Ac(c), Bc(c);else break a;
                  Cc(c);
                  H(18);
                }
              } else c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6E3));

              if (1 >= Dc(c.b) && c.ea) {
                try {
                  c.ea();
                } catch (sc) {}

                c.ea = void 0;
              }
            } else P(c, 11);
          } else if ((a.C || c.a == a) && Ac(c), !ta(b)) for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++) {
            if (e = b[d], c.P = e[0], e = e[1], 2 == c.v) {
              if ("c" == e[0]) {
                c.J = e[1];
                c.ga = e[2];
                var f = e[3];
                null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                var h = e[4];
                null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
                var m = e[5];

                if (null != m && "number" === typeof m && 0 < m) {
                  var l = 1.5 * m;
                  c.D = l;
                  c.c.info("backChannelRequestTimeoutMs_=" + l);
                }

                l = c;
                var t = a.a;

                if (t) {
                  var B = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;

                  if (B) {
                    var z = l.b;
                    !z.a && (v(B, "spdy") || v(B, "quic") || v(B, "h2")) && (z.f = z.g, z.a = new Set(), z.b && (Ec(z, z.b), z.b = null));
                  }

                  if (l.A) {
                    var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null;
                    qb && (l.na = qb, Q(l.B, l.A, qb));
                  }
                }

                c.v = 3;
                c.f && c.f.ta();
                c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                l = c;
                var va = a;
                l.la = Fc(l, l.C ? l.ga : null, l.fa);

                if (va.C) {
                  Gc(l.b, va);
                  var wa = va,
                      wc = l.D;
                  wc && wa.setTimeout(wc);
                  wa.o && (pc(wa), M(wa));
                  l.a = va;
                } else Hc(l);

                0 < c.g.length && Ic(c);
              } else "stop" != e[0] && "close" != e[0] || P(c, 7);
            } else 3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
          }
          G(4);
        } catch (sc) {}
      }

      function Kc(a) {
        if (a.K && "function" == typeof a.K) return a.K();
        if ("string" === typeof a) return a.split("");

        if (ca(a)) {
          for (var b = [], c = a.length, d = 0; d < c; d++) {
            b.push(a[d]);
          }

          return b;
        }

        b = [];
        c = 0;

        for (d in a) {
          b[c++] = a[d];
        }

        return a = b;
      }

      function Lc(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ca(a) || "string" === typeof a) oa(a, b, void 0);else {
          if (a.L && "function" == typeof a.L) var c = a.L();else if (a.K && "function" == typeof a.K) c = void 0;else if (ca(a) || "string" === typeof a) {
            c = [];

            for (var d = a.length, e = 0; e < d; e++) {
              c.push(e);
            }
          } else for (e in c = [], d = 0, a) {
            c[d++] = e;
          }
          d = Kc(a);
          e = d.length;

          for (var f = 0; f < e; f++) {
            b.call(void 0, d[f], c && c[f], a);
          }
        }
      }

      function R(a, b) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var c = arguments.length;

        if (1 < c) {
          if (c % 2) throw Error("Uneven number of arguments");

          for (var d = 0; d < c; d += 2) {
            this.set(arguments[d], arguments[d + 1]);
          }
        } else if (a) if (a instanceof R) for (c = a.L(), d = 0; d < c.length; d++) {
          this.set(c[d], a.get(c[d]));
        } else for (d in a) {
          this.set(d, a[d]);
        }
      }

      g = R.prototype;

      g.K = function () {
        Mc(this);

        for (var a = [], b = 0; b < this.a.length; b++) {
          a.push(this.b[this.a[b]]);
        }

        return a;
      };

      g.L = function () {
        Mc(this);
        return this.a.concat();
      };

      function Mc(a) {
        if (a.c != a.a.length) {
          for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            S(a.b, d) && (a.a[c++] = d);
            b++;
          }

          a.a.length = c;
        }

        if (a.c != a.a.length) {
          var e = {};

          for (c = b = 0; b < a.a.length;) {
            d = a.a[b], S(e, d) || (a.a[c++] = d, e[d] = 1), b++;
          }

          a.a.length = c;
        }
      }

      g.get = function (a, b) {
        return S(this.b, a) ? this.b[a] : b;
      };

      g.set = function (a, b) {
        S(this.b, a) || (this.c++, this.a.push(a));
        this.b[a] = b;
      };

      g.forEach = function (a, b) {
        for (var c = this.L(), d = 0; d < c.length; d++) {
          var e = c[d],
              f = this.get(e);
          a.call(b, f, e, this);
        }
      };

      function S(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

      function Oc(a, b) {
        if (a) {
          a = a.split("&");

          for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("="),
                e = null;

            if (0 <= d) {
              var f = a[c].substring(0, d);
              e = a[c].substring(d + 1);
            } else f = a[c];

            b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
          }
        }
      }

      function T(a, b) {
        this.c = this.j = this.f = "";
        this.h = null;
        this.i = this.g = "";
        this.a = !1;

        if (a instanceof T) {
          this.a = void 0 !== b ? b : a.a;
          Pc(this, a.f);
          this.j = a.j;
          Qc(this, a.c);
          Rc(this, a.h);
          this.g = a.g;
          b = a.b;
          var c = new U();
          c.c = b.c;
          b.a && (c.a = new R(b.a), c.b = b.b);
          Sc(this, c);
          this.i = a.i;
        } else a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Tc(c[5] || "", !0), Sc(this, c[6] || "", !0), this.i = Tc(c[7] || "")) : (this.a = !!b, this.b = new U(null, this.a));
      }

      T.prototype.toString = function () {
        var a = [],
            b = this.f;
        b && a.push(Uc(b, Vc, !0), ":");
        var c = this.c;
        if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Uc(b, Vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
        if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.i) && a.push("#", Uc(c, Yc));
        return a.join("");
      };

      function L(a) {
        return new T(a);
      }

      function Pc(a, b, c) {
        a.f = c ? Tc(b, !0) : b;
        a.f && (a.f = a.f.replace(/:$/, ""));
      }

      function Qc(a, b, c) {
        a.c = c ? Tc(b, !0) : b;
      }

      function Rc(a, b) {
        if (b) {
          b = Number(b);
          if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
          a.h = b;
        } else a.h = null;
      }

      function Sc(a, b, c) {
        b instanceof U ? (a.b = b, Zc(a.b, a.a)) : (c || (b = Uc(b, $c)), a.b = new U(b, a.a));
      }

      function Q(a, b, c) {
        a.b.set(b, c);
      }

      function lc(a) {
        Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
        return a;
      }

      function ad(a) {
        return a instanceof T ? L(a) : new T(a, void 0);
      }

      function bd(a, b, c, d) {
        var e = new T(null, void 0);
        a && Pc(e, a);
        b && Qc(e, b);
        c && Rc(e, c);
        d && (e.g = d);
        return e;
      }

      function Tc(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
      }

      function Uc(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
      }

      function cd(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
      }

      var Vc = /[#\/\?@]/g,
          Xc = /[#\?:]/g,
          Wc = /[#\?]/g,
          $c = /[#\?@]/g,
          Yc = /#/g;

      function U(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!b;
      }

      function V(a) {
        a.a || (a.a = new R(), a.b = 0, a.c && Oc(a.c, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
      }

      g = U.prototype;

      g.add = function (a, b) {
        V(this);
        this.c = null;
        a = W(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b += 1;
        return this;
      };

      function dd(a, b) {
        V(a);
        b = W(a, b);
        S(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, S(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a)));
      }

      function ed(a, b) {
        V(a);
        b = W(a, b);
        return S(a.a.b, b);
      }

      g.forEach = function (a, b) {
        V(this);
        this.a.forEach(function (c, d) {
          oa(c, function (e) {
            a.call(b, e, d, this);
          }, this);
        }, this);
      };

      g.L = function () {
        V(this);

        for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++) {
          for (var e = a[d], f = 0; f < e.length; f++) {
            c.push(b[d]);
          }
        }

        return c;
      };

      g.K = function (a) {
        V(this);
        var b = [];
        if ("string" === typeof a) ed(this, a) && (b = ra(b, this.a.get(W(this, a))));else {
          a = this.a.K();

          for (var c = 0; c < a.length; c++) {
            b = ra(b, a[c]);
          }
        }
        return b;
      };

      g.set = function (a, b) {
        V(this);
        this.c = null;
        a = W(this, a);
        ed(this, a) && (this.b -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.b += 1;
        return this;
      };

      g.get = function (a, b) {
        if (!a) return b;
        a = this.K(a);
        return 0 < a.length ? String(a[0]) : b;
      };

      function nc(a, b, c) {
        dd(a, b);
        0 < c.length && (a.c = null, a.a.set(W(a, b), sa(c)), a.b += c.length);
      }

      g.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";

        for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
          var d = b[c],
              e = encodeURIComponent(String(d));
          d = this.K(d);

          for (var f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h);
          }
        }

        return this.c = a.join("&");
      };

      function W(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b;
      }

      function Zc(a, b) {
        b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e && (dd(this, d), nc(this, e, c));
        }, a));
        a.f = b;
      }

      function fd(a, b) {
        this.b = a;
        this.a = b;
      }

      function gd(a) {
        this.g = a || hd;
        k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb);
        this.f = a ? this.g : 1;
        this.a = null;
        1 < this.f && (this.a = new Set());
        this.b = null;
        this.c = [];
      }

      var hd = 10;

      function id(a) {
        return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
      }

      function Dc(a) {
        return a.b ? 1 : a.a ? a.a.size : 0;
      }

      function zc(a, b) {
        return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
      }

      function Ec(a, b) {
        a.a ? a.a.add(b) : a.b = b;
      }

      function Gc(a, b) {
        a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a["delete"](b);
      }

      gd.prototype.cancel = function () {
        var e_1, _a;

        this.c = jd(this);
        if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
          try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var a = _c.value;
              a.cancel();
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }

          this.a.clear();
        }
      };

      function jd(a) {
        var e_2, _a;

        if (null != a.b) return a.c.concat(a.b.s);

        if (null != a.a && 0 !== a.a.size) {
          var b = a.c;

          try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var c = _c.value;
              b = b.concat(c.s);
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            } finally {
              if (e_2) throw e_2.error;
            }
          }

          return b;
        }

        return sa(a.c);
      }

      function kd() {}

      kd.prototype.stringify = function (a) {
        return k.JSON.stringify(a, void 0);
      };

      kd.prototype.parse = function (a) {
        return k.JSON.parse(a, void 0);
      };

      function ld() {
        this.a = new kd();
      }

      function md(a, b, c) {
        var d = c || "";

        try {
          Lc(a, function (e, f) {
            var h = e;
            n(e) && (h = vb(e));
            b.push(d + f + "=" + encodeURIComponent(h));
          });
        } catch (e) {
          throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
        }
      }

      function nd(a, b) {
        var c = new Pb();

        if (k.Image) {
          var d = new Image();
          d.onload = ka(od, c, d, "TestLoadImage: loaded", !0, b);
          d.onerror = ka(od, c, d, "TestLoadImage: error", !1, b);
          d.onabort = ka(od, c, d, "TestLoadImage: abort", !1, b);
          d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", !1, b);
          k.setTimeout(function () {
            if (d.ontimeout) d.ontimeout();
          }, 1E4);
          d.src = a;
        } else b(!1);
      }

      function od(a, b, c, d, e) {
        try {
          b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
        } catch (f) {}
      }

      var pd = k.JSON.parse;

      function X(a) {
        D.call(this);
        this.headers = new R();
        this.H = a || null;
        this.b = !1;
        this.s = this.a = null;
        this.B = "";
        this.h = 0;
        this.f = "";
        this.g = this.A = this.l = this.u = !1;
        this.o = 0;
        this.m = null;
        this.I = qd;
        this.D = this.F = !1;
      }

      r(X, D);
      var qd = "",
          rd = /^https?$/i,
          sd = ["POST", "PUT"];
      g = X.prototype;

      g.ba = function (a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.B = a;
        this.f = "";
        this.h = 0;
        this.u = !1;
        this.b = !0;
        this.a = new XMLHttpRequest();
        this.s = this.H ? bc(this.H) : bc(fc);
        this.a.onreadystatechange = p(this.za, this);

        try {
          this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
        } catch (f) {
          td(this, f);
          return;
        }

        a = c || "";
        var e = new R(this.headers);
        d && Lc(d, function (f, h) {
          e.set(h, f);
        });
        d = pa(e.L());
        c = k.FormData && a instanceof k.FormData;
        !(0 <= na(sd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, h) {
          this.a.setRequestHeader(h, f);
        }, this);
        this.I && (this.a.responseType = this.I);
        "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

        try {
          ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
        } catch (f) {
          td(this, f);
        }
      };

      function vd(a) {
        return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
      }

      function qa(a) {
        return "content-type" == a.toLowerCase();
      }

      g.xa = function () {
        "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
      };

      function td(a, b) {
        a.b = !1;
        a.a && (a.g = !0, a.a.abort(), a.g = !1);
        a.f = b;
        a.h = 5;
        wd(a);
        xd(a);
      }

      function wd(a) {
        a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
      }

      g.abort = function (a) {
        this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this));
      };

      g.G = function () {
        this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), xd(this, !0));
        X.S.G.call(this);
      };

      g.za = function () {
        this.j || (this.A || this.l || this.g ? yd(this) : this.Ta());
      };

      g.Ta = function () {
        yd(this);
      };

      function yd(a) {
        if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X())) if (a.l && 4 == N(a)) Jb(a.za, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
          a.b = !1;

          try {
            var b = a.X();

            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = !0;
                break a;

              default:
                c = !1;
            }

            var d;

            if (!(d = c)) {
              var e;

              if (e = 0 === b) {
                var f = String(a.B).match(Nc)[1] || null;

                if (!f && k.self && k.self.location) {
                  var h = k.self.location.protocol;
                  f = h.substr(0, h.length - 1);
                }

                e = !rd.test(f ? f.toLowerCase() : "");
              }

              d = e;
            }

            if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
              a.h = 6;

              try {
                var m = 2 < N(a) ? a.a.statusText : "";
              } catch (l) {
                m = "";
              }

              a.f = m + " [" + a.X() + "]";
              wd(a);
            }
          } finally {
            xd(a);
          }
        }
      }

      function xd(a, b) {
        if (a.a) {
          ud(a);
          var c = a.a,
              d = a.s[0] ? aa : null;
          a.a = null;
          a.s = null;
          b || a.dispatchEvent("ready");

          try {
            c.onreadystatechange = d;
          } catch (e) {}
        }
      }

      function ud(a) {
        a.a && a.D && (a.a.ontimeout = null);
        a.m && (k.clearTimeout(a.m), a.m = null);
      }

      function N(a) {
        return a.a ? a.a.readyState : 0;
      }

      g.X = function () {
        try {
          return 2 < N(this) ? this.a.status : -1;
        } catch (a) {
          return -1;
        }
      };

      g.$ = function () {
        try {
          return this.a ? this.a.responseText : "";
        } catch (a) {
          return "";
        }
      };

      g.Na = function (a) {
        if (this.a) {
          var b = this.a.responseText;
          a && 0 == b.indexOf(a) && (b = b.substring(a.length));
          return pd(b);
        }
      };

      g.ua = function () {
        return this.h;
      };

      g.Qa = function () {
        return "string" === typeof this.f ? this.f : String(this.f);
      };

      function zd(a) {
        var b = "";
        Aa(a, function (c, d) {
          b += d;
          b += ":";
          b += c;
          b += "\r\n";
        });
        return b;
      }

      function Ad(a, b, c) {
        a: {
          for (d in c) {
            var d = !1;
            break a;
          }

          d = !0;
        }

        d || (c = zd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : Q(a, b, c));
      }

      function Bd(a, b, c) {
        return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
      }

      function Cd(a) {
        this.pa = 0;
        this.g = [];
        this.c = new Pb();
        this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
        this.La = this.R = 0;
        this.Ia = Bd("failFast", !1, a);
        this.H = this.m = this.j = this.h = this.f = null;
        this.T = !0;
        this.I = this.oa = this.P = -1;
        this.U = this.o = this.u = 0;
        this.Fa = Bd("baseRetryDelayMs", 5E3, a);
        this.Ma = Bd("retryDelaySeedMs", 1E4, a);
        this.Ja = Bd("forwardChannelMaxRetries", 2, a);
        this.ma = Bd("forwardChannelRequestTimeoutMs", 2E4, a);
        this.Ka = a && a.g || void 0;
        this.D = void 0;
        this.C = a && a.supportsCrossDomainXhr || !1;
        this.J = "";
        this.b = new gd(a && a.concurrentRequestLimit);
        this.ka = new ld();
        this.da = a && a.fastHandshake || !1;
        this.Ga = a && a.b || !1;
        a && a.f && (this.c.a = !1);
        a && a.forceLongPolling && (this.T = !1);
        this.V = !this.da && this.T && a && a.c || !1;
        this.ea = void 0;
        this.N = 0;
        this.F = !1;
        this.s = null;
      }

      g = Cd.prototype;
      g.ha = 8;
      g.v = 1;

      function Jc(a) {
        Dd(a);

        if (3 == a.v) {
          var b = a.R++,
              c = L(a.B);
          Q(c, "SID", a.J);
          Q(c, "RID", b);
          Q(c, "TYPE", "terminate");
          Ed(a, c);
          b = new K(a, a.c, b, void 0);
          b.H = 2;
          b.i = lc(L(c));
          c = !1;
          k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
          !c && k.Image && (new Image().src = b.i, c = !0);
          c || (b.a = oc(b.g, null), b.a.ba(b.i));
          b.u = q();
          M(b);
        }

        Fd(a);
      }

      function Bc(a) {
        a.a && (xc(a), a.a.cancel(), a.a = null);
      }

      function Dd(a) {
        Bc(a);
        a.j && (k.clearTimeout(a.j), a.j = null);
        Ac(a);
        a.b.cancel();
        a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null);
      }

      function Gd(a, b) {
        a.g.push(new fd(a.La++, b));
        3 == a.v && Ic(a);
      }

      function Ic(a) {
        id(a.b) || a.h || (a.h = !0, Cb(a.Ba, a), a.u = 0);
      }

      function Hd(a, b) {
        if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0)) return !1;
        if (a.h) return a.g = b.s.concat(a.g), !0;
        if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja)) return !1;
        a.h = I(p(a.Ba, a, b), Id(a, a.u));
        a.u++;
        return !0;
      }

      g.Ba = function (a) {
        if (this.h) if (this.h = null, 1 == this.v) {
          if (!a) {
            this.R = Math.floor(1E5 * Math.random());
            a = this.R++;
            var b = new K(this, this.c, a, void 0),
                c = this.l;
            this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
            null === this.i && (b.B = c);
            var d;
            if (this.da) a: {
              for (var e = d = 0; e < this.g.length; e++) {
                b: {
                  var f = this.g[e];

                  if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                    f = f.length;
                    break b;
                  }

                  f = void 0;
                }

                if (void 0 === f) break;
                d += f;

                if (4096 < d) {
                  d = e;
                  break a;
                }

                if (4096 === d || e === this.g.length - 1) {
                  d = e + 1;
                  break a;
                }
              }

              d = 1E3;
            } else d = 1E3;
            d = Jd(this, b, d);
            e = L(this.B);
            Q(e, "RID", a);
            Q(e, "CVER", 22);
            this.A && Q(e, "X-HTTP-Session-Id", this.A);
            Ed(this, e);
            this.i && c && Ad(e, this.i, c);
            Ec(this.b, b);
            this.Ga && Q(e, "TYPE", "init");
            this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b.V = !0, kc(b, e, null)) : kc(b, e, d);
            this.v = 2;
          }
        } else 3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
      };

      function Kd(a, b) {
        var c;
        b ? c = b.f : c = a.R++;
        var d = L(a.B);
        Q(d, "SID", a.J);
        Q(d, "RID", c);
        Q(d, "AID", a.P);
        Ed(a, d);
        a.i && a.l && Ad(d, a.i, a.l);
        c = new K(a, a.c, c, a.u + 1);
        null === a.i && (c.B = a.l);
        b && (a.g = b.s.concat(a.g));
        b = Jd(a, c, 1E3);
        c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random()));
        Ec(a.b, c);
        kc(c, d, b);
      }

      function Ed(a, b) {
        a.f && Lc({}, function (c, d) {
          Q(b, d, c);
        });
      }

      function Jd(a, b, c) {
        c = Math.min(a.g.length, c);
        var d = a.f ? p(a.f.Ha, a.f, a) : null;

        a: for (var e = a.g, f = -1;;) {
          var h = ["count=" + c];
          -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);

          for (var m = !0, l = 0; l < c; l++) {
            var t = e[l].b,
                B = e[l].a;
            t -= f;
            if (0 > t) f = Math.max(0, e[l].b - 100), m = !1;else try {
              md(B, h, "req" + t + "_");
            } catch (z) {
              d && d(B);
            }
          }

          if (m) {
            d = h.join("&");
            break a;
          }
        }

        a = a.g.splice(0, c);
        b.s = a;
        return d;
      }

      function Hc(a) {
        a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0);
      }

      function Cc(a) {
        if (a.a || a.j || 3 <= a.o) return !1;
        a.U++;
        a.j = I(p(a.Aa, a), Id(a, a.o));
        a.o++;
        return !0;
      }

      g.Aa = function () {
        this.j = null;
        Ld(this);

        if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
          var a = 2 * this.N;
          this.c.info("BP detection timer enabled: " + a);
          this.s = I(p(this.Sa, this), a);
        }
      };

      g.Sa = function () {
        this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Bc(this), Ld(this));
      };

      function xc(a) {
        null != a.s && (k.clearTimeout(a.s), a.s = null);
      }

      function Ld(a) {
        a.a = new K(a, a.c, "rpc", a.U);
        null === a.i && (a.a.B = a.l);
        a.a.O = 0;
        var b = L(a.la);
        Q(b, "RID", "rpc");
        Q(b, "SID", a.J);
        Q(b, "CI", a.H ? "0" : "1");
        Q(b, "AID", a.P);
        Ed(a, b);
        Q(b, "TYPE", "xmlhttp");
        a.i && a.l && Ad(b, a.i, a.l);
        a.D && a.a.setTimeout(a.D);
        var c = a.a;
        a = a.ga;
        c.H = 1;
        c.i = lc(L(b));
        c.j = null;
        c.I = !0;
        mc(c, a);
      }

      g.Ra = function () {
        null != this.m && (this.m = null, Bc(this), Cc(this), H(19));
      };

      function Ac(a) {
        null != a.m && (k.clearTimeout(a.m), a.m = null);
      }

      function uc(a, b) {
        var c = null;

        if (a.a == b) {
          Ac(a);
          xc(a);
          a.a = null;
          var d = 2;
        } else if (zc(a.b, b)) c = b.s, Gc(a.b, b), d = 1;else return;

        a.I = b.N;
        if (0 != a.v) if (b.b) {
          if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Vb();
            d.dispatchEvent(new Yb(d, c, b, e));
            Ic(a);
          } else Hc(a);
        } else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b) || 2 == d && Cc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
          case 1:
            P(a, 5);
            break;

          case 4:
            P(a, 10);
            break;

          case 3:
            P(a, 6);
            break;

          default:
            P(a, 2);
        }
      }

      function Id(a, b) {
        var c = a.Fa + Math.floor(Math.random() * a.Ma);
        a.f || (c *= 2);
        return c * b;
      }

      function P(a, b) {
        a.c.info("Error code " + b);

        if (2 == b) {
          var c = null;
          a.f && (c = null);
          var d = p(a.Xa, a);
          c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
          nd(c.toString(), d);
        } else H(2);

        a.v = 0;
        a.f && a.f.ra(b);
        Fd(a);
        Dd(a);
      }

      g.Xa = function (a) {
        a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1));
      };

      function Fd(a) {
        a.v = 0;
        a.I = -1;

        if (a.f) {
          if (0 != jd(a.b).length || 0 != a.g.length) a.b.c.length = 0, sa(a.g), a.g.length = 0;
          a.f.qa();
        }
      }

      function Fc(a, b, c) {
        var d = ad(c);
        if ("" != d.c) b && Qc(d, b + "." + d.c), Rc(d, d.h);else {
          var e = k.location;
          d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
        }
        a.W && Aa(a.W, function (f, h) {
          Q(d, h, f);
        });
        b = a.A;
        c = a.na;
        b && c && Q(d, b, c);
        Q(d, "VER", a.ha);
        Ed(a, d);
        return d;
      }

      function oc(a, b) {
        if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
        b = new X(a.Ka);
        b.F = a.C;
        return b;
      }

      function Md() {}

      g = Md.prototype;

      g.ta = function () {};

      g.sa = function () {};

      g.ra = function () {};

      g.qa = function () {};

      g.Ha = function () {};

      function Nd() {
        if (x && !(10 <= Number(Ua))) throw Error("Environmental error: no available transport.");
      }

      Nd.prototype.a = function (a, b) {
        return new Y(a, b);
      };

      function Y(a, b) {
        D.call(this);
        this.a = new Cd(b);
        this.l = a;
        this.b = b && b.messageUrlParams || null;
        a = b && b.messageHeaders || null;
        b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
          "X-Client-Protocol": "webchannel"
        });
        this.a.l = a;
        a = b && b.initMessageHeaders || null;
        b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
          "X-WebChannel-Content-Type": b.messageContentType
        });
        b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = {
          "X-WebChannel-Client-Profile": b.a
        });
        this.a.O = a;
        (a = b && b.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
        this.h = b && b.supportsCrossDomainXhr || !1;
        this.g = b && b.sendRawJson || !1;
        (b = b && b.httpSessionIdParam) && !ta(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
        this.f = new Z(this);
      }

      r(Y, D);
      g = Y.prototype;

      g.addEventListener = function (a, b, c, d) {
        Y.S.addEventListener.call(this, a, b, c, d);
      };

      g.removeEventListener = function (a, b, c, d) {
        Y.S.removeEventListener.call(this, a, b, c, d);
      };

      g.Oa = function () {
        this.a.f = this.f;
        this.h && (this.a.C = !0);
        var a = this.a,
            b = this.l,
            c = this.b || void 0;
        H(0);
        a.fa = b;
        a.W = c || {};
        a.H = a.T;
        a.B = Fc(a, null, a.fa);
        Ic(a);
      };

      g.close = function () {
        Jc(this.a);
      };

      g.Pa = function (a) {
        if ("string" === typeof a) {
          var b = {};
          b.__data__ = a;
          Gd(this.a, b);
        } else this.g ? (b = {}, b.__data__ = vb(a), Gd(this.a, b)) : Gd(this.a, a);
      };

      g.G = function () {
        this.a.f = null;
        delete this.f;
        Jc(this.a);
        delete this.a;
        Y.S.G.call(this);
      };

      function Od(a) {
        dc.call(this);
        var b = a.__sm__;

        if (b) {
          a: {
            for (var c in b) {
              a = c;
              break a;
            }

            a = void 0;
          }

          (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
        } else this.data = a;
      }

      r(Od, dc);

      function Pd() {
        ec.call(this);
        this.status = 1;
      }

      r(Pd, ec);

      function Z(a) {
        this.a = a;
      }

      r(Z, Md);

      Z.prototype.ta = function () {
        this.a.dispatchEvent("a");
      };

      Z.prototype.sa = function (a) {
        this.a.dispatchEvent(new Od(a));
      };

      Z.prototype.ra = function (a) {
        this.a.dispatchEvent(new Pd(a));
      };

      Z.prototype.qa = function () {
        this.a.dispatchEvent("b");
      };
      /*
      Copyright 2017 Google LLC
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      */


      Nd.prototype.createWebChannel = Nd.prototype.a;
      Y.prototype.send = Y.prototype.Pa;
      Y.prototype.open = Y.prototype.Oa;
      Y.prototype.close = Y.prototype.close;
      Zb.NO_ERROR = 0;
      Zb.TIMEOUT = 8;
      Zb.HTTP_ERROR = 6;
      $b.COMPLETE = "complete";
      cc.EventType = J;
      J.OPEN = "a";
      J.CLOSE = "b";
      J.ERROR = "c";
      J.MESSAGE = "d";
      D.prototype.listen = D.prototype.va;
      X.prototype.listenOnce = X.prototype.wa;
      X.prototype.getLastError = X.prototype.Qa;
      X.prototype.getLastErrorCode = X.prototype.ua;
      X.prototype.getStatus = X.prototype.X;
      X.prototype.getResponseJson = X.prototype.Na;
      X.prototype.getResponseText = X.prototype.$;
      X.prototype.send = X.prototype.ba;

      var createWebChannelTransport = function createWebChannelTransport() {
        return new Nd();
      };

      var ErrorCode = Zb;
      var EventType = $b;
      var WebChannel = cc;
      var XhrIo = X;
      var esm = {
        createWebChannelTransport: createWebChannelTransport,
        ErrorCode: ErrorCode,
        EventType: EventType,
        WebChannel: WebChannel,
        XhrIo: XhrIo
      };
      /* harmony default export */

      __webpack_exports__["default"] = esm; //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/firebase/firestore/dist/index.esm.js":
    /*!***********************************************************!*\
      !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
      \***********************************************************/

    /*! no exports provided */

    /***/
    function node_modulesFirebaseFirestoreDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/firestore */
      "./node_modules/@firebase/firestore/dist/index.esm.js"); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.ts ***!
      \******************************************************************/

    /*! exports provided: ExploreContainerComponent */

    /***/
    function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
        return ExploreContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      ExploreContainerComponent.ctorParameters = function () {
        return [];
      };

      ExploreContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore-container.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore-container.component.scss */
        "./src/app/explore-container/explore-container.component.scss"))["default"]]
      })], ExploreContainerComponent);
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/explore-container/explore-container.module.ts ***!
      \***************************************************************/

    /*! exports provided: ExploreContainerComponentModule */

    /***/
    function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
        return ExploreContainerComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-container.component */
      "./src/app/explore-container/explore-container.component.ts");

      var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
      })], ExploreContainerComponentModule);
      /***/
    },

    /***/
    "./src/app/services/authentication.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticateService */

    /***/
    function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () {
        return AuthenticateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var AuthenticateService = /*#__PURE__*/function () {
        function AuthenticateService(afAuth, afStore) {
          var _this3 = this;

          _classCallCheck(this, AuthenticateService);

          this.afAuth = afAuth;
          this.afStore = afStore;
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this3.userData = user;
              localStorage.setItem('user', JSON.stringify(_this3.userData));
              JSON.parse(localStorage.getItem('user'));
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          });
        } // Logs user in using firebase signIn method if it doesnt match then reject


        _createClass(AuthenticateService, [{
          key: "loginUser",
          value: function loginUser(value) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.afAuth.signInWithEmailAndPassword(value.email, value.password).then(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          } // Logs out user and returns to console that user is logged out

        }, {
          key: "logoutUser",
          value: function logoutUser() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              if (_this5.afAuth.currentUser) {
                _this5.afAuth.signOut().then(function () {
                  console.log("Logged Out");
                  resolve();
                })["catch"](function (error) {
                  reject();
                });
              }
            });
          } // Returns user data from current user

        }, {
          key: "userDetails",
          value: function userDetails() {
            return this.afAuth.user;
          }
        }, {
          key: "SetUserData",
          value: function SetUserData(user) {
            var userRef = this.afStore.doc('users/${user.uid}');
            var userData = {
              uid: user.uid,
              email: user.email
            };
            return userRef.set(userData, {
              merge: true
            });
          }
        }]);

        return AuthenticateService;
      }();

      AuthenticateService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      };

      AuthenticateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthenticateService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~admin-login-admin-login-module~tab3-tab3-module-es5.js.map