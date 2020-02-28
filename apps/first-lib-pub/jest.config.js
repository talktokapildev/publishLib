module.exports = {
  name: 'first-lib-pub',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/first-lib-pub',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
