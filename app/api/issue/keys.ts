const key = {
  getVolumes: () => ["get-volumes"],
  getVolume: () => ["get-volume"],
  getIssues: () => ["get-issues"],
  getIssue: () => ["get-issue"],
  getVolumeIssues: (volumeId: string) => [`get-${volumeId}-issues`],
  creteIssue: () => ["create-issue"],
};
export default key;
